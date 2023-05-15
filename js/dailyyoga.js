var obj = JSON.parse($response.body);

obj.result.memberType = 12,
obj.result.StartTime = "2023-01-01 08:00:00",
obj.result.EndTime = "2099-12-31 23:59:59",
obj.result.isSuperVip = 3,
obj.result.superStartTime = "2023-01-01 08:00:00",
obj.result.superEndTime = "2099-12-31 23:59:59",
obj.result.oldSuperStartTime = "2023-01-01 08:00:00",
obj.result.oldSuperEndTime = "2099-12-31 23:59:59",
obj.result.goProConfig = {},
obj.result.isRequestNewUserFreeTrial = 0,
obj.result.is_within_30day_vip = 1,
obj.result.pro_center_right = {
  "type": 2,
  "title": ""
},
obj.result.pro_center_data = {
  "pro_type": 2,
  "pro_type_title": "Gold Pro Member",
  "pro_service_title": "",
  "pro_start_date": "",
  "pro_end_date": "2099-12-31",
  "day_left": "",
  "is_pro_center_red_dot": 0
},
obj.result.jpushTag = [
  "H2O_Gold",
  "H2O_en",
  "H2O_IOS",
  "H2O_Gold_en",
  "H2O_Gold_IOS",
  "H2O_en_IOS",
  "H2O_Gold_en_IOS",
  "en_ios_vip",
  "H2O_REGDATE_20230426",
  "H2O_TIMEZONE_8",
  "H2O_Inner90DayPurchase",
  "H2O_UnSubscribe",
  "H2O_UnPurchase"
];

$done({body: JSON.stringify(obj)});