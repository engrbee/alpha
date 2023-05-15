var obj = JSON.parse($response.body);

obj.subscriber.entitlements.lucid_unlock_all_content.expires_date = "2099-12-31T23:59:59Z",
obj.subscriber.subscriptions = {
  "com.polywise.subscriptions.yearly2": {
    "auto_resume_date": null,
    "billing_issues_detected_at": null,
    "expires_date": "2099-12-31T23:59:59Z",
    "grace_period_expires_date": null,
    "is_sandbox": false,
    "original_purchase_date": "2023-04-28T01:54:31Z",
    "ownership_type": "PURCHASED",
    "period_type": "annual",
    "purchase_date": "2023-04-28T01:54:30Z",
    "refunded_at": null,
    "store": "app_store",
    "unsubscribe_detected_at": null
  }
};

$done({body: JSON.stringify(obj)});