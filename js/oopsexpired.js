const path1 = "/functions/bindMembership";
const path2 = "/users/";

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
  obj.result.data = {
    "status": 1,
    "is_pro": true,
    "membership_type": 2,
    "membership_name": "yearly",
    "expires_date": "2023-05-24T06:23:04.000Z"
  };
};

if (url.indexOf(path2) != -1) {
  obj.group = {
    "__type": "Pointer",
    "className": "UserGroup",
    "objectId": "646a3a945e6bb82b8cdba051"
  };
  obj.membership = 2;
  obj.pro = "yearly";
  obj.isActive = true;
  obj.expiredAt = {
    "__type": "Date",
    "iso": "2023-05-24T06:23:04.000Z"
  };
  obj.emailVerified = true;
  obj.mobilePhoneVerified = true;
};

$done({body: JSON.stringify(obj)});
