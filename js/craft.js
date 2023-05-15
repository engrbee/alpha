var body = $response
  .body
  .replace(/"tier":"Free"/g, '"tier": "Pro"')
  .replace(/"maxStorageMB":1024/g, '"maxStorageMB":51200')
  .replace('"trialSeatPeriod":{"isActive":false}','"trialSeatPeriod":{"isActive":false}},"subscriptionInfo":{"provider":"License","rawType":"License_BacktoSchool2022","subscriptionId":"2390bb9d-0740-04a4-58af-afe9ed0949b2","renewPeriod":"None","expirationTime":4102415999000');

$done({body: body});