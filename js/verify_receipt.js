re('("original_purchase_date"):".*?"@("original_purchase_date_pst"):".*?"@("original_purchase_date_ms"):"\\d+"@("purchase_date"):".*?"@("purchase_date_pst"):".*?"@("purchase_date_ms"):"\\d+"@("expires_date"):".*?"@("expires_date_pst"):".*?"@("expires_date_ms"):"\\d+"@("is_trial_period"):"\\w+"@("auto_renew_status"):"\\d+"@("expiration_intent"):"\\d+"','$1:"2022-01-01 08:00:00 Etc/GMT"@$1:"2022-01-01 08:00:00 America/Los_Angeles"@$1:"1641024000000"@$1:"2022-01-01 08:00:00 Etc/GMT"@$1:"2022-01-01 08:00:00 America/Los_Angeles"@$1:"1641024000000"@$1:"2099-12-31 23:59:59 Etc/GMT"@$1:"2099-12-31 23:59:59 America/Los_Angeles"@$1:"4102415999000"@$1:"false"@$1:"1"@$1:"0"');
let body = typeof $response != "undefined" && $response.body || null;
let obj = JSON.parse(body);
let list = {
  "InstaShot": "com.camerasideas.InstaShot.InShotPro_yearly"
};
let in_app_data = [{"quantity":"1","product_id":"com.engrbee.alpha","transaction_id":"510001235226666","original_transaction_id":"510001215510144","purchase_date":"2022-01-01 08:00:00 Etc/GMT","purchase_date_ms":"1641024000000","purchase_date_pst":"2022-01-01 08:00:00 America/Los_Angeles","original_purchase_date":"2022-01-01 08:00:00 Etc/GMT","original_purchase_date_ms":"1641024000000","original_purchase_date_pst":"2022-01-01 08:00:00 America/Los_Angeles","expires_date":"2099-12-31 23:59:59 Etc/GMT","expires_date_ms":"4102415999000","expires_date_pst":"2099-12-31 23:59:59 America/Los_Angeles","web_order_line_item_id":"510000569909652","is_trial_period":"false","is_in_intro_offer_period":"false","in_app_ownership_type":"PURCHASED"}];
let renew_data = [{"expiration_intent":"0","auto_renew_product_id":"com.engrbee.alpha","is_in_billing_retry_period":"0","product_id":"com.engrbee.alpha","original_transaction_id":"510001235226666","auto_renew_status":"1"}];

if (body.indexOf("expires_date") != -1) {
  function re() {
    var regs = arguments[0].split("@");
    var strs = arguments[1].split("@");
    for (i = 0; i < regs.length; i ++) {
      var reg = new RegExp(regs[i], "g");
      body = body.replace(reg, strs[i]);
    }
  };
} else {
  obj.receipt.in_app = in_app_data;
  obj.latest_receipt_info = in_app_data;
  obj.pending_renewal_info = renew_data;
  obj.latest_receipt = "";
  for (const i in list) {
    if (new RegExp(`^${i}`, `i`).test(ua)) {
      body = JSON.stringify(obj)
        .replace(/\"product_id\":\".*?\"/g, `"product_id":${list[i]}`, );
    }
  };
};

$done({body});
