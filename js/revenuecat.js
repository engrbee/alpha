// RevenueCat entitlement unlock for Surge (MITM).
// Strategy per /v1/subscribers response:
//  1. If the body carries product_entitlement_mapping (the app's actual configured
//     products/entitlements), grant every entitlement in it. Existing entries that
//     are still active are kept untouched (real purchases stay real); missing or
//     expired ones are filled with fabricated grants. No app identification needed.
//  2. Else retrieve /v1/product_entitlement_mapping on the fly (using the request's
//     own Authorization header, cached via $persistentStore for 24h) and grant from
//     that - covers apps that fetch the mapping separately (e.g. SwiftServer).
//  3. Else match the app by User-Agent substring against uamap (below; keys are
//     matched against the decoded UA, so spaces/unicode are written literally) and
//     rewrite the /v1/subscribers response.
//  4. Else fall back to a global date find-&-replace.
// Sensitive headers (Authorization, x-revenuecat-etag) are stripped from the
// response handed to the app. The Authorization header must stay on the REQUEST,
// otherwise RevenueCat would reject it. The /v1/product_entitlement_mapping fetch
// is made via $httpClient and therefore is not re-intercepted by this script.

const DEBUG = true;
const log = (...args) => { if (DEBUG) console.log(...args); };

const ACTIVE_UNTIL = "2026-12-31T00:00:00Z";
const PURCHASED_AT = "2026-01-01T00:00:00Z";

const uamap = {
  "stoic": { "name": "ai-plan", "id": "com.mlobodzinski.Stoic.yearlyAI" }
};

const sub_data = {
  auto_resume_date: null,
  billing_issues_detected_at: null,
  display_name: "Premium",
  expires_date: ACTIVE_UNTIL,
  grace_period_expires_date: null,
  is_sandbox: false,
  management_url: "https://apps.apple.com/account/subscriptions",
  original_purchase_date: PURCHASED_AT,
  ownership_type: "PURCHASED",
  period_type: "normal",
  price: { amount: 99.99, currency: "USD" },
  purchase_date: PURCHASED_AT,
  refunded_at: null,
  store: "app_store",
  store_transaction_id: "510002415985363",
  unsubscribe_detected_at: null
};

const ent_data = {
  grace_period_expires_date: null,
  purchase_date: PURCHASED_AT,
  expires_date: ACTIVE_UNTIL
};

const REQUEST =
  (typeof $request !== "undefined" && $request) || { headers: {} };
const RESPONSE = typeof $response !== "undefined" ? $response : null;
const headers = Object.keys(REQUEST.headers || {}).reduce((acc, key) => {
  acc[key.toLowerCase()] = REQUEST.headers[key];
  return acc;
}, {});

const rawUa = String(headers["user-agent"] || "");
const auth = String(headers["authorization"] || "");
let ua = rawUa;
try { ua = decodeURIComponent(rawUa); } catch (_) { /* keep raw UA */ }

log("======== RevenueCat hook ========");
log("UA:", ua);

const findApp = () => {
  for (const key of Object.keys(uamap)) {
	if ((ua && ua.includes(key)) || rawUa.includes(key)) return uamap[key];
  }
  return null;
};

const now = Date.now();

const isActive = (entry) => {
  if (!entry) return false;
  const activeUntil = entry.expires_date ? Date.parse(entry.expires_date) : Infinity;
  const graceUntil = entry.grace_period_expires_date
	? Date.parse(entry.grace_period_expires_date)
	: -Infinity;
  return activeUntil > now || graceUntil > now;
};

const stripSensitiveHeaders = (respHeaders) => {
  const out = {};
  for (const [k, v] of Object.entries(respHeaders || {})) {
	const key = k.toLowerCase();
	if (key === "authorization" || key === "x-revenuecat-etag") continue;
	out[k] = v;
  }
  return out;
};

// Normalize both mapping shapes into productId -> [entId,...]:
//  - in subscriber body:   product -> { entitlement_identifiers: [...] }
//  - mapping endpoint:     product -> { entitlements: [...], product_identifier }
const normalizeMapping = (mapping) => {
  const out = {};
  for (const pid of Object.keys(mapping || {})) {
	const entry = mapping[pid] || {};
	const ids = entry.entitlement_identifiers || entry.entitlements || [];
	if (Array.isArray(ids) && ids.length) out[pid] = ids;
  }
  return out;
};

const applyMapping = (obj, mapping) => {
  const products = Object.keys(mapping);
  const entToProduct = {};
  for (const pid of products) {
	for (const eid of mapping[pid]) if (!(eid in entToProduct)) entToProduct[eid] = pid;
  }

  const entitlements = obj.subscriber.entitlements || {};
  const subscriptions = obj.subscriber.subscriptions || {};

  let tx = 510002415985363;
  for (const pid of products) {
	if (isActive(subscriptions[pid])) continue;
	tx += 1;
	subscriptions[pid] = { ...sub_data, store_transaction_id: String(tx) };
  }
  for (const eid of Object.keys(entToProduct)) {
	if (isActive(entitlements[eid])) continue;
	entitlements[eid] = { ...ent_data, product_identifier: entToProduct[eid] };
  }
  obj.subscriber.entitlements = entitlements;
  obj.subscriber.subscriptions = subscriptions;
};

