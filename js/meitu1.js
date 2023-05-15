var obj = JSON.parse($response.body);

obj.data.vip_type=101;
obj.data.sub_type=3;
obj.data.expire_days=-999;
obj.data.is_expire=0;
obj.data.renew=2;
obj.data.in_valid_time=4102415999;
obj.data.is_valid_user=1;
obj.data.valid_time=1684062690;
// obj.data.home_prompt="Premium";
// obj.data.home_btn_prompt="Unlocked";

$done({ body: JSON.stringify(obj) });