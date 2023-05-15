var obj = JSON.parse($response.body);

obj.gold_member = true,
obj.user_style = 2,
obj.active = 1;

$done({body: JSON.stringify(obj)});