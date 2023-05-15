const res = $response;
const req = $request;

if (res.body && req.method == "GET") {
  var body = res.body.replace('"has_unlimited":false', '"has_unlimited":true');
};

$done({body: body});