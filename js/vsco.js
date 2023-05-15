var obj = JSON.parse($response.body);

obj.subscriber.entitlements.membership["expires_date"] = "2099-12-31T23:59:59Z";
obj.subscriber.subscriptions.vsco_global_2999_annual_7D_free["expires_date"] = "2099-12-31T23:59:59Z";
obj.subscriber.subscriptions.vsco_global_2999_annual_7D_free["unsubscribe_detected_at"] = null;

$done({body: JSON.stringify(obj)});