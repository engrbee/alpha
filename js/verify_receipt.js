re('"original_purchase_date":".*?"@"original_purchase_date_pst":".*?"@"original_purchase_date_ms":"\\d+"@"purchase_date":".*?"@"purchase_date":".*?"@"purchase_date_pst":".*?"@"purchase_date_ms":"\\d+"@"purchase_date":".*?"@"expires_date":".*?"@"expires_date_pst":".*?"@"expires_date_ms":"\\d+"@"is_trial_period":"\\w+"@"auto_renew_status":"\\d+"', '"original_purchase_date":"2022-01-01 08:00:00 Etc/GMT"@"original_purchase_date_pst":"2022-01-01 08:00:00 America/Los_Angeles"@"original_purchase_date_ms":"1641024000000"@"purchase_date":"2022-01-01 08:00:00 Etc/GMT"@"purchase_date_pst":"2022-01-01 08:00:00 America/Los_Angeles"@"purchase_date_ms":"1641024000000"@"expires_date":"2099-12-31 23:59:59 Etc/GMT"@"expires_date_pst":"2099-12-31 23:59:59 America/Los_Angeles"@"expires_date_ms":"4102415999000"@"is_trial_period":"false"@"auto_renew_status":"1"');

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
