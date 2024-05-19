if ($request.url.includes('api/app/user/getCurrentInfo')) {
  let body = JSON.parse($response.body);
  Object.assign(body.data, {
    vipStatus: "1",
    nickname: "Baby",
    vipLabel: "1",
    imgNum: 9999
  });
  $done({body: JSON.stringify(body)});
} else {
  $done({});
}
