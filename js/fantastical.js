const path1 = "/auth/device";
const path2 = "/account/details";
const path3 = "/account/appstore-receipt";

let url = $request.url;
let obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  obj.status = "success";
  obj.subscription = {
    "autorenew": true,
    "expiration": "2099-12-31T23:59:59Z",
    "expires": "2099-12-31T23:59:59Z"
  };
  obj.scope = [
    "notify",
    "weather",
    "keyvalue-watch",
    "keyvalue-verification",
    "schedjoules",
    "scheduling",
    "account",
    "keyvalue",
    "fantastical"
  ];
};

if (url.indexOf(path2) != -1) {
  obj.subscription = {
    "autorenew": true,
    "expiration": "2099-12-31T23:59:59.000000Z",
    "uuid": "f1da7c78-e964-4367-915c-886edc794959",
    "subscription_type": "AppStore",
    "is_expired": false,
    "trial": false
  };
};

if (url.indexOf(path3) != -1) {
  obj.autorenew = true;
  obj.expiration = "2099-12-31T23:59:59.000000Z";
  obj.subscription_type = "AppStore";
  obj.is_expired = false;
  obj.trial = false;
};

$done({body: JSON.stringify(obj)});
