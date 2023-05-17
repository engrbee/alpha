const path1 = "v1/auth";
const path2 = "/course/";

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
  };
 
if (url.indexOf(path2) != -1) {
  obj.data.extendInfo.workoutExtendInfos[0].downLoadAll = true;
  obj.data.extendInfo.limitVideoInfo.videoTime = 3000;
  obj.data.extendInfo.startEnable = true;
  obj.data.extendInfo.hasPaid = true;
  obj.data.extendInfo.klassHasPaid = true;
  obj.data.user.memberStatus = 1;
  obj.data.userMemberDetail = {
      "liveMemberStatus": true,
      "memberAutoRenew": true,
      "newMemberStatus": false,
      "memberStatus": true,
      "liveMemberExpireTime": 0,
      "userIdentityType": 5
    };
};

if (url.indexOf(path2) != -1) {
  obj = {}
};

$done({body: JSON.stringify(obj)});
