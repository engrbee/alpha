let obj = JSON.parse($response.body);

obj.result.displayExpirationTimeStamp = 4102415999000;
obj.result.paymentExpirationTimestamp = 4102415999000;
obj.result.subscriptionStatus = "active";

$done({body: JSON.stringify(obj)});