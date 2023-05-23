const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  resp.headers = $request.headers;
} else if (ua['indexOf']('VSCO') != -1) {
  obj.subscriber.entitlements = "membership" : {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "vscopro_global_5999_annual_7D_free",
    "purchase_date": "2022-01-01T08:00:00Z"
  };
  obj.subscriber.subscriptions = {
    "vscopro_global_5999_annual_7D_free": {
      "auto_resume_date": null,
      "billing_issues_detected_at": null,
      "expires_date": "2099-12-31T23:59:59Z",
      "grace_period_expires_date": null,
      "is_sandbox": false,
      "original_purchase_date": "2022-01-01T08:00:00Z",
      "ownership_type": "PURCHASED",
      "period_type": "active",
      "purchase_date": "2022-01-01T08:00:00Z",
      "refunded_at": null,
      "store": "app_store",
      "unsubscribe_detected_at": null
    }
  };
  resp.body = JSON.stringify(obj);
} else if (obj && obj.subscriber) {
  resp.body = JSON
    .stringify(obj)
    .replace(/\"expires_date\":\".*?"/g, '"expires_date":"2099-12-31T23:59:59Z"')
    .replace(/\"purchase_date\":\".*?"/g, '"purchase_date":"2022-01-01T08:00:00Z"')
    .replace(/\"first_seen\":\".*?"/g, '"first_seen":"2022-01-01T08:00:00Z"')
    .replace(/\"original_purchase_date\":\".*?"/g, '"original_purchase_date":"2022-01-01T08:00:00Z"')
    .replace(/\"unsubscribe_detected_at\":\".*?"/g, '"unsubscribe_detected_at":null')
    .replace(/\"period_type\":\"\w+\"/g, '"period_type":"active"');
};

$done(resp);
