var obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1482780647,
    "app_item_id": 1482780647,
    "bundle_id": "com.polywise.weekly",
    "application_version": "20230412",
    "download_id": 502386062941207927,
    "version_external_identifier": 856203492,
    "receipt_creation_date": "2023-04-28 01:54:32 Etc/GMT",
    "receipt_creation_date_ms": "1682646872000",
    "receipt_creation_date_pst": "2023-04-27 18:54:32 America/Los_Angeles",
    "request_date": "2023-04-28 06:15:21 Etc/GMT",
    "request_date_ms": "1682662521133",
    "request_date_pst": "2023-04-27 23:15:21 America/Los_Angeles",
    "original_purchase_date": "2023-04-27 23:55:25 Etc/GMT",
    "original_purchase_date_ms": "1682639725000",
    "original_purchase_date_pst": "2023-04-27 16:55:25 America/Los_Angeles",
    "original_application_version": "20230412",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.polywise.subscriptions.yearly2",
        "transaction_id": "510001215510144",
        "original_transaction_id": "510001215510144",
        "purchase_date": "2023-04-28 01:54:30 Etc/GMT",
        "purchase_date_ms": "1682646870000",
        "purchase_date_pst": "2023-04-27 18:54:30 America/Los_Angeles",
        "original_purchase_date": "2023-04-28 01:54:31 Etc/GMT",
        "original_purchase_date_ms": "1682646871000",
        "original_purchase_date_pst": "2023-04-27 18:54:31 America/Los_Angeles",
        "expires_date": "2099-12-31 23:59:59 Etc/GMT",
        "expires_date_ms": "4102415999000",
        "expires_date_pst": "2099-12-31 23:59:59 America/Los_Angeles",
        "web_order_line_item_id": "510000569909652",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.polywise.subscriptions.yearly2",
      "transaction_id": "510001215510144",
      "original_transaction_id": "510001215510144",
      "purchase_date": "2023-04-28 01:54:30 Etc/GMT",
      "purchase_date_ms": "1682646870000",
      "purchase_date_pst": "2023-04-27 18:54:30 America/Los_Angeles",
      "original_purchase_date": "2023-04-28 01:54:31 Etc/GMT",
      "original_purchase_date_ms": "1682646871000",
      "original_purchase_date_pst": "2023-04-27 18:54:31 America/Los_Angeles",
      "expires_date": "2099-12-31 23:59:59 Etc/GMT",
      "expires_date_ms": "4102415999000",
      "expires_date_pst": "2099-12-31 23:59:59 America/Los_Angeles",
      "web_order_line_item_id": "510000569909652",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20556366"
    }
  ],
  "latest_receipt": "",
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.polywise.subscriptions.yearly2",
      "product_id": "com.polywise.subscriptions.yearly2",
      "original_transaction_id": "510001215510144",
      "auto_renew_status": "1"
    }
  ],
  "status": 0
};

$done({body: JSON.stringify(obj)});