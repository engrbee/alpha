const status = typeof $task !== "undefined" ? "HTTP/1.1 200 OK" : 200;

var obj = {
  "Code": 200,
  "Data": {
    "Build": "12900",
    "LicenseKey": "PXM-2ED2-8F7A-9EB3-F7A8-712C",
    "Tittle": "Thank you for purchasing Proxyman! Your support helps us ship Proxyman even more awesome.",
    "sign": "UFhNLVFXRVItQVNERi1aWENWLVVJT1AtSEpLTA==",
    "deviceID": "D5FB34F4-2BE1-48B7-B8B6-0134995B2257",
    "email": "huang@gmail.com",
    "purchasedAt": "1 Jan 2023",
    "updatesAvailableUntil": "31 Dec 2023"
  },
  "Message": "Ok"
};

$done({body: JSON.stringify(obj), status: status});
