const path1 = "vip/vip_show.json";
const path2 = "vip/new_sub_detail.json";
const path3 = "vip/prompt/query.json";
const path4 = "vip/vip_navigation.json";

var url = $request.url;

if (url.indexOf(path1) != -1) {
  var obj = {
    "degrade": 0,
    "ret": 0,
    "error_code": 0,
    "error": "Ok",
    "msg": "Successful",
    "data": {
      "id": 7063470877991773080,
      "id_str": "7063470877991773080",
      "gid": 2359691066,
      "uid": 1959879306,
      "platform": 2,
      "is_valid_user": 1,
      "vip_type": 101,
      "sub_type": 3,
      "sub_name": "包年",
      "renew": 2,
      "valid_time": 1684062690,
      "in_valid_time": 4102415999,
      "create_time": 1684062690,
      "sub_biz_type": 1,
      "is_expire": 0,
      "expire_days": -999,
      "s": 1
    }
  }
};

if (url.indexOf(path2) != -1) {
  var obj = {
    "degrade": 0,
    "ret": 0,
    "error_code": 0,
    "error": "Ok",
    "msg": "Successful",
    "data": {
      "old_vip_type": 4,
      "exchange_vip": 0,
      "uid": 1959879306,
      "screen_name": "engrbee",
      "avatar_url": "https://maavatar1.meitudata.com/a14872cb2e0273a0aa04c0d7674fa457.png",
      "invalid_time": 4102415999,
      "sub_biz_type": 1,
      "vip_type": 101,
      "valid_time": 1684062690,
      "is_expire": 0,
      "expire_days": -999,
      "renew": 2,
      "materials": [],
      "vip_power_num": 17,
      "welfare_center_num": 15,
      "new_power_num": 14141,
      "vip_power_jump_url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&entrance=vip_privilege",
      "welfare_center_jump_url": "meituxiuxiu://webview?hideHeader=true&url=https%3A%2F%2Ftitan-h5.meitu.com%2Fxiu-h5%2Fxiuxiu-vip-related%2Fwelfare-center%2Findex.html%3Fentrance%3Dvip_page",
      "new_power_num_jump_url": "meituxiuxiu://materialcenter?id=-2",
      "xx_vip": {
        "sub_type": 3,
        "renew": 2,
        "valid_time": 1684062690,
        "in_valid_time": 4102415999,
        "is_expire": 0,
        "expire_days": -999,
        "s": 0
      },
      "hbp_vip": {
        "sub_type": 3,
        "renew": 2,
        "valid_time": 1684062690,
        "in_valid_time": 4102415999,
        "is_expire": 0,
        "expire_days": -999,
        "s": 0
      },
      "rights_page_vip_btn_title": "Renew Now",
      "rights_page_svip_btn_title": "Renew Now",
      "vip_sign_info": {
        "show_auto_renew": 1,
        "next_withhold_date": "2099-12-31",
        "next_withhold_amount": 8499,
        "pay_channel": "Apple Pay",
        "sub_type": 3,
        "renew_status": 1,
        "do_pop_up": false
      }
    }
  }
};

if (url.indexOf(path3) != -1) {
  var obj = {
    "degrade": 0,
    "ret": 0,
    "error_code": 0,
    "error": "Ok",
    "msg": "Successful",
    "data": {
      "home_prompt": "Membership is valid until 31/12/2099",
      "home_btn_prompt": "View Now",
      "beautify_prompt": "",
      "beautify_btn_prompt": "",
      "home_prompt_bottom_text1": "",
      "home_prompt_bottom_text2": "",
      "home_btn_prompt_sub_text": "",
      "new_material": {},
      "request_time": 1684063443076,
      "if_transfer": 0,
      "svip_bubble_text": "",
      "incentive_popup": {},
      "pay_interval": 3000,
      "need_login_popup": 0,
      "material_center_vip_info": {
        "vip_icon": "https://xximg1.meitudata.com/7055821777144151872.png",
        "desc": "Welcome back! Meitu SVIP",
        "btn_vip_type": 0
      }
    }
  }
};

