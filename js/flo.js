var obj = JSON.parse($response.body);

obj = {
  "status": "active",
  "service_level": 1,
  "auto_renew_status": true,
  "transaction_id": 510001215159193,
  "features": [],
  "expiration_date": "2099-12-31T23:59:59Z",
  "subscription_manager": {
    "type": "apple",
    "url": "https://apps.apple.com/account/subscriptions"
  }
};

$done({body: JSON.stringify(obj)});
