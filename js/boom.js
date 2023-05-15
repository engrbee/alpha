var obj = JSON.parse($response.body);

obj["receipt-data"]["receipt"]["in_app"] = [{
    "quantity": "1",
    "purchase_date_ms": "1609459200000",
    "expires_date": null,
    "expires_date_pst": null,
    "is_in_intro_offer_period": "false",
    "transaction_id": "470000445785125",
    "is_trial_period": "false",
    "original_transaction_id": "470000445785125",
    "purchase_date": "2021-01-01T08:00:00 Etc/GMT",
    "product_id": "com.globaldelight.iBoom.LifetimeDiscountPack",
    "original_purchase_date_pst": "2021-01-01T08:00:00 America/Los_Angeles",
    "original_purchase_date_ms": "1609459200000",
    "web_order_line_item_id": "470000137081235",
    "expires_date_ms": null,
    "purchase_date_pst": "2021-01-01T08:00:00 America/Los_Angeles",
    "original_purchase_date": "2021-01-01T08:00:00 Etc/GMT"
  }];
  
$done({body: JSON.stringify(obj)});