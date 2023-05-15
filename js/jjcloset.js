var obj = {
  "status": "success",
  "data": {
    "type_text": "Eric",
    "expired_at": "2099-12-31T23:59:59.000Z",
    "apple_app_store_auto_renew": true,
    "original_purchase_date_ms": "1663084191000",
    "type": "monthly"
  }
};

$done({body: JSON.stringify(obj)});