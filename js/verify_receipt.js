re('"expires_date":".*?"@"expires_date_pst":".*?"@"expires_date_ms":"\w+"@"is_trial_period":"\w+"@"auto_renew_status":"\w+"', '"expires_date":"2099-12-31 23:59:59 Etc/GMT"@"expires_date_pst":"2099-12-31 23:59:59 America/Los_Angeles"@"expires_date_ms":"4102415999000"@"is_trial_period":"false"@"auto_renew_status":"1"');

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
