// const path1 = "batch";
// const path2 = "user/subscription";

let body = $response.body || "";

if (body.indexOf("user_subscription") != -1) {
  body = body.replace(/"user_subscription".*?\}/g, '"user_subscription":{"user_id":15424269,"uuid":"cc995f7b-133c-423c-abc8-fece2c739660","trial_used":false,"current_subscription":{"subscription_token":"510001226397691","plan":1,"status":1,"platform":1,"platform_status":"ACTIVE","in_trial":false,"auto_renewal":true,"cancelled":false,"expire_at":4102415999000 }}');
};

$done({body: body});
