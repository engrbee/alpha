var body = $response.body.replace(/viptype":"\d"/g, 'viptype":"4"');

$done({body});
