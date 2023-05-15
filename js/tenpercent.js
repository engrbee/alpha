var obj = JSON.parse($response.body);

obj.user.expiration_date = "12/31/2099, 11:59:59 PM UTC",
obj.user.plan_description = "1 year",
obj.user.purchaser = true,
obj.user.subscription_end_date = "12/31/2099, 11:59:59 PM UTC",
obj.user.subscription_period = "P1Y",
obj.user.subscription_source = "Apple",
obj.user.subscription_in_trial = false,
obj.user.subscription_is_auto_renewing = true;

$done({body: JSON.stringify(obj)});