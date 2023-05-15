var obj = JSON.parse($response.body);

obj.data.user.payment_status = {
  "is_brilliant_square": true,
  "brilliant_square_until": 4102415999,
  "reason": "ok"
};

$done({body: JSON.stringify(obj)});