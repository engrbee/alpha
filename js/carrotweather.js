const path1 = "findSubscriptionsForUserId";
const path2 = "blooming-forest-98906";

var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  obj.result.subscriptions[0]["expirationTime"] = "1704038399000";
  obj.result.subscriptions[0]["autoRenewStatus"] = 1;
};

if (url.indexOf(path2) != -1) {
  obj["receipt"]["in_app"][0]["expires_date"] = "2023-12-31 23:59:59 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2023-12-31 23:59:59 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "1704038399000";
  obj["latest_receipt_info"][0]["expires_date"] = "2023-12-31 23:59:59 Etc/GMT";
  obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-12-31 23:59:59 America/Los_Angeles";
  obj["latest_receipt_info"][0]["expires_date_ms"] = "1704038399000";
};

$done({body: JSON.stringify(obj)});