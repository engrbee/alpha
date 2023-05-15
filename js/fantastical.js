const path1 = "v1/auth/device";
const path2 = "v1/account/details";

var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  obj["subscription"] = {
    "autorenew": true,
    "expiration": "2099-12-31T23:59:59Z",
    "expires": "2099-12-31T23:59:59Z"
  }
};

if (url.indexOf(path2) != -1) {
  obj["subscription"] = {
    "autorenew": true,
    "expiration": "2099-12-31T23:59:59Z",
    "subscription_type": "AppStore",
    "is_expired": false,
    "trial": false
  }
};

$done({body: JSON.stringify(obj)});