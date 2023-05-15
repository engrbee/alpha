const path1 = "mobile/me";
const path2 = "mobile/iap/verify";

var url = $request.url;
var obj = {};

if (url.indexOf(path1) != -1) {
  obj = {
    "token": "8ef20c5f8f232118570a56a4aac890d4bf47d69c",
    "user": {
      "data": {
        "links": {
          "self": "http://api:443/api/v4/users/3577040"
        },
        "meta": {},
        "firstName": "Eric",
        "lastName": "Huang",
        "email": "eric@privaterelay.appleid.com",
        "address": null,
        "facebookId": null,
        "status": "prime",
        "profileImage": "https://gateway.glo.com/dynamic-avatar/3577040?i=eh",
        "emailVerificationStatus": "verified",
        "stravaToken": null,
        "locale": "en-US",
        "holdStartDate": null,
        "paymentType": "apple",
        "browserTheme": null,
        "appleId": "000724.76dbc6d5c36f4359bd289d9839de6f61.1527",
        "signUpType": "apple",
        "videoMusicRatio": 0.9,
        "teacherId": null,
        "referralCode": "yhsrjjrscc",
        "currency": null,
        "paymentCountry": null,
        "holdEndDate": null,
        "lifetime": true,
        "city": null,
        "zip": null,
        "state": null,
        "country": null,
        "registrationDate": "2023-05-08T15:29:21.000Z",
        "timezone": "America/Los_Angeles",
        "paymentProcessorId": null,
        "videoAccess": true,
        "eligibleForNewSubscription": false,
        "billingDate": "2099-12-31T23:59:59.000Z",
        "daysUntilBillingDate": 365.00,
        "currentlyDiscounted": false,
        "hasBeenDiscounted": false,
        "classSharesRemaining": 0,
        "optInMarketing": true,
        "optInAnalytics": true,
        "optInProgramsScheduledClass": true,
        "optInProgramsWeeklyRecap": true,
        "optInProgramsSkippedClass": true,
        "optInMoment": false,
        "optInClassReminder": false,
        "optInLivestream": false,
        "optInPractice": true,
        "policies": {
          "termsAndConditions": {
            "type": "terms_and_conditions",
            "version": "1.0.0",
            "agreedAt": null,
            "isOutdated": false
          },
          "privacyPolicy": {
            "type": "privacy_policy",
            "version": "2.0.0",
            "agreedAt": null,
            "isOutdated": false
          }
        },
        "flags": {
          "seenNotesTooltipClassDetail": false,
          "seenNotesTooltipFilter": false,
          "seenWhatsNewModal": false,
          "seenAlignYourTimeModal": false,
          "seenOnboardingFeatureAnnouncement": false,
          "seenNewUserWelcomeModal": false,
          "seenForYouDurationSelectorTooltip": false,
          "seenMomentNotificationsRequestModal": false,
          "dismissedAnnouncement2": false,
          "dismissedAnnouncement4": false,
          "dismissedBeginnersPath": false,
          "hasSeenMusicFeature": false,
          "seenLivestreamTooltip": false,
          "hasSeenCoursesRemovalModal": false,
          "mentalHealth2022PromoModal": false,
          "seenReferralProgramAnnouncement": false,
          "selfCareFeb2022PromoModal": false,
          "womensDay2022PromoModal": false
        },
        "subscriptionPlanId": "prime",
        "id": "3577040",
        "type": "user"
      },
      "jsonapi": {
        "parsed": true
      }
    }
  }
};

if (url.indexOf(path2) != -1) {
  obj = {
    "environment": "Production",
    "receipt": {
      "receipt_type": "Production",
      "adam_id": 1023475268,
      "app_item_id": 1023475268,
      "bundle_id": "com.yogaglo.main",
      "application_version": "4153",
      "download_id": 502416013604504800,
      "version_external_identifier": 855296274,
      "receipt_creation_date": "2023-05-09 02:14:14 Etc/GMT",
      "receipt_creation_date_ms": "1683598454000",
      "receipt_creation_date_pst": "2023-05-08 19:14:14 America/Los_Angeles",
      "request_date": "2023-05-09 03:09:07 Etc/GMT",
      "request_date_ms": "1683601747666",
      "request_date_pst": "2023-05-08 20:09:07 America/Los_Angeles",
      "original_purchase_date": "2023-05-08 13:48:24 Etc/GMT",
      "original_purchase_date_ms": "1683553704000",
      "original_purchase_date_pst": "2023-05-08 06:48:24 America/Los_Angeles",
      "original_application_version": "4153",
      "in_app": [
        {
          "quantity": "1",
          "product_id": "prime",
          "transaction_id": "510001225271632",
          "original_transaction_id": "510001225271632",
          "purchase_date": "2023-05-09 02:14:13 Etc/GMT",
          "purchase_date_ms": "1683598453000",
          "purchase_date_pst": "2023-05-08 19:14:13 America/Los_Angeles",
          "original_purchase_date": "2023-05-09 02:14:13 Etc/GMT",
          "original_purchase_date_ms": "1683598453000",
          "original_purchase_date_pst": "2023-05-08 19:14:13 America/Los_Angeles",
          "expires_date": "2099-12-31 23:59:59 Etc/GMT",
          "expires_date_ms": "4102415999000",
          "expires_date_pst": "2099-12-31 23:59:59 America/Los_Angeles",
          "web_order_line_item_id": "510000575140385",
          "is_trial_period": "false",
          "is_in_intro_offer_period": "false",
          "in_app_ownership_type": "PURCHASED"
        }
      ]
    },
    "latest_receipt_info": [
      {
        "quantity": "1",
        "product_id": "prime",
        "transaction_id": "510001225271632",
        "original_transaction_id": "510001225271632",
        "purchase_date": "2023-05-09 02:14:13 Etc/GMT",
        "purchase_date_ms": "1683598453000",
        "purchase_date_pst": "2023-05-08 19:14:13 America/Los_Angeles",
        "original_purchase_date": "2023-05-09 02:14:13 Etc/GMT",
        "original_purchase_date_ms": "1683598453000",
        "original_purchase_date_pst": "2023-05-08 19:14:13 America/Los_Angeles",
        "expires_date": "2099-12-31 23:59:59 Etc/GMT",
        "expires_date_ms": "4102415999000",
        "expires_date_pst": "2099-12-31 23:59:59 America/Los_Angeles",
        "web_order_line_item_id": "510000575140385",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED",
        "subscription_group_identifier": "20268334"
      }
    ],
    "latest_receipt": "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",
    "pending_renewal_info": [
      {
        "auto_renew_product_id": "prime",
        "product_id": "prime",
        "original_transaction_id": "510001225271632",
        "auto_renew_status": "1"
      }
    ],
    "status": 0
  }
};

$done({body: JSON.stringify(obj)});