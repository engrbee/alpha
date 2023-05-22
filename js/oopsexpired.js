var body = $response.body;
var obj = JSON.parse(body);

if (obj !== "undefined") {
  obj.result.data.membership_type = 2;
  obj.result.data.expires_date = "4102415999000";
  obj.result.data.user_is_pro = true;
  obj.result.data.group_is_pro = true;
  obj.result.data.event = {};
  $done({body: JSON.stringify(obj)});
} else {
  $done({body});
};


