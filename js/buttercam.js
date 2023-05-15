var body = $response.body;

if (body.indexOf("memberships") != -1) {
  var obj = JSON.parse(body);
  obj.memberships = [{
      "endAt": 4102415999,
      "id": "1",
      "name": "Premium",
      "ownership": "monthly",
      "startAt": 1587654321,
      "usageType": "unlimited"
    }];
  $done({body: JSON.stringify(obj)});
} else {
  $done({body: body})
};

