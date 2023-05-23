const status = typeof $task !== "undefined" ? "HTTP/1.1 200 OK" : 200;

var obj = {
  "Code": 200,
  "Data": {
    "Build": "12900",
    "LicenseKey": "PXM-2ED2-8F7A-9EB3-F7A8-712C",
    "Tittle": "Thank you for purchasing Proxyman! Your support helps us ship Proxyman even more awesome.",
    "sign": "UFhNLTJFRDItOEY3QS05RUIzLUY3QTgtNzEyQw==",
    "deviceID": "B1D24E22-39C9-4A22-8B29-54A31038ABDD",
    "email": "huang@gmail.com",
    "purchasedAt": "1 Jan 2023",
    "updatesAvailableUntil": "31 Dec 2023"
  },
  "Message": "Ok"
};

$done({body: JSON.stringify(obj), status: status});
