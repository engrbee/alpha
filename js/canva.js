/* var body = $response
  .body
  .replace('"currentPeriodEndDate":\s*\d+', '"currentPeriodEndDate":4102415999000')
  .replace("CANCELLED", "TRIALING")
  .replace('"trialPeriodEndDate":\s*\d+', '"trialPeriodEndDate":4102415999000');
  
$done({body: body}); */

var body = '\'"])}while(1);</x>//{"subscriptions":[{"id":"23590818","plan":"27","owningBrand":"BAFhV0Syey8","creatingBrand":"BAFhV0Syey8","creatingUser":"UAFhV1-ut7g","status":"ACTIVE","pastDue":false,"isDisputed":false,"quantity":1,"fixedQuantity":5,"paymentConfig":{"A?":"C","C":"MONTH","D":1},"productConfig":{"A?":"A"},"createdDate":1683873080000,"featureAccessDate":1683873081000,"currentPeriodStartDate":1683873081000,"currentPeriodEndDate":1685082674000,"trialPeriodEndDate":1685082674000,"cancelAtPeriodEnd":false,"periodEndAction":"C","provider":"APPLE","planDetails":{"id":"27","name":"Canva Pro","descriptor":"CANVA_FOR_WORK","description":"August 2021 prices","featureBundle":"PAID","trialPeriodDays":14,"trialsPerBrand":2,"subscriberType":"BRAND","planProductConfig":{"A?":"A","A":"PAID"},"legacy":false,"userLocked":false,"free":false,"offlineBilled":false,"graceEnabled":true,"flexibleBillingEnabled":false,"rollupBillingEnabled":false,"pricingSets":[]},"externalId":"310001427805145","managementUrl":"https://apps.apple.com/account/subscriptions"}]}'

$done({body: body});
