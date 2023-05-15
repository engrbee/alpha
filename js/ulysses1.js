var obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1225570693,
    "app_item_id": 1225570693,
    "bundle_id": "com.ulyssesapp.mac",
    "application_version": "74345",
    "download_id": 501937703496138426,
    "version_external_identifier": 856540167,
    "receipt_creation_date": "2023-05-14 15:51:19 Etc/GMT",
    "receipt_creation_date_ms": "1684079479000",
    "receipt_creation_date_pst": "2023-05-14 08:51:19 America/Los_Angeles",
    "request_date": "2023-05-14 15:52:31 Etc/GMT",
    "request_date_ms": "1684079551691",
    "request_date_pst": "2023-05-14 08:52:31 America/Los_Angeles",
    "original_purchase_date": "2022-11-20 15:07:41 Etc/GMT",
    "original_purchase_date_ms": "1668956861000",
    "original_purchase_date_pst": "2022-11-20 07:07:41 America/Los_Angeles",
    "original_application_version": "73826",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.ulyssesapp.mac.yearly",
        "transaction_id": "510001229862004",
        "original_transaction_id": "510001214947356",
        "purchase_date": "2023-05-14 15:51:18 Etc/GMT",
        "purchase_date_ms": "1684079478000",
        "purchase_date_pst": "2023-05-14 08:51:18 America/Los_Angeles",
        "original_purchase_date": "2023-04-27 11:37:45 Etc/GMT",
        "original_purchase_date_ms": "1682595465000",
        "original_purchase_date_pst": "2023-04-27 04:37:45 America/Los_Angeles",
        "expires_date": "2023-12-31 23:59:59 Etc/GMT",
        "expires_date_ms": "1704038399000",
        "expires_date_pst": "2023-12-31 23:59:59 America/Los_Angeles",
        "web_order_line_item_id": "510000569641526",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED",
        "promotional_offer_id": "update_trial_2022_12_20"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.ulyssesapp.mac.monthly",
      "transaction_id": "510001214947356",
      "original_transaction_id": "510001214947356",
      "purchase_date": "2023-04-27 11:37:45 Etc/GMT",
      "purchase_date_ms": "1682595465000",
      "purchase_date_pst": "2023-04-27 04:37:45 America/Los_Angeles",
      "original_purchase_date": "2023-04-27 11:37:45 Etc/GMT",
      "original_purchase_date_ms": "1682595465000",
      "original_purchase_date_pst": "2023-04-27 04:37:45 America/Los_Angeles",
      "expires_date": "2023-12-31 23:59:59 Etc/GMT",
      "expires_date_ms": "1704038399000",
      "expires_date_pst": "2023-12-31 23:59:59 America/Los_Angeles",
      "web_order_line_item_id": "510000569641525",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20390501"
    }
  ],
  "latest_receipt": "",
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.ulyssesapp.mac.yearly",
      "product_id": "com.ulyssesapp.mac.yearly",
      "original_transaction_id": "510001214947356",
      "auto_renew_status": "1"
    }
  ],
  "status": 0
};

$done({body: JSON.stringify(obj)});