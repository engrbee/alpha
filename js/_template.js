const path1 = "v1/subscriptions";
const path2 = "v1/subscriptions/receipt";

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);

var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  obj = {}
};

if (url.indexOf(path2) != -1) {
  obj = {}
};

$done({body: JSON.stringify(obj)});

var body = $response
  .body
  .replace(/currentPeriodEndDate":\d+/g, 'currentPeriodEndDate":4102415999000')
  .replace(/trialPeriodEndDate":\d+/g, 'trialPeriodEndDate":4102415999000');
$done({body: body});
