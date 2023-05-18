var req = $request;
var res = $response;
var url = $request.url;
var method = $request.method;
var body = $response.body;
var obj = JSON.parse(body);
var keys = Object.keys(obj);

console.log(url);
console.log(method);
console.log(keys);
console.log(body.slice(0,100));
