const path1 = "receipts/ios_latest/restore";
const path2 = "";

var url = $request.url;

if (url.indexOf(path1) != -1) {
  var body = '{"is_subscriber":true}'
};

$done({body});
