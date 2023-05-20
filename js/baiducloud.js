var body = $response.body;
var obj = JSON.parse(body);

/* if (body.indexOf("svip") != -1 && body.indexOf("emotional_tip_front") != -1) {
  obj = {"error_code": 0};
};

if (body.indexOf("vip") != -1 && body.indexOf("emotional_tip_front") != -1) {
  obj = {};
};

if (body.indexOf("tips_data_list") != -1 && body.indexOf("status_data") != -1) {
  obj.tips_data_list = [{}];
  obj.tips_data = {};
  obj.status_data = "";
  obj.status_data_arr = [""];
};

if (body.indexOf("user_info") != -1 && body.indexOf("is_vip") != -1) {
  obj.user_info.is_vip = 1;
  obj.user_info.is_svip = 1;
  obj.user_info.is_mvip = 1;
}; */

if (body.indexOf("product_infos") != -1) {
  obj.product_infos = [
    {
      "product_name": "vip2_nd",
      "product_description": "百度网盘超级会员",
      "function_num": 0,
      "start_time": 1553702399,
      "buy_description": "百度网盘超级会员",
      "buy_time": 0,
      "product_id": "1",
      "auto_upgrade_to_svip": 0,
      "end_time": 4102415999,
      "cluster": "vip",
      "detail_cluster": "svip",
      "status": 0
    }
  ];
  obj.level_info = {
    "current_level" : 10,
  };
} else if (body.indexOf("new_guide_data") != -1 && body.indexOf("status_data") != -1) {
  body = $response
    .body
    .repalce(/已失去特权\d+天/g, '2099-12-31 到期')
    .repalce(/去续费/g, '会员中心')
    .repalce(/重拾/g, '已拥有');
  obj = JSON.parse(body);
} else {
  obj = {
    "error_code": 0
  };
};
$done({body: JSON.stringify(obj)});
