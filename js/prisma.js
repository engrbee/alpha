const path1 = "/auth/user/";
const path2 = "/receipt/ios/";
var url = $request.url;

if (url.indexOf(path1) != -1) {
  var obj = {
    "status": "ok",
    "is_valid": true,
    "user": {
      "email": "eric@privaterelay.appleid.com",
      "auth_type": "apple",
      "lensa_allow_send_email": false,
      "prisma_allow_send_email": false
    },
    "device": {
      "has_authenticated_user": true
    }
  };
};

if (url.indexOf(path2) != -1) {
  var obj = {
    "status": "ok",
    "is_valid": true,
    "expiration_date": "2099-12-31T23:59:59Z",
    "expiration_date_unix": 4102415999,
    "is_trial": false,
    "processing_count": 0,
    "is_introductory_used": true,
    "product_id": "premium.discount.annual",
    "promotional_offer_id": "",
    "is_grace_period": false,
    "auto_renew_enabled": true,
    "is_in_billing_retry_period": false,
    "subscription_type": "annual",
    "platform": "ios",
    "is_bonus": false,
    "bonus_days_added": 0,
    "device_user_info": {
      "auth_type": "annual",
      "subscription_valid": true
    }
  };
};

$done({body: JSON.stringify(obj)});
