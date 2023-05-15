var obj = JSON.parse($response.body);

obj.subscriptionStartDate = "2023-01-01T08:00:00.000Z",
obj.subscriptionEndDate = "2099-12-31T23:59:59.000Z",
obj.hasPremium = true;

$done({body: JSON.stringify(obj)});