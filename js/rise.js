var obj = {
  "request_date": "2023-05-26T04:50:37Z",
  "request_date_ms": 1685076637403,
  "subscriber": {
    "entitlements": {
      "Pro": {
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.risesci.nyx.subscriptions.annual",
        "purchase_date": "2022-01-01T08:00:00Z"
      }
    },
    "first_seen": "2022-01-01T08:00:00Z",
    "last_seen": "2023-05-26T01:56:32Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "3031498",
    "original_application_version": "1684770667",
    "original_purchase_date": "2022-01-01T08:00:00Z",
    "other_purchases": {},
    "subscriptions": {
      "com.risesci.nyx.subscriptions.annual": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-01-01T08:00:00Z",
        "ownership_type": "PURCHASED",
        "period_type": "active",
        "purchase_date": "2022-01-01T08:00:00Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body: JSON.stringify(obj)});
