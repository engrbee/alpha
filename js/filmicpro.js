var obj = JSON.parse($response.body);

obj.me.active_bundle_subscriptions = [{
    "features": [],
    "expiry": "2099-12-31T23:59:59+00:00",
    "product_id": "com.cinegenix.filmic.pro.1y_t70_1w"
  }];
obj.me.active_subscriptions_ids = ["com.cinegenix.filmic.pro.1y_t70_1w"];

$done({body: JSON.stringify(obj)});
