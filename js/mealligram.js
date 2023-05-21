let body = $response.body;
var obj = JSON.parse(body);

obj = {
  "expiresAt" : 4102415999,
  "productId" : "com.LeFal.Mealligram.pro.oneYear"
};

$done({body:JSON.stringify(obj)});
