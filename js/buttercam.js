if ($response.body && $request.method == "GET") {
   var body = $response
  .body
  .replace(/\"ownership\":\"\w+\"/g, '"ownership":"free"')
  .replace(/\"usageType\":\"\w+\"/g, '"usageType":"unlimited"')
  .replace(/\"memberships\":\[.*?\]/g, '"memberships":[{"endAt":4102415999,"id":"1","name":"普通会员","ownership":"temporary","p0":"0","p1":"0VBge20/4m6on5bBfNXo2RS/bJ63w6E9FZ6tbTRAoOF4APls+sunZ9eer","p2":"lESAvFl0qf5ZoCqdONfbrlDPcDIdH8HBIX3U4ArZTiFoLresDmrPFlXzt","p3":"v86Y6JDNhHgjq+SKCwIVPWNAU3uXFyubbjZjIUlpjzwAky8kxgaGutaxF","startAt":1684380849,"usageType":"unlimited"}]')
  .replace(/false/g, "true");
  $done({body});
};
