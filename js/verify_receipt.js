re('("original_purchase_date"):".*?"@("original_purchase_date_pst"):".*?"@("original_purchase_date_ms"):"\\d+"@("purchase_date"):".*?"@("purchase_date_pst"):".*?"@("purchase_date_ms"):"\\d+"@("expires_date"):".*?"@("expires_date_pst"):".*?"@("expires_date_ms"):"\\d+"@("is_trial_period"):"\\w+"@("auto_renew_status"):"\\d+"@("expiration_intent"):"\\d+"','$1:"2022-01-01 08:00:00 Etc/GMT"@$1:"2022-01-01 08:00:00 America/Los_Angeles"@$1:"1641024000000"@$1:"2022-01-01 08:00:00 Etc/GMT"@$1:"2022-01-01 08:00:00 America/Los_Angeles"@$1:"1641024000000"@$1:"2099-12-31 23:59:59 Etc/GMT"@$1:"2099-12-31 23:59:59 America/Los_Angeles"@$1:"4102415999000"@$1:"false"@$1:"1"@$1:"0"');
function re() {
  var body = $response.body;
  if (arguments[0].includes("@")) {
    var regs = arguments[0].split("@");
    var strs = arguments[1].split("@");
    for (i = 0; i < regs.length; i ++) {
      var reg = new RegExp(regs[i], "g");
      body = body.replace(reg, strs[i]);
    }
  } else {
    var reg = new RegExp(arguments[0], "g");
    body = body.replace(reg, arguments[1]);
  };
  $done({body});
};
