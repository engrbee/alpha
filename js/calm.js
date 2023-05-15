const path1 = "/me";
const path2 = "/device";

var url = $request.url;
var obj = JSON.parse($response.body);
var subscription = {
  "type": "ios",
  "expires": "2099-12-31T23:59:59.000",
  "valid": true,
  "user_id": "FwrbS2DqY_",
  "id": "510001215423037",
  "subscription_plan": "com.calm.yearly.trial.one_week.usd_70",
  "plan_duration": "year",
  "will_renew": true,
  "is_renewable": true,
  "is_canceled": false,
  "is_refunded": false,
  "is_in_billing_retry_period": false,
  "free_trial_began": "2023-04-27T23:31:26.000Z",
  "free_trial_ended": "2099-12-31T23:59:59.000Z",
  "in_free_trial_window": true,
  "purchaser_platform": "ios",
  "payment_processor": "itunes",
  "has_ever_done_free_trial": true,
  "has_ever_had_ios_subscription": true,
  "has_ever_had_android_subscription": false,
  "free_trial_length_in_days": 7,
  "is_free": false,
  "began": "2023-04-27T23:31:26.000Z",
  "is_lifetime": true,
  "ios_details": {
    "id": "510001215423037",
    "expires": "2099-12-31T23:59:59.000Z",
    "began": "2023-04-27T23:31:26.000Z",
    "product_id": "com.calm.yearly.trial.one_week.usd_70",
    "is_free_trial": true,
    "is_canceled": false,
    "is_renewable": true,
    "plan_duration": "year",
    "will_renew": true,
    "free_trial_length_in_days": 7,
    "original_transaction_id": "510001215423037",
    "is_in_billing_retry_period": false,
    "purchaser_platform": "ios",
    "payment_processor": "itunes",
    "free_trial_began": "2023-04-27T23:31:26.000Z",
    "free_trial_ended": "2099-12-31T23:59:59.000Z"
  }
};

if (url.indexOf(path1) != -1 && "subscription" in obj){
  obj.subscription = subscription;
};

if (url.indexOf(path2) != -1 && "user" in obj){
  obj.user.subscription = subscription;
};

$done({body: JSON.stringify(obj)});
