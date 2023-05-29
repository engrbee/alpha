var obj = JSON.parse($response.body);

obj.subscription = [{
    "originalTransactionID": "510001242411363",
    "productID": "droom.sleepIfUCanFree.premium.yearlyPromo.1",
    "willAutoRenew": true,
    "isActive": true,
    "expiresDateMs": 4102415999000,
    "periodType": "ACTIVE",
    "latestPurchaseDateMs": 1685362611000,
    "originalPurchaseDateMs": 1685362612000
  }];

$done({body: JSON.stringify(obj)});
