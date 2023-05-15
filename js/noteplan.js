var obj = {
  "request_date": "2023-05-13T00:46:22Z",
  "request_date_ms": 1683938782246,
  "subscriber": {
    "entitlements": {
      "Personal Annual": {
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.noteplan.subscription.personal.annual",
        "purchase_date": "2023-05-13T00:46:04Z"
      }
    },
    "first_seen": "2023-05-13T00:42:17Z",
    "last_seen": "2023-05-13T00:42:31Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:b0427f8d214c4ee5b94df5cf27ce9719",
    "original_application_version": "1030",
    "original_purchase_date": "2023-05-13T00:39:02Z",
    "other_purchases": {},
    "subscriptions": {
      "co.noteplan.subscription.personal.annual": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-05-13T00:46:04Z",
        "ownership_type": "PURCHASED",
        "period_type": "active",
        "purchase_date": "2023-05-13T00:46:04Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body: JSON.stringify(obj)});