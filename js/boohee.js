var obj = JSON.parse($response.body);

  obj.data.vip.is_member = true;
  obj.data.vip.state = "1";
  obj.data.vip.expired_at = "2099-12-31 23:59:59";
  obj.data.vip.integral_member = {
        "integral": 0,
        "level": 1,
        "level_name": "蓝钻会员"
};

$done({body : JSON.stringify(obj)});
