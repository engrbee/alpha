// const path1 = "/registrations/";
// const path2 = "/refresh/";

// var url = $request.url;
// var body = $response.body;
// var obj = JSON.parse(body);

// if (body.indexOf("subscriptions") && url.indexOf(path1) != -1) {
// /*    obj["registrations"][0]["purchased_product_ids"] = "ITOF3_SUB_ANNUAL";
//     obj["purchased_product_ids"] = "ITOF3_SUB_ANNUAL";
//     obj["subscriptions"][1]["product_id"] = "ITOF3_SUB_ANNUAL";
//     obj["subscriptions"][1]["auto_renew_status"] = true */
//     obj["subscriptions"][1]["expires_date"] = "2099-12-31T23:59:59.000000+08:00";
//     $done({body: JSON.stringify(obj)});
// } else if (body.indexOf("expires_at") && url.indexOf(path2) != -1) {
//     var body = $response
//     .body
//     .replace('"expires_at":\s*[\d\.]+', '"expires_at":4102415999.000000');
//     $done({body: body})
// } else {
//     $done({body: body});
// };

var body = $response
  .body
  .replace(/\"expires_date\":\".*?\"/g, '"expires_date":"2099-12-31T23:59:59.000000+08:00"')
  .replace(/\"registration_date\":\".*?\"/g, '"registration_date":"2022-01-01T08:00:00.000000+08:00"')
  .replace(/\"subscription_state\":\"\\w+\"/g, '"subscription_state":"active"')
  .replace(/\"auto_renew_status\":\\w+/g, '"auto_renew_status":true');

$done({body});
