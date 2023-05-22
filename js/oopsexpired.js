var obj = JSON.parse($response.body);

obj.data["membership_type"] = 2;
obj.data.expires_date = null;
obj.data.user_is_pro = true;
obj.data.group_is_pro = true;
obj.data["event"] = null;

$done({body: JSON.stringify(obj)});
