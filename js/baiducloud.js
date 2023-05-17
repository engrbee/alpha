var body = $response.body;
var obj = JSON.parse(body);

if (body.Indexof("svip") && body.Indexof("emotional_tip_front")) {
    obj.svip = {};
};

if (body.Indexof("vip") && body.Indexof("emotional_tip_front")) {
    obj.vip = {};
};

if (body.Indexof("product_infos")) {
    obj.product_infos = [
        {
            "product_id": "5310897792128633390",
            "start_time": 1417260485,
            "end_time": 4102415999,
            "buy_time": "1417260485",
            "cluster": "offlinedl",
            "detail_cluster": "offlinedl",
            "product_name": "gz_telecom_exp"
        }, {
            "product_name": "svip2_nd",
            "product_description": "超级会员",
            "function_num": 0,
            "start_time": 1553702399,
            "buy_description": "",
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
