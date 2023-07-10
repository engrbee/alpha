const path1 = "batch";
const path2 = "user/subscription";

let url = $request.url;
let body = $response.body || "";

if (url.indexOf(path1) != -1) {
  if (body.indexOf("user_subscription") != -1) {
    let new_body = body.replace(/"user_subscription".*?\}/g, '"user_subscription":{"user_id":15424269,"uuid":"cc995f7b-133c-423c-abc8-fece2c739660","trial_used":false,"current_subscription":{"subscription_token":"510001226397691","plan":1,"status":1,"platform":1,"platform_status":"ACTIVE","in_trial":false,"auto_renewal":true,"cancelled":false,"expire_at":4102415999000 }}');
    $done({body: new_body});
  } else {
    $done({body: body});
  };
};

if (url.indexOf(path2) != -1) {
  body = '"user_subscription":{"user_id":15424269,"uuid":"cc995f7b-133c-423c-abc8-fece2c739660","trial_used":false,"current_subscription":{"subscription_token":"510001226397691","plan":1,"status":1,"platform":1,"platform_status":"ACTIVE","in_trial":false,"auto_renewal":true,"cancelled":false,"expire_at":4102415999000 }}'
  $done({status: 200, body: body});
};
