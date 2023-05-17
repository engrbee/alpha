var body = $response.body;
var obj = JSON.parse(body);

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
  obj.user_tag = "{\"has_buy_record\":1,\"has_buy_vip_svip_record\":1,\"last_buy_record_creat_time\":1669946467,\"is_vip\":1,\"is_svip\":1,\"last_vip_type\":\"svip\",\"last_vip_svip_end_time\":4102415999,\"is_svip_sign\":1,\"notice_user_type\":0,\"notice_user_status\":0,\"is_first_act\":0,\"is_first_charge\":0}"
};

$done({body: JSON.stringify(obj)});
