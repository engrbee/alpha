const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const namea = "apple_access";
const nameb = "crossplatform_access";
const jsid = 'com.goodnotes.gn6_one_time_unlock_3999';
if (typeof $response == "undefined") {
	  delete $request.headers["x-revenuecat-etag"];
	  delete $request.headers['X-RevenueCat-ETag'];
	  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
	  var _0x3a5506 = "4|3|0|5|2|6|1" ["split"]('|'),
	  _0x352986 = 0x0;
	  while ( !! []) {
			switch (_0x3a5506[_0x352986++]) {
			case '0':
				  chxm1024.subscriber['entitlements'][namea] = JSON.parse(JSON.stringify(data));
				  continue;
			case '1':
				  chxm1023.body = JSON.stringify(chxm1024);
				  continue;
			case '2':
				  chxm1024.subscriber["entitlements"][namea].product_identifier = jsid;
				  continue;
			case '3':
				  chxm1024.subscriber['subscriptions'][jsid] = {
						'Author': "chxm1023",
						'Telegram': "https://t.me/chxm1023",
						'warning': "仅供学习，禁止转载或售卖",
						'original_purchase_date': '2022-09-09T09:09:09Z',
						'purchase_date': "2022-09-09T09:09:09Z",
						'store': "app_store",
						'ownership_type': "PURCHASED"
				  };
				  continue;
			case '4':
				  data = {
						'Author': 'chxm1023',
						'Telegram': "https://t.me/chxm1023",
						'warning': '仅供学习，禁止转载或售卖',
						'purchase_date': "2022-09-09T09:09:09Z"
				  };
				  continue;
			case '5':
				  chxm1024.subscriber["entitlements"][nameb] = JSON.parse(JSON.stringify(data));
				  continue;
			case '6':
				  chxm1024.subscriber["entitlements"][nameb].product_identifier = jsid;
				  continue;
			}
			break;
	  }
}
$done(chxm1023)
