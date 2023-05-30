let resp = {};
let body = typeof $response != "undefined" && $response.body || null;
let obj = JSON.parse(body);
let ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
let list = {
  "Balance": {"name": "pro", "id": "ios_subscription_annual_intl_intro_free_69.99_2021.12.06"},
  "Rootd": {"name": "pro", "id": "subscription_lifetime"},
  "Structured": {"name": "pro", "id": "app.structured.pro.yearly"},
  "VSCO": {"name": "membership", "id": "vscopro_global_5999_annual_7D_free"},
  "Photo": {"name": "pro", "id": "pixelmator_photo_lifetime_v1"},
  "Lungy": {"name": "pro", "id": "lungy_1999_lifetime"},
  "ScannerPro": {"name": "premium", "id": "com.readdle.Scanner.subscription.year25"},
  "NotePlan": {"name": "pro", "id": "co.noteplan.subscription.businessclass.annual"},
  "Prisma": {"name": "premium", "id": "premium.promo.annual"},
  "Endel": {"name": "pro", "id": "12_Months_Instant_Offer"},
  "PhotoRoom": {"name": "pro", "id": "com.background.pro.yearly"},
  "Balance": {"name": "pro", "id": "ios_subscription_annual_69.99_2020.04.15"},
  "Harukong": {"name": "premium", "id": "com.bluesignum.harukong.1yearSubscription"},
  "Uptime": {"name": "premium", "id": "com.wingsy.uptime_premium_year"},
  "Planta": {"name": "premium", "id": "com.stromming.Plants.lifetime"},
  "TouchRetouch": {"name": "premium", "id": "tr5_yearlysubsc_15dlrs_1"}
};
let sub_data = {"original_purchase_date":"2022-01-01T08:00:00Z","expires_date":"2099-12-31T23:59:59Z","is_sandbox":false,"refunded_at":null,"unsubscribe_detected_at":null,"grace_period_expires_date":null,"period_type":"active","purchase_date":"2022-01-01T08:00:00Z","billing_issues_detected_at":null,"ownership_type":"PURCHASED","store":"app_store","auto_resume_date":null};
let ent_data = {"grace_period_expires_date":null,"purchase_date":"2022-01-01T08:00:00Z","expires_date":"2099-12-31T23:59:59Z"};

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  resp.headers = $request.headers;
} else if (obj && obj.subscriber && body.indexOf("expires_date") == -1) {
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};
  for (const i in list) {
    if (new RegExp(`^${i}`, `i`).test(ua)) {
      obj.subscriber.subscriptions[list[i].id] = sub_data;
      obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(ent_data));
      obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
      break;
    }
  };
  resp.body = JSON.stringify(obj);
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
