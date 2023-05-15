const path1 = "/purchase";
const path2 = "/modules/download";

var url = $request.url;

if (url.indexOf(path1) != -1) {
  var headers = $request.headers
  headers["x-session-token"] = "F3S0w0bysBQFdbjtxpFurrFv2ItBBcBkVQxUddQW+9vjt2JXM751ksqq5GAWpkl+kk9nhig9BGh9JhYHQaokmendY6zLZDscHiRkZD2HrdJclKVCLordAARJhYIrf5C+5OSK6ax2TA45CKi8S09FEtYXN4noXO7gt42NT6WPIv6DKhdIwVxQuIAMLU5abmpMTDlyWeI4ulBWcOQbuZWWZg==";
  $done({headers})
};

if (url.indexOf(path2) != -1) {
  var obj = JSON.parse($response.body);
  if ($request.method == "GET") {
    obj["subscriptions"] = [{
        "expire_at": "21190505",
        "subscription": "lifetime_membership",
        "days_to_end": 36469,
        "created_at": "20190529151809"
      }];
    $done({body: JSON.stringify(obj)});
  }
};