var obj = JSON.parse($response.body);

obj.subscriber.entitlements = {
  "patron": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  },
  "skinAndy": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  },
  "skinOpal": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  },
  "skinMem": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  },
  "skinMonster": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  },
  "skinKarat": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  },
  "skinCedar": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  },
  "skinChroma": {
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "product_identifier": "com.andyworks.streaks.yearlyPatron",
    "purchase_date": "2023-04-27T23:36:19Z"
  }
},
  obj.subscriber.subscriptions = {
  "com.andyworks.streaks.yearlyPatron": {
    "auto_resume_date": null,
    "billing_issues_detected_at": null,
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "is_sandbox": false,
    "original_purchase_date": "2023-04-27T23:36:20Z",
    "ownership_type": "PURCHASED",
    "period_type": "annual",
    "purchase_date": "2023-04-27T23:36:19Z",
    "refunded_at": null,
    "store": "app_store",
    "unsubscribe_detected_at": null
  }
};

$done({body: JSON.stringify(obj)});