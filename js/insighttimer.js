const path1 = "/receipts/ios_latest/restore";
const path2 = "/users/devices";

var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  obj.is_subscriber = true;
};

if (url.indexOf(path2) != -1) {
  obj.is_subscriber = true;
  obj.ios_free_trial_started = false;
  obj.is_subscriber_removed_at = {"epoch": 4102415999000,"iso_8601_datetime_tz": "2099-12-31T23:59:59.000Z"};
//  delete obj.is_subscriber_removed_at
};

$done({body: JSON.stringify(obj)});
