const path1 = "v1/get_feed_cards";
const path2 = "v1/subscription";
const path3 = "v1/plan_subscribe_ios";

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
  obj.sections[1].cards = [
    {
      "body": "Improve engagement and inclusion of meeting participants. (Otter Pro & Business only)",
      "img": "https://public.otter.ai/img/speaker-talk-time-home-card.png",
      "title": "Speaker Talk Time",
      "button": {
        "action": {
          "type": "url",
          "target": {
            "url": "https://otter.ai/purchase/individual?utm_source=home_card&utm_campaign=speaker_talk_time"
          }
        },
        "text": ""
      },
      "allow_dismiss": true,
      "pre_title": "NEW FEATURE",
      "action": {
        "type": "url",
        "target": {
          "url": "https://otter.ai/purchase/individual?utm_source=home_card&utm_campaign=speaker_talk_time"
        }
      },
      "overflow": {
        "options": [
          {
            "action": {
              "type": "dismiss"
            },
            "text": "Maybe Later"
          }
        ],
        "icon": "three_dot"
      },
      "id": 1765129707,
      "group_type": "side",
      "template": "action_small",
      "analytics_type": "speaker_talk_time"
    }, {
      "img": "https://aipublic.s3-us-west-2.amazonaws.com/img/group-12%403x.png",
      "button_bottom": {},
      "title": "Run better meetings",
      "bullets": [
        "Get reminders to record your meetings", "Title your notes automatically", "Invite people to view & highlight live"
      ],
      "action": {
        "type": "calendar_connect"
      },
      "overflow": {
        "options": [
          {
            "action": {
              "type": "snooze"
            },
            "text": "Show me later"
          }, {
            "action": {
              "type": "dismiss"
            },
            "text": "Hide this card"
          }
        ],
        "icon": "three_dot"
      },
      "id": 1763754414,
      "group_type": "side",
      "template": "action_center_large",
      "analytics_type": "calendar_connect"
    }, {
      "body": [
        {
          "text": "Minutes reset in 31 days",
          "bold": false
        }
      ],
      "pre_title": "ACCOUNT",
      "id": 1763754418,
      "group_type": "side",
      "template": "quota",
      "analytics_type": "quota",
      "minutes_left": 1200,
      "minutes_quota": 1200,
      "title": "Pro (Annual)",
      "button": {
        "text": "",
        "action": {
          "type": ""
        }
      }
    }
  ];
};

if (url.indexOf(path2) != -1 || url.indexOf(path3) != -1) {
  obj = {
    "status": "OK",
    "subscription": {
      "subscription_id": 14180954,
      "plan_id": 24,
      "plan_type": "premium",
      "discount_type": "regular",
      "plan": {
        "id": 24,
        "name": "Premium Plan Annually post-repackaging",
        "display_name": "Pro (Annual)",
        "type": "premium",
        "cycle": "year",
        "price": "99.99",
        "audio_quota": 1200,
        "discount_type": "regular"
      },
      "payment_platform": "apple",
      "stripe_subscription_id": null,
      "stripe_subscription_url": "https://dashboard.stripe.com/subscriptions/None",
      "zuora_subscription_id": null,
      "google_original_order_id": null,
      "seconds_quota": 18000,
      "seconds_left": 18000,
      "import_quota": 3,
      "import_usage": 0,
      "is_recurring": true,
      "cycle_start_at": 1685064448,
      "cycle_end_at": 1687742848,
      "auto_renew_enabled": true,
      "plan_end_time": 4102415999,
      "coupon_trial_end_at": null,
      "trial_end_at": null,
      "credits": [],
      "coupon": {},
      "new_plan": null,
      "secondary_subscription": null,
      "start_at": "2023-05-25T18:27:28.009",
      "is_legacy_plan": false,
      "grandfather_end_time": null,
      "previous_workspace": {}
    }
  };
};

$done({body: JSON.stringify(obj)});
