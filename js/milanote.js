let url = $request.url;
let req_body = $request.body || "";
let obj = JSON.parse($response.body) || {};

console.log(url);
console.log(req_body);

// https://app.milanote.com/api/users/me

if (url == "https://app.milanote.com/api/users/me") {
	obj["user"]["subscription"] = {"subscriptionId":"sub_1OtgFOFRQokYInZjMLRMINbm","active":true,"provider":"Stripe","createdAt":"2024-01-01T00:00:00Z","renewalDate":"2029-12-31T00:00:00Z","cancelAtPeriodEnd":false,"plan":{"name":"Professional","interval":"annual","price":119.99}};
  obj["user"]["subscriptionId"] = "sub_1OtgFOFRQokYInZjMLRMINbm";
} else if (url.indexOf("api/users/me/counts") != -1) {
	obj["isUnlimited"] = true;
} else {
	$done({});
}

$done({ body: JSON.stringify(obj) });
