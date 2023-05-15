var obj = JSON.parse($response.body);

obj["subscriptions"][0]["subscription"] = "lifetime_membership";
obj["subscriptions"][0]["expire_at"] = "20991231";
obj["subscriptions"][0]["days_to_end"] = 36469;

$done({body: JSON.stringify(obj)});
