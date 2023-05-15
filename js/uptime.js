var obj = JSON.parse($response.body);

obj.entitlements = [{
    "entitlement": "premium",
    "expiresAt": "2099-12-31T23:59:59Z"
}];

$done({body: JSON.stringify(obj)});