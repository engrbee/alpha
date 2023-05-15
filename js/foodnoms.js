var obj = {
  "request_date": "2023-05-14T08:51:16Z",
  "request_date_ms": 1684054276244,
  "subscriber": {
    "entitlements": {
      "plus": {
        "expires_date": "2023-05-21T08:27:47Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.algebraiclabs.foodnoms.plus.annual",
        "purchase_date": "2023-05-14T08:27:47Z"
      }
    },
    "first_seen": "2023-05-14T08:25:47Z",
    "last_seen": "2023-05-14T08:25:47Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "4FB3B40A-A08B-4F92-A693-F7274340D2F9",
    "original_application_version": "651",
    "original_purchase_date": "2023-05-14T08:19:39Z",
    "other_purchases": {},
    "subscriptions": {
      "com.algebraiclabs.foodnoms.plus.annual": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2099-12-31T23:59:59Z",
        "ownership_type": "PURCHASED",
        "period_type": "annual",
        "purchase_date": "2023-05-14T08:19:39Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body: JSON.stringify(obj)});