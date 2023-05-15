const path1 = "v1/receipts";
const path2 = "v1/subscribers/identify";

var url = $request.url;
var obj = {};

if (url.indexOf(path1) != -1) {
  obj = {
    "request_date": "2023-05-09T08:30:34Z",
    "request_date_ms": 1683621034847,
    "subscriber": {
      "entitlements": {
        "pro": {
          "expires_date": "2024-05-09T02:04:25Z",
          "grace_period_expires_date": null,
          "product_identifier": "ios_subscription_lifetime",
          "purchase_date": "2023-05-09T02:04:25Z"
        }
      },
      "first_seen": "2023-05-09T02:03:22Z",
      "last_seen": "2023-05-09T02:03:50Z",
      "management_url": "https://apps.apple.com/account/subscriptions",
      "non_subscriptions": {},
      "original_app_user_id": "$RCAnonymousID:58154ae542a54f1eb3581381b3379a99",
      "original_application_version": "1682",
      "original_purchase_date": "2023-05-08T13:44:38Z",
      "other_purchases": {},
      "subscriptions": {
        "ios_subscription_lifetime": {
          "auto_resume_date": null,
          "billing_issues_detected_at": null,
          "expires_date": null,
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2023-05-09T02:04:25Z",
          "ownership_type": "PURCHASED",
          "period_type": "lifetime",
          "purchase_date": "2023-05-09T02:04:25Z",
          "refunded_at": null,
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
};

if (url.indexOf(path2) != -1) {
  obj = {
    "request_date": "2023-05-09T08:30:33Z",
    "request_date_ms": 1683621033714,
    "subscriber": {
      "entitlements": {
        "pro": {
          "expires_date": "2024-05-09T02:04:25Z",
          "grace_period_expires_date": null,
          "product_identifier": "ios_subscription_lifetime",
          "purchase_date": "2023-05-09T02:04:25Z"
        }
      },
      "first_seen": "2023-05-09T02:03:22Z",
      "last_seen": "2023-05-09T02:03:50Z",
      "management_url": "https://apps.apple.com/account/subscriptions",
      "non_subscriptions": {},
      "original_app_user_id": "$RCAnonymousID:58154ae542a54f1eb3581381b3379a99",
      "original_application_version": "1682",
      "original_purchase_date": "2023-05-08T13:44:38Z",
      "other_purchases": {},
      "subscriptions": {
        "ios_subscription_lifetime": {
          "auto_resume_date": null,
          "billing_issues_detected_at": null,
          "expires_date": null,
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2023-05-09T02:04:25Z",
          "ownership_type": "PURCHASED",
          "period_type": "lifetime",
          "purchase_date": "2023-05-09T02:04:25Z",
          "refunded_at": null,
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
};

$done({body: JSON.stringify(obj)});