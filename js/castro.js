var obj = {
  "expiry": "2099-12-31T23:59:59Z",
  "subscription_product": "co.supertop.castroplus.annual.family",
  "will_renew": true,
  "renewal_product": "co.supertop.castroplus.annual.family",
  "expiry_reason": null,
  "is_sandbox": false,
  "is_trial_period": false
};

$done({body: JSON.stringify(obj)});
