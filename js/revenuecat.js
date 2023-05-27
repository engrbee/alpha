let resp = {};
let body = typeof $response != "undefined" && $response.body || null;
let obj = JSON.parse(body);
let ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
let list = {
  'Balance': {name: 'pro', id: 'ios_subscription_annual_intl_intro_free_69.99_2021.12.06'},
  'Rootd': {name: 'pro', id: 'subscription_lifetime'},
  'TouchRetouch': {name: 'pro', id: 'subscription_lifetime'},
  'Structured': {name: 'premium', id: 'tr5_yearlysubsc_15dlrs_1'}
};
let data = {"expires_date": "2099-12-31T23:59:59Z", "original_purchase_date": "2021-01-01T08:00:00Z", "purchase_date": "2021-01-01T08:00:00Z"};

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  resp.headers = $request.headers;
} else if (obj && obj.subscriber && body.indexOf("expires_date") == -1) {
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlement = obj.subscriber.entitlement || {};
  for (const i in list) {
    if (new RegExp(`^${i}`, `i`).test(ua)) {
      obj.subscriber.subscriptions[list[i].id] = data;
      obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
      obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
      break;
    }
  };
  resp.body = JSON
    .stringify(obj)
    .replace(/\"expires_date\":\".*?"/g, '"expires_date":"2099-12-31T23:59:59Z"')
    .replace(/\"period_type\":\"\w+\"/g, '"period_type":"active"');
} else if (obj && obj.subscriber) {
  resp.body = body
    .replace(/\"expires_date\":\".*?\"/g, '"expires_date":"2099-12-31T23:59:59Z"')
    .replace(/\"purchase_date\":\".*?\"/g, '"purchase_date":"2022-01-01T08:00:00Z"')
    .replace(/\"first_seen\":\".*?\"/g, '"first_seen":"2022-01-01T08:00:00Z"')
    .replace(/\"original_purchase_date\":\".*?\"/g, '"original_purchase_date":"2022-01-01T08:00:00Z"')
    .replace(/\"unsubscribe_detected_at\":\".*?\"/g, '"unsubscribe_detected_at":null')
    .replace(/\"period_type\":\"\w+\"/g, '"period_type":"active"');
};

$done(resp);
