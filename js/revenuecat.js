let resp = {};
let body = typeof $response != "undefined" && $response.body || null;
let obj = JSON.parse(body);
let ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
let list = {
  "Balance": {"name": "pro", "id": "ios_subscription_annual_intl_intro_free_69.99_2021.12.06"},
  "Rootd": {"name": "pro", "id": "subscription_yearly_week_trial"},
  "Structured": {"name": "pro", "id": "app.structured.pro.yearly"},
  "VSCO": {"name": "membership", "id": "vscopro_global_5999_annual_7D_free"},
  "Photo": {"name": "pro", "id": "pixelmator_photo_yearly_v1"},
  "Lungy": {"name": "pro", "id": "lungy_1499_1y_1w0"},
  "ScannerPro": {"name": "premium", "id": "com.readdle.Scanner.subscription.year25"},
  "NotePlan": {"name": "pro", "id": "co.noteplan.subscription.businessclass.annual"},
  "Prisma": {"name": "premium", "id": "premium.promo.annual"},
  "Endel": {"name": "pro", "id": "12_Months_Instant_Offer"},
  "PhotoRoom": {"name": "pro", "id": "com.background.pro.yearly"},
  "Balance": {"name": "pro", "id": "ios_subscription_annual_69.99_2020.04.15"},
  "Harukong": {"name": "premium", "id": "com.bluesignum.harukong.1yearSubscription"},
  "Uptime": {"name": "premium", "id": "com.wingsy.uptime_premium_year"},
  "Planta": {"name": "premium", "id": "com.stromming.Plants.12month"},
  "ChatGPTApp": {"name": "Advanced", "id": "com.palligroup.gpt3.yearlyyy"},
  "TouchRetouch": {"name": "premium", "id": "tr5_yearlysubsc_15dlrs_1"},
    "AIChat": { "name": "AI Plus", "id": "aiplus_yearly" },
  "AIKeyboard": { "name": "plus_keyboard", "id": "aiplus_keyboard_yearly" },
  "APTV": { "name": "pro", "id": "com.kimen.aptvpro.lifetime" },
  "AnkiPro": { "name": "Premium", "id": "com.ankipro.app.lifetime" },
  "Awesome Habits": { "name": "premium", "id": "HabitsPremiumLifetime" },
  "Balance": { "name": "pro", "id": "balance_pro_yearly" },
  "BlackBox": { "name": "plus", "id": "app.filmnoir.appstore.purchases.lifetime" },
  "Chat%E7%BB%83%E5%8F%A3%E8%AF%AD": { "name": "Premium", "id": "com.tech.AiSpeak.All" },
  "ChatGPTApp": { "name": "Advanced", "id": "com.palligroup.gpt3.yearlyyy" },
  "ColorSlurp": { "name": "pro", "id": "com.IdeaPunch.ColorSlurp.subscription.pro.yearlyOneTimeUpgradeDiscount" },
  "Context_iOS": { "name": "pro", "id": "ctx_3y_sspai_preorder_angel" },
  "Cookie": { "name": "allaccess", "id": "app.ft.Bookkeeping.lifetime" },
  "CountDuck": { "name": "premium", "id": "Lifetime" },
  "Currency": { "name": "plus", "id": "com.jeffreygrossman.currencyapp.iap.pro.crossgrade" },
  "Cuto": { "name": "pro", "id": "com.potatsolab.cuto.pro" },
  "DirEqual": { "name": "direqualpro", "id": "direqual.onetime" },
  "Emoji+%20%F0%9F%98%9": { "name": "premium", "id": "com.emoji.freemium.subscription.premium" },
  "Endel": { "name": "pro", "id": "12_Months_Instant_Offer" },
  "Flow": { "name": "pro", "id": "design.yugen.Flow.Lifetime" },
  "Free": { "name": "pro", "id": "appspree_pro_lifetime" },
  "Funexpected%20Math": { "name": "plus", "id": "Plus6Months14DaysTrial" },
  "HTTPBot": { "name": "Pro", "id": "httpbot_1499_1y_1w0" },
  "HabitKit": { "name": "Pro", "id": "habitkit_1799_lt" },
  "Harukong": { "name": "premium", "id": "com.bluesignum.harukong.1yearSubscription" },
  "ImagineAI": { "name": "pro", "id": "artistai.yearly.1" },
  "InYourFace": { "name": "premium", "id": "iyf.premium.v2.yearly" },
  "Langster": { "name": "Premium", "id": "com.langster.universal.lifetime" },
  "Law": { "name": "vip", "id": "LawVIPOneYear" },
  "Liftbear": { "name": "Pro", "id": "liftbear_2399_1y" },
  "LongmaoApp": { "name": "pro", "id": "douyina_forever_01" },
  "Lungy": { "name": "pro", "id": "lungy_1499_1y_1w0" },
  "Muse": { "name": "pro", "id": "monthly_pro_muse" },
  "MusicMate": { "name": "premium", "id": "mm_lifetime_68_premium" },
  "MyPianist": { "name": "pro", "id": "com.collaparte.mypianist.pro.gift.twelve" },
  "NotePlan": { "name": "pro", "id": "co.noteplan.subscription.businessclass.annual" },
  "OpenCat": { "name": "pro", "id": "tech.baye.OpenCat.pro.monthly" },
  "PastePal": { "name": "pro", "id": "com.onmyway133.PastePal.pro" },
  "Photo": { "name": "pro", "id": "pixelmator_photo_yearly_v1" },
  "PhotoRoom": { "name": "pro", "id": "com.background.pro.yearly" },
  "Planta": { "name": "premium", "id": "com.stromming.Plants.12month" },
  "Prisma": { "name": "premium", "id": "premium.promo.annual" },
  "Readle": { "name": "Premium", "id": "com.hello.german.yearly" },
  "RocketSim": { "name": "rocketsim_pro", "id": "com.rocketsim.lifetime.subscription" },
  "Rootd": { "name": "pro", "id": "subscription_yearly_week_trial" },
  "ScannerPro": { "name": "premium", "id": "com.readdle.Scanner.subscription.year25" },
  "Scherlokk": { "name": "schpro", "id": "scherlokk.onetime" },
  "Sex%20Actions": { "name": "Premium Plus", "id": "ru.sexactions.subscriptionPlusWeek1" },
  "Sketch": { "name": "memberships", "id": "com.sketch.workspace.yearly" },
  "SmartAIChat": { "name": "Premium", "id": "sc_3999_1y" },
  "StarDiary": { "name": "pro", "id": "com.gsdyx.StarDiary.nonConsumable.forever" },
  "StarFocus": { "name": "pro", "id": "com.gsdyx.StarFocus.nonConsumable.forever" },
  "Structured": { "name": "pro", "id": "app.structured.pro.yearly" },
  "Structured": { "name": "pro", "id": "today.structured.pro" },
  "TextMask": { "name": "pro", "id": "tm_lifetime" },
  "TouchRetouch": { "name": "premium", "id": "tr5_yearlysubsc_15dlrs_1" },
  "TouchRetouchBasic": { "name": "premium", "id": "tr5_yearlysubsc_30_and_20_dlrs" },
  "Uptime": { "name": "premium", "id": "com.wingsy.uptime_premium_year" },
  "Usage": { "name": "pro", "id": "pro.usage.mac.lifetime_1" }, 
  "VOX": { "name": "premium", "id": "rocks.vox.premium.yearly" },
  "VSCO": { "name": "membership", "id": "vscopro_global_5999_annual_7D_free" },
  "Version": { "name": "pro", "id": "httpbot_1499_1y_1w0" },
  "Vision": { "name": "promo_3.0", "id": "vis_lifetime_3.0_promo" },
  "VoiceAI": { "name": "Special Offer", "id": "voiceannualspecial" },
  "cdiary": { "name": "Premium", "id": "pub.kiya.daymoment.lifetime" },
  "image_upscaler": { "name": "pro", "id": "yearly_sub_pro" },
  "uDock": { "name": "udockpro", "id": "udock.onetime" },
  "universal": { "name": "Premium", "id": "remotetv.yearly.01" },
  "windiary": { "name": "Pro", "id": "windiary_1799_lt" },
  "Medis": { "name": "pro", "id": "li.zihua.medis_2_pro" },
  "Whisper Mate": { "name": "pro", "id": "whisper.pro" },
  "Opal": { "name": "premium", "id": "lifetime_tier2" }
};
let sub_data = {"original_purchase_date":"2022-01-01T08:00:00Z","expires_date":"2099-12-31T23:59:59Z","is_sandbox":false,"refunded_at":null,"unsubscribe_detected_at":null,"grace_period_expires_date":null,"period_type":"active","purchase_date":"2022-01-01T08:00:00Z","billing_issues_detected_at":null,"ownership_type":"PURCHASED","store":"app_store","auto_resume_date":null};
let ent_data = {"grace_period_expires_date":null,"purchase_date":"2022-01-01T08:00:00Z","expires_date":"2099-12-31T23:59:59Z"};

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  resp.headers = $request.headers;
} else if (obj && obj.subscriber && body.indexOf("expires_date") == -1) {
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};
  for (const i in list) {
    if (new RegExp(`^${i}`, `i`).test(ua)) {
      obj.subscriber.subscriptions[list[i].id] = sub_data;
      obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(ent_data));
      obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
      break;
    }
  };
  resp.body = JSON.stringify(obj);
} else if (obj && obj.subscriber) {
  resp.body = body
    .replace(/\"expires_date\":\".*?\"/g, '"expires_date":"2099-12-31T23:59:59Z"')
    .replace(/\"purchase_date\":\".*?\"/g, '"purchase_date":"2022-01-01T08:00:00Z"')
    .replace(/\"first_seen\":\".*?\"/g, '"first_seen":"2022-01-01T08:00:00Z"')
    .replace(/\"original_purchase_date\":\".*?\"/g, '"original_purchase_date":"2022-01-01T08:00:00Z"')
    .replace(/\"unsubscribe_detected_at\":\".*?\"/g, '"unsubscribe_detected_at":null')
    .replace(/\"period_type\":\"\w+\"/g, '"period_type":"active"');
};

$done(resp);
