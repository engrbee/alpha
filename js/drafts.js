var obj = JSON.parse($response.body);

obj = {
  "is_subscription_active": true,
  "active_expires_at": "2099-12-31T23:59:59Z",
  "active_subscription_type": "premium",
  "is_blocked": false,
  "has_had_free_trial": false
};

$done({body: JSON.stringify(obj)});


