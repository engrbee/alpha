const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
  resp.body = JSON
    .stringify(obj)
    .replace(/\"expires_date\":\".*?"/g, '"expires_date":"2099-12-31T23:59:59Z"')
    .replace(/\"period_type\":\"\w+\"/g, '"period_type":"active"');
};

$done(resp);
