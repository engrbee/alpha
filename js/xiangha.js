const path1 = "/user/permissions";
const path2 = "/home/getUser";
const path3 = "/vip/userinfo";
const path4 = "/school/getVipButtonStatus";

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
  obj.data.adBlock = "2";
  $done({body: JSON.stringify(obj)});
} else if (url.indexOf(path2) != -1) {
  obj.data.nickName = "Eric";
  obj.data.vip = {
      "isVip": 2,
      "level": "2",
      "vipState": "2",
      "maturity_time": "2099-12-31",
      "first_time": "2022-01-01",
      "last_time": "2023-05-01",
      "text": "2099-12-31到期",
      "color": "#866100",
      "maturity_day": "2",
      "expired_day": "2",
      "title": "我的会员",
      "titleColor": "#866100",
      "subTitle": "",
      "subTitleColor": "",
      "xiangdou": 0
    };
  $done({body: JSON.stringify(obj)});
} else if (url.indexOf(path3) != -1) {
  obj.data.vip = {
      "growth": "0",
      "mark": "1",
      "first_time": "1684894739",
      "last_time": "1684894739",
      "maturity_time": "2099-12-31",
      "is_auto": "1",
      "autoType": "1",
      "type": "1",
      "stall_id": "0",
      "stall_title": "999天",
      "pay_type": "1",
      "is_del": "1",
      "xh_code": "",
      "is_vip": true
    };
  $done({body: JSON.stringify(obj)});
} else if (url.indexOf(path4) != -1) {
  obj.data.vipButtonShow = 1;
  $done({body: JSON.stringify(obj)});
} else {
  $done({body: body});
};
