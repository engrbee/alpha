var obj = JSON.parse($response.body);

if (obj !== "undefined") {
obj.result.data.membership_type = 2;
obj.result.data.expires_date = null;
obj.result.data.user_is_pro = true;
obj.result.data.group_is_pro = true;
obj.result.data.event = null;
};

$done({body: JSON.stringify(obj)});
