if ($response.body) {
   var body = $response
  .body
  .replace(/\"ownership\":\"\w+\"/g, '"ownership":"free"')
  .replace(/\"usageType\":\"\w+\"/g, '"usageType":"unlimited"')
  .replace(/\"memberships\":\[.*?\]/g, '"memberships":[{"endAt":4102415999,"id":"1","name":"普通会员","ownership":"temporary","startAt":1587654321,"usageType":"unlimited"}]')
  .replace(/false/g, "true");
  $done({body});
};