if (url.indexOf(path4) != -1) {
  var obj = {
    "degrade": 0,
    "ret": 0,
    "error_code": 0,
    "error": "Ok",
    "msg": "Successful",
    "data": {
      "navigation_card_list": [
        {
          "card_name": "热门活动",
          "card_type": "2",
          "config_list": [
            {
              "sub_title": "14-24 years old",
              "scheme": "meituxiuxiu://miniapp?app_id=Membership&showNav=0&title=member&route=student&entrance=function_card_student",
              "color": "FD4789",
              "id": "6940949892888024236",
              "tag": "function_card_student",
              "title": "Student Discount",
              "url": "https://xximg1.meitudata.com/lklTg148JY.png"
            }, {
              "sub_title": "Exclusive VIP benefits",
              "scheme": "meituxiuxiu://webview?hideHeader=true&url=https%3A%2F%2Ftitan-h5.meitu.com%2Fxiu-h5%2Fxiuxiu-vip-related%2Fwelfare-center%2Findex.html%3Fentrance%3Dvip_page",
              "color": "FF7918",
              "id": "6940950942932030712",
              "tag": "function_card_weal",
              "title": "Benefits Center",
              "url": "https://xximg1.meitudata.com/EPniW04qbd.png"
            }
          ]
        }
      ],
      "xx_vip": {
        "id": "7063470877991773080",
        "id_str": "7063470877991773080",
        "gid": 2359691066,
        "uid": 1959879306,
        "platform": 2,
        "is_valid_user": 1,
        "vip_type": 101,
        "sub_type": 3,
        "sub_name": "包年",
        "renew": 1,
        "valid_time": 1684062690,
        "in_valid_time": 4102415999,
        "create_time": 1684062690,
        "sub_biz_type": 1,
        "is_expire": 0,
        "expire_days": -4,
        "s": 0
      },
      "hbp_vip": {
        "id": "7063470877991773080",
        "id_str": "7063470877991773080",
        "gid": 2359691066,
        "uid": 1959879306,
        "platform": 2,
        "is_valid_user": 1,
        "vip_type": 101,
        "sub_type": 3,
        "sub_name": "包年",
        "renew": 1,
        "valid_time": 1684062690,
        "in_valid_time": 4102415999,
        "create_time": 1684062690,
        "sub_biz_type": 1,
        "is_expire": 0,
        "expire_days": -4,
        "s": 0
      },
      "rights": [
        {
          "img": "https://xximg1.meitudata.com/6951015174386252360.png",
          "title": "Frames",
          "url": "meituxiuxiu://materialcenter?id=101&categoryId=-2"
        },
        {
          "img": "https://xximg1.meitudata.com/6951015174587578954.png",
          "title": "Skin",
          "url": "meituxiuxiu://meirong/skinWhitening?id=61200002"
        },
        {
          "img": "https://xximg1.meitudata.com/6951015174713408077.png",
          "title": "Cutout",
          "url": "meituxiuxiu://materialcenter?id=526&categoryId=-2"
        },
        {
          "img": "https://xximg1.meitudata.com/6951015174872791631.png",
          "title": "Filters",
          "url": "meituxiuxiu://materialcenter?id=506&categoryId=-2"
        }, {
          "img": "https://xximg1.meitudata.com/6951015175002815058.png",
          "title": "Mosaic",
          "url": "meituxiuxiu://materialcenter?id=103&categoryId=-2"
        }, {
          "img": "https://xximg1.meitudata.com/6951015175149615701.png",
          "title": "Makeup",
          "url": "meituxiuxiu://meirong/makeup/auto?id=40050071"
        }, {
          "img": "https://xximg1.meitudata.com/6951015175413856856.png",
          "title": "Plumpness",
          "url": "meituxiuxiu://meirong/facefill"
        }, {
          "img": "https://xximg1.meitudata.com/6951015175564851802.png",
          "title": "Collage",
          "url": "meituxiuxiu://materialcenter?id=310&categoryId=-2"
        }, {
          "img": "https://xximg1.meitudata.com/6951015175749401180.png",
          "title": "Firmness",
          "url": "meituxiuxiu://meirong/wrinkle"
        }, {
          "img": "https://xximg1.meitudata.com/6951015175896201822.png",
          "title": "Video Retouching",
          "url": "meituxiuxiu://videobeauty/filter?id=602002416"
        }, {
          "img": "https://xximg1.meitudata.com/6951015176537930336.png",
          "title": "Video Retouch",
          "url": "meituxiuxiu://videobeauty/auto_beauty?id=615000020"
        }, {
          "img": "https://xximg1.meitudata.com/6951015176672148066.png",
          "title": "Stiker",
          "url": "meituxiuxiu://materialcenter?id=111&categoryId=-2"
        }, {
          "img": "https://xximg1.meitudata.com/6951015176793782884.png",
          "title": "Doodle pens",
          "url": "meituxiuxiu://materialcenter?id=105&categoryId=-2"
        }, {
          "img": "https://xximg1.meitudata.com/6951015176940583526.png",
          "title": "Text",
          "url": "meituxiuxiu://materialcenter?id=109&categoryId=-2"
        }, {
          "img": "https://xximg1.meitudata.com/6951015177074801256.png",
          "title": "Camera AR",
          "url": "meituxiuxiu://camera?mode=3&showListView=1&publish_mode=1&id=200193651"
        }, {
          "img": "https://xximg1.meitudata.com/6951015177225796202.png",
          "title": "Teeth Correction",
          "url": "meituxiuxiu://meirong/orthodon?id=1"
        }
      ],
      "rights_general": [
        {
          "img": "https://xximg1.meitudata.com/6972861955604497692.png",
          "track_id": "svip_exclusive",
          "title": "",
          "url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=1&entrance=vip_bottom"
        },
        {
          "img": "https://xximg1.meitudata.com/6972861955394782490.png",
          "track_id": "svip_special_function",
          "title": "",
          "url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=2&entrance=vip_bottom"
        },
        {
          "img": "https://xximg1.meitudata.com/6972861955264759063.png",
          "track_id": "svip_commercial_use",
          "title": "",
          "url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=3&entrance=vip_bottom"
        },
        {
          "img": "https://xximg1.meitudata.com/6972861954786608403.png",
          "track_id": "svip_systems_use",
          "title": "",
          "url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&active=4&entrance=vip_bottom"
        }, {
          "img": "https://xximg1.meitudata.com/6972861955059238165.png",
          "track_id": "svip_12prerogatives",
          "title": "",
          "url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&entrance=vip_bottom"
        }
      ],
      "vip_type": 2,
      "display_vip_type": 2,
      "display_vip_time": 1,
      "human_id": 0,
      "screen_name": "engrbee",
      "avatar_url": "https://maavatar1.meitudata.com/a14872cb2e0273a0aa04c0d7674fa457.png",
      "hello_text": "Good evening，engrbee",
      "btn_text": "Subscribe Now",
      "vip_privilege_num": 17,
      "welfare_centre_num": 15,
      "new_rights_num": 14141,
      "vip_power_jump_url": "meituxiuxiu://miniapp?app_id=VipRights&showNav=0&title=viprights&type=svip&entrance=vip_privilege",
      "welfare_center_jump_url": "meituxiuxiu://webview?hideHeader=true&url=https%3A%2F%2Ftitan-h5.meitu.com%2Fxiu-h5%2Fxiuxiu-vip-related%2Fwelfare-center%2Findex.html%3Fentrance%3Dvip_page",
      "new_power_num_jump_url": "meituxiuxiu://materialcenter?id=-2"
    }
  }
};

$done({body: JSON.stringify(obj)});