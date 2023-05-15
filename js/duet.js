var obj = JSON.parse($response.body);

obj.products = [
  {
    vendor: "apple",
    product: "DuetStudio",
    subscriptionId: 666666,
    purchaseDate: "2021-04-12T08:27:45Z",
    cancelled: false,
    expiresDate: "2099-12-31T23:59:59Z",
    inTrial: false,
  }
];

$done({body: JSON.stringify(obj)});