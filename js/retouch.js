var obj = {
  "request_date_ms": 1685024551888,
  "request_date": "2023-05-25T14:22:31Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2022-01-01T08:00:00Z",
    "original_application_version": "1682",
    "other_purchases": {
    },
    "management_url": mull,
    "subscriptions": {
      "tr5_yearlysubsc_15dlrs_1": {
        "original_purchase_date": "2022-01-01T08:00:00Z",
        "expires_date": "2099-12-31T23:59:59Z",
        "is_sandbox": false,
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "active",
        "purchase_date": "2022-01-01T08:00:00Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "pro": {
        "tr5_yearlysubsc_15dlrs_1": null,
        "purchase_date": "2022-01-01T08:00:00Z",
        "product_identifier": "tr5_yearlysubsc_15dlrs_1",
        "expires_date": "2099-12-31T23:59:59Z"
      }
    },
    "original_purchase_date": "2022-01-01T08:00:00Z",
    "original_app_user_id": "BF6734C964654C63B28B94D82584C883",
    "last_seen": "2023-05-25T09:04:30Z"
  }
};

$done({body: JSON.stringify(obj)});
