let obj=JSON.parse($response.body);

obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2099-12-31T23:59:59";

$done({body:JSON.stringify(obj)})