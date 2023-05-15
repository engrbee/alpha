let body = $response.body;
let obj = JSON.parse(body);

if (body.indexOf("active_until_time")) {
    obj.user["active_until_time"] = "2099-12-31T23:59:59Z";        
    obj.user["x_active_until_time"] = "2099-12-31T23:59:59Z";
    $done({body: JSON.stringify(obj)});
} else {
    $done({body: body});
};