const grantByMapping = (obj) => {
  const mapping = normalizeMapping(obj.product_entitlement_mapping);
  if (!Object.keys(mapping).length) return false;
  applyMapping(obj, mapping);
  return true;
};

const MAPPING_URL = "https://api.revenuecat.com/v1/product_entitlement_mapping";
const CACHE_KEY = "rc_mapping_cache";
const CACHE_TTL_MS = 24 * 3600 * 1000;

const readCache = () => {
  try {
	const raw = typeof $persistentStore !== "undefined" && $persistentStore.read(CACHE_KEY);
	if (!raw) return null;
	const data = JSON.parse(raw);
	if (data.auth === auth && Date.now() - data.ts < CACHE_TTL_MS && data.mapping) return data.mapping;
  } catch (_) { /* ignore */ }
  return null;
};

const writeCache = (mapping) => {
  try {
	if (typeof $persistentStore !== "undefined") {
	  $persistentStore.write(JSON.stringify({ ts: Date.now(), auth, mapping }), CACHE_KEY);
	}
  } catch (_) { /* ignore */ }
};

const fetchMapping = (cb) => {
  const cached = readCache();
  if (cached) return cb(cached);
  if (typeof $httpClient === "undefined" || !$httpClient.get) return cb(null);
  if (!auth) return cb(null);

  log("Fetching /v1/product_entitlement_mapping...");
  $httpClient.get({
	url: MAPPING_URL,
	headers: {
	  Authorization: auth,
	  Accept: "*/*",
	  "Content-Type": "application/json",
	  "X-Platform": "macOS"
	},
	timeout: 5000
  }, (err, resp, body) => {
	let mapping = null;
	try {
	  mapping = normalizeMapping(JSON.parse(body || "").product_entitlement_mapping);
	  if (!Object.keys(mapping).length) mapping = null;
	} catch (_) { /* not JSON */ }
	if (mapping) writeCache(mapping);
	else log("Mapping fetch failed:", err);
	cb(mapping);
  });
};

const uaOrFallback = (obj, body, out, done) => {
  const hit = findApp();
  if (hit) {
	log("Hook by user agent:", hit);
	obj.subscriber.subscriptions = { [hit.id]: sub_data };
	obj.subscriber.entitlements = { [hit.name]: { ...ent_data, product_identifier: hit.id } };
	return done({ ...out, body: JSON.stringify(obj) });
  }

  if (body.includes("expires_date")) {
	log("Hook by find & replace");
	return done({
	  ...out,
	  body: body
		.replace(/"expires_date":\s*".*?"/g, `"expires_date":"${ACTIVE_UNTIL}"`)
		.replace(/"purchase_date":\s*".*?"/g, `"purchase_date":"${PURCHASED_AT}"`)
		.replace(/"first_seen":\s*".*?"/g, `"first_seen":"${PURCHASED_AT}"`)
		.replace(/"original_purchase_date":\s*".*?"/g, `"original_purchase_date":"${PURCHASED_AT}"`)
		.replace(/"unsubscribe_detected_at":\s*".*?"/g, '"unsubscribe_detected_at":null')
		.replace(/"grace_period_expires_date":\s*".*?"/g, '"grace_period_expires_date":null')
		.replace(/"period_type":\s*"\w+"/g, '"period_type":"normal"')
	});
  }

  log("Hook failed: no mapping / no matching app / no subscription in body");
  done(null);
};

const buildResp = (done) => {
  if (!RESPONSE) {
	delete headers["x-revenuecat-etag"];
	delete headers["X-RevenueCat-ETag"];
	return done({ headers });
  }
  if (!RESPONSE.body) { log("Hook failed: no response body"); return done(null); }
  const body = RESPONSE.body;

  let obj;
  try { obj = JSON.parse(body); } catch (_) { log("Hook failed: invalid JSON"); return done(null); }
  if (!obj || !obj.subscriber) { log("Hook failed: no subscriber object"); return done(null); }

  const out = { headers: stripSensitiveHeaders(RESPONSE.headers) };

  if (grantByMapping(obj)) {
	log("Hook by in-body product_entitlement_mapping");
	return done({ ...out, body: JSON.stringify(obj) });
  }

  if (!auth) return uaOrFallback(obj, body, out, done);
  fetchMapping((mapping) => {
	if (mapping && Object.keys(mapping).length) {
	  log("Hook by fetched product_entitlement_mapping");
	  applyMapping(obj, mapping);
	  return done({ ...out, body: JSON.stringify(obj) });
	}
	uaOrFallback(obj, body, out, done);
  });
};

try {
  buildResp((patched) => {
	if (patched) $done(patched);
	else $done(RESPONSE);
  });
} catch (err) {
  log("Hook error:", err);
  $done(RESPONSE);
}
