if ($response && $response != "undefined") {
  var body = $response
    .body
    .replace(/\"ownership\":\"\w+\"/g, '"ownership":"free"')
    .replace(/\"usageType\":\"\w+\"/g, '"usageType":"unlimited"')
    .replace(/false/g, "true")
    .replace(/\"memberships\":\[.*?\]/g, '"memberships":[{"startAt":1684380849,"expireAt":4102415999,"iconUrl":"https://m0-file2.bybutter.com/uploaded/toaster/2da1163f9fb34ea280b8ef7497ccde44.png","id":"1","name":"普通会员","ownership":"temporary","p0":"0","p1":"0VBge20/4m6on5bBfNXo2RS/bJ63w2A4+SjU0E6w4ZtLwR0U+vnVIsxzB","p2":"lESAvFl0qf5ZoCqdONfbrlDPcDIdnjwmm5sZgxzXsmetZRZzT/fhq69P+","p3":"v86Y6JDNhHgjq+SKCwIVPWNAU3uX1FG1/y/lWnyygzHf2/R1c+JY7scXK","remark":"使用期限：截至 2099-12-29","usageType":"unlimited"}');
} else {
  $done({});
};
