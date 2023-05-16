var body = $response
  .body
  .replace(/\"memberStatus":\d+/g, '"memberStatus":1')
  .replace(/\"username":".*?"/g, '"username":"Eric"')
  .replace(/\"buttonText":".*?"/g, '"buttonText":"Premium"')
  .replace(/\"hasPaid\":\w+/g, '"hasPaid":true')
  .replace(/\"klassHasPaid\":\w+/g, '"klassHasPaid":true')
  .replace(/\"downLoadAll\":\w+/g, '"downLoadAll":true')
  .replace(/\"videoTime\":\d+/g, '"videoTime":3000')
  .replace(/\"startEnable\":\w+/g, '"startEnable":true')
  .replace(/\"memberStatus\":\d+/g, '"memberStatus":true')
  .replace(/\"liveMemberStatus\":\d+/g, '"liveMemberStatus":true')
  .replace(/\"memberAutoRenew\":\d+/g, '"memberAutoRenew":true')
  .replace(/\"errorCode\":\d+/g, '"errorCode":0')
  .replace(/\"status\":\w+/g, '"status":true');

$done({body: body});
