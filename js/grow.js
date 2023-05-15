var obj = {
  "request_date": "2023-05-12T08:13:39Z",
  "request_date_ms": 1683879219984,
  "subscriber": {
    "entitlements": {
      "grow.pro": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "grow_lifetime",
        "purchase_date": "2023-04-27T02:13:14Z"
      }
    },
    "first_seen": "2023-04-25T16:41:27Z",
    "last_seen": "2023-05-12T08:07:33Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:fcacbd757c144573b6db867fe99d2262",
    "original_application_version": "45",
    "original_purchase_date": "2023-04-25T16:02:19Z",
    "other_purchases": {},
    "subscriptions": {
      "grow_lifetime": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": null,
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-04-27T02:13:15Z",
        "ownership_type": "PURCHASED",
        "period_type": "lifetime",
        "purchase_date": "2023-04-27T02:13:14Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}

$done({body: JSON.stringify(obj)});