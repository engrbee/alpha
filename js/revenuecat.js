const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
/*  'Balance': {
    name: 'pro',
    id: 'ios_subscription_annual_intl_intro_free_69.99_2021.12.06'
  },
  'Rootd': {
    name: 'pro',
    id: 'subscription_lifetime'
  },
  'Imprint': {
    name: 'lucid_unlock_all_content',
    id: 'com.polywise.subscriptions.yearly2'
  },
  'Habits': {
    name: 'believer',
    id: 'com.andyworks.streaks.yearlyBeliever'
  },
  'Endel': {
    name: 'pro',
    id: '12_Months_Instant_Offer'
  }, */
  '1Blocker': {
    name: 'premium',
    id: 'blocker.ios.subscription.yearly'
  },
  'Anybox': {
    name: 'pro',
    id: 'cc.anybox.Anybox.annual'
  },
  'Fileball': {
    name: 'filebox_pro',
    id: 'com.premium.yearly'
  },
  'ipTV': {
    name: 'ipTV +',
    id: 'iptv_9.99_1y_7d_free'
  },
  'APTV': {
    name: 'pro',
    id: 'com.kimen.aptvpro.lifetime'
  },
  'Blink': {
    name: 'pro',
    id: 'blink_shell_plus_1y_1999'
  },
  'mizframa': {
    name: 'premium',
    id: 'mf_20_lifetime2'
  },
  'CallRecorder': {
    name: 'subscriptions',
    id: 'com.prettyboa.CallRecorder.MonthlySubscription2999'
  },
  'VSCO': {
    name: 'membership',
    id: 'com.circles.fin.premium.yearly'
  }
};
const data = {
  "expires_date": "2099-12-31T23:59:59Z",
  "original_purchase_date": "2021-01-01T08:00:00Z",
  "purchase_date": "2021-01-01T08:00:00Z"
};

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlement = obj.subscriber.entitlement || {};
  for (const i in list) {
    if (new RegExp(`^${i}`, `i`).test(ua)) {
      obj.subscriber.subscriptions[list[i].id] = data;
      obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
      obj
        .subscriber
        .entitlements[list[i].name]
        .product_identifier = list[i].id;
      break;
    }
  }
  resp.body = JSON
    .stringify(obj)
    .replace(/\"expires_date\":\".*?"/g, '"expires_date":"2099-12-31T23:59:59Z"')
    .replace(/\"period_type\":\"\w+\"/g, '"period_type":"active"');
};

$done(resp);