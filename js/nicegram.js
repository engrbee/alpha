const path1 = "restoreAccess";
const path2 = "settings";
const path3 = "user/info";

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
  obj.data.premiumAccess = true;
};

// if (url.indexOf(path2) != -1) {
//   obj.premium = true;
// };

if (url.indexOf(path3) != -1) {
  obj.data.user.subscription = true;
  obj.data.user.store_subscription = true;
  obj.data.user.lifetime_subscription = true;
};

$done({status:200, headers:{'Content-Type':'application/json'}, body:JSON.stringify(obj)});
