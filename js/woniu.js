var obj = JSON.parse($response.body);

obj.tradeEndTime = 4102415999000;

$done({body: JSON.stringify(obj)});