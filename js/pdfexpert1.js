var obj = {
  "bundleId": "com.readdle.PDFExpert5",
  "chargingPlatform": "iOS AppStore",
  "receiptId": 1447313676000,
  "originalTransactionId": 510001226177861,
  "inAppStates": [
    {
      "type": "subscription",
      "productId": "com.readdle.PDFExpert5.subscription.year50_pe6",
      "originalTransactionId": 510001226177861,
      "productName": "subscription",
      "isEligibleForIntroPeriod": false,
      "subscriptionExpirationDate": "23:99 12/31/2099",
      "subscriptionState": "annual",
      "subscriptionAutoRenewStatus": "autoRenewOn",
      "isInGracePeriod": false,
      "isInBillingRetryPeriod": false,
      "entitlements": [
        "ios.pe.subscription.pdf-features"
      ]
    },
    {
      "type": "custom purchase",
      "productId": "pdfexpert6-user",
      "entitlements": [
        "ios.pe6.basic-features"
      ]
    }
  ],
  "receiptStatus": "ok",
  "statisticsInfo": {
    "events": []
  },
  "externalId": "3325fe00-10f9-48aa-9f27-342dcb9644f6"
};

$done({body: JSON.stringify(obj)});