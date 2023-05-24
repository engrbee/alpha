var body = $response.body;
var chxm1023 = JSON.parse(body);

const xiangha = '/user/info';
const caipu = '/apiios_dq.xiangha.com';
const info = 'xiangha.com';
const home = '/home/getUser';

if ($request.url.indexOf(caipu) != -1){
  body = body.replace(/\"status":\w+/g, '\"status":true');
  body = body.replace(/\"is_open_vip":\d+/g, '\"is_open_vip":1');
  body = body.replace(/\"is_vip":\d+/g, '\"is_vip":2');
  body = body.replace(/\"isCollection":\d+/g, '\"isCollection":1');
  body = body.replace(/\"sex":"\d+"/g, '\"sex":"1"');
  body = body.replace(/\"reg_date":".*?"/g, '\"reg_date":"2022-01-01"');
  body = body.replace(/\"nickName":".*?"/g, '\"nickName":"Eric"');
};

if ($request.url.indexOf(info) != -1){
  body = body.replace(/\"isShow":"\d+"/g, '\"isShow":"2"');
  body = body.replace(/\"isVideo":"\d+"/g, '\"isVideo":"2"');
  body = body.replace(/\"isVip":"\d+"/g, '\"isVip":"2"');
};

if ($request.url.indexOf(home) != -1){
  chxm1023.data.nickName = "Eric";
  chxm1023.data.vip = {
      "isVip": 2,
      "level": "2",
      "vipState": "2",
      "maturity_time": "2099-12-31",
      "first_time": "2022-01-01",
      "last_time": "2023-05-24",
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
  body = JSON.stringify(chxm1023);
};

$done({body});
