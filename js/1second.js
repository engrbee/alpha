const path1 = "subscriptions/ios";
const path2 = "sessions/check-in";

var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  obj = {
    "entities": {
      "subscriptions": {
        "825bd2a8-9a1f-4118-8b90-09425ae72209": {
          "id": "825bd2a8-9a1f-4118-8b90-09425ae72209",
          "environment": "production",
          "product": "pro",
          "source": "ios",
          "expires_at": "2099-12-31T23:59:59.000Z",
          "is_comp": false,
          "is_comp_active": null,
          "comp_expires_at": null,
          "is_ios": true,
          "is_ios_active": true,
          "ios_expires_at": "2099-12-31T23:59:59.000Z",
          "ios_product_id": "co.1se.pro.level1.yearly",
          "ios_auto_renew_status": "1",
          "ios_auto_renew_product_id": "co.1se.pro.level1.yearly",
          "is_ios_in_grace_period": false,
          "is_android": false,
          "is_android_active": null,
          "android_expires_at": null,
          "android_product_id": null,
          "is_android_auto_renewing": null,
          "has_android_payment_issue": null
        }
      }
    },
    "links": {},
    "meta": {
      "receipt_valid": true,
      "receipt_status": 0,
      "receipt_status_message": "The receipt is valid.",
      "receipt_trial_availability": {
        "basic": true,
        "pro": false
      },
      "subscriptions": ["825bd2a8-9a1f-4118-8b90-09425ae72209"]
    }
  };
};
if (url.indexOf(path2) != -1) {
  obj = {
    "entities": {
      "accounts": {
        "c3ec17cd-04d6-4c95-887a-10a2496601a8": {
          "id": "c3ec17cd-04d6-4c95-887a-10a2496601a8",
          "name": "Eric Huang",
          "email": "58qcsf4f28@privaterelay.appleid.com",
          "email_verified": true,
          "phone_number": null,
          "phone_number_verified": null,
          "birth_month": null,
          "birth_day": null,
          "avatar_url": "https://a.1se-static.net/images/default_avatar_4.png",
          "small_avatar_url": "https://a.1se-static.net/images/default_avatar_4.png",
          "has_password": false,
          "newsletter": false,
          "backup_device_id": null,
          "backup_device_name": null,
          "intercom_integrated": false,
          "created_at": "2023-05-25T15:10:49.384Z",
          "updated_at": "2023-05-25T15:10:51.886Z",
          "profile_id": null,
          "username": null
        }
      },
      "account_settings": {
        "c3ec17cd-04d6-4c95-887a-10a2496601a8": {
          "push_notifications": null,
          "push_notifications_themes": null,
          "push_notifications_groups": null,
          "push_notifications_feeds": null,
          "push_notifications_feed_comments": null,
          "push_notifications_feed_follower_requests": null,
          "push_notifications_feed_relationship_suggestions": null,
          "push_notifications_feed_entries": null,
          "push_notifications_feed_entries_expiring": null,
          "multiplayer": null,
          "profile_discoverable": null
        }
      },
      "subscriptions": {
        "825bd2a8-9a1f-4118-8b90-09425ae72209": {
          "id": "825bd2a8-9a1f-4118-8b90-09425ae72209",
          "environment": "production",
          "product": "pro",
          "source": "ios",
          "expires_at": "2099-12-31T23:59:59.000Z",
          "is_comp": false,
          "is_comp_active": null,
          "comp_expires_at": null,
          "is_ios": true,
          "is_ios_active": true,
          "ios_expires_at": "2099-12-31T23:59:59.000Z",
          "ios_product_id": "co.1se.pro.level1.yearly",
          "ios_auto_renew_status": "1",
          "ios_auto_renew_product_id": "co.1se.pro.level1.yearly",
          "is_ios_in_grace_period": false,
          "is_android": false,
          "is_android_active": null,
          "android_expires_at": null,
          "android_product_id": null,
          "is_android_auto_renewing": null,
          "has_android_payment_issue": null
        }
      }
    },
    "links": {},
    "meta": {
      "ios_product_offers": {
        "pro": {
          "monthly": "co.1se.pro.level1.monthly",
          "yearly": "co.1se.pro.level1.yearly"
        }
      },
      "android_product_offers": {
        "pro": {
          "monthly": "co.1se.pro.level1.monthly",
          "yearly": "co.1se.pro.level2.yearly"
        }
      },
      "intercom_user_hash": "a8a55425c2df87412b347a8642c80e8768c50f86d29400be052cf463a989c62e",
      "has_active_support_conversations": false,
      "accounts": ["c3ec17cd-04d6-4c95-887a-10a2496601a8"],
      "account_settings": ["c3ec17cd-04d6-4c95-887a-10a2496601a8"],
      "subscriptions": ["825bd2a8-9a1f-4118-8b90-09425ae72209"]
    }
  };
};

$done({body: JSON.stringify(obj)});
