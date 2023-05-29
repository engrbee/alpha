const path = "/3.2/license/verify";
const url = $request.url;
const request_body = $request.body;

// console.log(request_body);

let result1 = request_body.match(/license_key[ ]*=[ ]*([a-z0-9\-]*)/gi)[0];
var license_key = result1.split("=")[1].trim();

console.log(license_key);

var product_id = '999999';

if (url.indexOf(path) !== -1) {
    product_id = $persistentStore.read(license_key)
} else {
    let result = request_body.match(/product_id[ ]*=[ ]*(\d*)/gi)[0];
    product_id = result.split("=")[1].trim();
    $persistentStore.write(product_id, license_key)
};

console.log(product_id);

resp_str = '{"success":true,"response":{"product_id":"'+product_id+'","activation_id":"admin","type":"personal","expires":1,"expiry_date":9999999999999}}';
$done({response:{body:resp_str}});
