const path = "v1/auth";

var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path) != -1) {
  obj.data = {
    "id": 41947140,
    "userId": "5f490194d523e964327ef2c8",
    "memberType": "NORMAL",
    "membershipType": "ANNUAL_CARD",
    "orderNo": "1682699703091968841",
    "memberNo": "968882699703",
    "autoRenew": true,
    "status": 1,
    "statusTrack": "valid",
    "paidStatus": 1,
    "paidStatusTrack": "paid",
    "gmtEffective": 1682699704000,
    "gmtCurrentTypeEffective": 1682699704000,
    "gmtCurrentTypeExpire": 4102415999000,
    "gmtExpire": 4102415999000,
    "totalEffectiveDays": 366,
    "currentEffectiveDays": 1,
    "stockFlag": false
  }
} else {
  obj.data.memberExpirationReminder = 999,
  obj.data.memberInfo = {
    "id": 41947140,
    "userId": "5f490194d523e964327ef2c8",
    "memberType": "NORMAL",
    "membershipType": "ANNUAL_CARD",
    "orderNo": "1682699703091968841",
    "memberNo": "968882699703",
    "autoRenew": true,
    "status": 1,
    "paidStatus": 1,
    "gmtEffective": 1682699704000,
    "gmtCurrentTypeEffective": 1682699704000,
    "gmtCurrentTypeExpire": 4102415999000,
    "gmtExpire": 4102415999000,
    "totalEffectiveDays": 366,
    "currentEffectiveDays": 1,
    "userName": "salicat",
    "avatar": "https://static1.keepcdn.com/avatar/2021/02/24/15/37/5232ef756eefc6845f490194d523e964327ef2c8.jpg",
    "expirationReminder": ""
  },
  obj.data.memberInfos = [{
      "id": 41947140,
      "userId": "5f490194d523e964327ef2c8",
      "memberType": "NORMAL",
      "membershipType": "ANNUAL_CARD",
      "orderNo": "1682699703091968841",
      "memberNo": "968882699703",
      "autoRenew": true,
      "status": 1,
      "paidStatus": 1,
      "gmtEffective": 1682699704000,
      "gmtCurrentTypeEffective": 1682699704000,
      "gmtCurrentTypeExpire": 4102415999000,
      "gmtExpire": 4102415999000,
      "totalEffectiveDays": 366,
      "currentEffectiveDays": 1,
      "userName": "salicat",
      "avatar": "https://static1.keepcdn.com/avatar/2021/02/24/15/37/5232ef756eefc6845f490194d523e964327ef2c8.jpg"
    }]
};

$done({body: JSON.stringify(obj)});
