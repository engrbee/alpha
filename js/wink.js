var obj = {
  "code": 0,
  "error_code": "00000",
  "message": "success",
  "data": {
    "account_type": 1,
    "account_id": "1959879306",
    "is_vip": true,
    "use_vip": true,
    "limit_type": 0,
    "valid_time": "1684053000176",
    "invalid_time": "4102415999000",
    "have_valid_contract": true,
    "show_renew_flag": true,
    "sub_type": 2,
    "sub_type_name": "AutoRenew",
    "active_product_id": "0",
    "active_order_id": "7063430233772817630",
    "active_sub_order_id": "7063430234016087265",
    "active_sub_type": 2,
    "active_sub_type_name": "AutoRenew",
    "active_promotion_status": 2,
    "active_promotion_status_list": [
      2
    ],
    "in_trial_period": false,
    "trial_period_invalid_time": "4102415999000",
    "current_order_invalid_time": "4102415999000",
    "derive_type": 1,
    "derive_type_name": "Premium",
    "membership": {
      "id": "4",
      "display_name": "Wink Premium",
      "level": 1,
      "level_name": "Premium"
    }
  },
  "request_id": "ce1d81cd5d6a4cc5b1a415a1d65288ed",
  "success": true
};

$done({body: JSON.stringify(obj)});