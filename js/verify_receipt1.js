var body = $response.body;
var obj = JSON.parse(body);

if (body.indexOf("expires_date") != -1) {
 /* obj["receipt"]["original_purchase_date"] = "2022-01-01 08:00:00 Etc/GMT";
  obj["receipt"]["original_purchase_date_pst"] = "2022-01-01 08:00:00 America/Los_Angeles";
  obj["receipt"]["original_purchase_date_ms"] = "1641024000000";
  obj["receipt"]["in_app"][0]["purchase_date"] = "2022-01-01 08:00:00 Etc/GMT";
  obj["receipt"]["in_app"][0]["purchase_date_pst"] = "2022-01-01 08:00:00 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["purchase_date_ms"] = "1641024000000";
  obj["receipt"]["in_app"][0]["original_purchase_date"] = "2022-01-01 08:00:00 Etc/GMT";
  obj["receipt"]["in_app"][0]["original_purchase_date_pst"] = "2022-01-01 08:00:00 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["original_purchase_date_ms"] = "1641024000000";*/
  obj["receipt"]["in_app"][0]["expires_date"] = "2099-12-31 23:59:59 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-12-31 23:59:59 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "4102415999000";
  obj["receipt"]["in_app"][0]["is_trial_period"] = false;
  var data = obj["receipt"]["in_app"];
  obj["latest_receipt_info"] = data;
  $done({body: JSON.stringify(obj)});
} else {
  $done({body: body});
};
