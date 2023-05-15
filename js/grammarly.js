var obj = JSON.parse($response.body);

obj.isPremium = true;
obj.currentPlan = {
  "id": 1005,
  "regularPlanId": 1005,
  "title": "Annual",
  "description": "1-year Grammarly Subscription",
  "regularPrice": 144.0,
  "regularPriceMoney": {
    "currency": "USD",
    "value": 144.0
  },
  "price": 144.0,
  "priceMoney": {
    "currency": "USD",
    "value": 144.0
  },
  "periodMonths": 12,
  "hasTrial": false,
  "trialDays": 0,
  "firstThreeMonthsPromo": 0,
  "baseInstitutionCampaign": false
};

$done({body: JSON.stringify(obj)})