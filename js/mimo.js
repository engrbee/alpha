const path1 = "v1/subscriptions";
const path2 = "v1/subscriptions/receipt";
const path3 = "v1/users/";

var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  obj = {
    "subscriptions": [
      {
        "activeUntil": "2099-12-31T23:59:59+00:00",
        "canceledAt": null,
        "createdAt": "2023-05-09T02:00:12+00:00",
        "trialEndAt": "2099-12-31T23:59:59+00:00",
        "isActive": true,
        "source": "ios",
        "type": "pro",
        "status": "active",
        "interval": "yearly",
        "intervalCount": 1
      }
    ],
    "activeUntil": "2099-12-31T23:59:59+00:00",
    "canceledAt": null,
    "createdAt": "2023-05-09T02:00:12+00:00",
    "trialEndAt": "2099-12-31T23:59:59+00:00",
    "isActive": true,
    "source": "ios",
    "type": "pro",
    "status": "active",
    "interval": "yearly",
    "intervalCount": 1
  }
};

if (url.indexOf(path2) != -1) {
  obj = {
    "activeUntil": "2099-12-31T23:59:59+00:00",
    "createdAt": "2023-05-09T02:00:12+00:00",
    "trialEndAt": "2099-12-31T23:59:59+00:00",
    "isActive": true,
    "source": "ios",
    "type": "pro",
    "status": "active",
    "interval": "yearly",
    "intervalCount": 1
  }
};

if (url.indexOf(path3) != -1) {
  obj["isPremium"] = true
};

$done({body: JSON.stringify(obj)});