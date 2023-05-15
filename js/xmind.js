let obj = JSON.parse($response.body);

obj.license = {
  "status": "sub",
  "expireTime": 4102415999000
};

$done({body: JSON.stringify(obj)});
