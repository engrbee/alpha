var obj = JSON.parse($response.body);

obj.subscription = {
  "type": "ACTIVE",
  "valid_until": 4102415999,
  "store": "MAC_APP_STORE",
  "prev_store": "NOSTORE",
  "trial_type": "CALENDAR_BASED",
  "price_id": "12_Months_Instant_Offer",
  "time_left": 0,
  "cancel_at_period_end": false,
  "period": "YEAR",
  "promo_type": "DEFAULT",
  "trial_canceled": false,
  "store_trial": false,
  "multiple_subscriptions": false
};

$done({body: JSON.stringify(obj)});