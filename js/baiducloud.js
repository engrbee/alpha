var body = $response.body;
var obj = JSON.parse(body);

if (body.indexOf("svip") != -1 && body.indexOf("emotional_tip_front") != -1) {
  obj.svip = {};
};

if (body.indexOf("vip") != -1 && body.indexOf("emotional_tip_front") != -1) {
  obj.vip = {};
};

if (body.indexOf("tips_data_list") != -1 && body.indexOf("status_data") != -1) {
  obj.tips_data_list = [{}];
  obj.tips_data = {};
  obj.status_data = "";
  obj.status_data_arr = [""];
};

if (body.indexOf("product_infos") != -1) {
  obj.product_infos = [
    {
      "product_id": "5210897752128663390",
      "start_time": 1379131442,
      "end_time": 2147483648,
      "buy_time": "1379131442",
      "cluster": "offlinedl",
      "detail_cluster": "offlinedl",
      "product_name": "offlinedl_permanent",
      "status": "0",
      "function_num": 2,
      "buy_description": "离线下载套餐(永久)",
      "product_description": "离线下载套餐(永久)"
    }, {
      "product_name": "svip2_nd",
      "product_description": "超级会员",
      "function_num": 0,
      "start_time": 1553702399,
      "buy_description": "超级会员",
      "buy_time": 0,
      "product_id": "1",
      "auto_upgrade_to_svip": 0,
      "end_time": 4102415999,
      "cluster": "vip",
      "detail_cluster": "svip",
      "status": 0
    }
  ];
};

$done({body: JSON.stringify(obj)});
