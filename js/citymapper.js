const path1 = "subscriptions/1/features";
const path2 = "subscriptions/1/verify_purchase";

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
  obj = {
    "enabled_features": [
      "custom_blue_dot",
      "tbt_voice_kickscooter",
      "kickscooter_go_auto_refresh",
      "tbt_voice_walk",
      "citymappar",
      "telescope",
      "transit_voice",
      "place_info_v10_23",
      "tbt_voice_floating_cycle",
      "tbt_voice_docked_cycle",
      "cycle_go_auto_refresh",
      "custom_icon",
      "tbt_voice_cycle",
      "co2_homescreen",
      "docked_cycle_go_auto_refresh"
    ]
  };
};

if (url.indexOf(path2) != -1) {
  obj = {
    "verified": true
  };
};

$done({body: JSON.stringify(obj)});
