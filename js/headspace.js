const path1 = "profile/v2/profiles/HSUSER";
const path2 = "subscription/v1/subscriptions/current";

var url = $request.url;
var obj = {};

if (url.indexOf(path1) != -1) {
  obj = {
    "hsId": "HSUSER_7U72DD7AUUWWKGHOB",
    "firstName": "Eric",
    "lastName": "Huang",
    "email": "eric@privaterelay.appleid.com",
    "countryCode": "CN",
    "stateCode": null,
    "creationDate": "2023-05-09T02:15:22.000+00:00",
    "isPhiProtected": false,
    "connections": [
      {
        "id": "apple",
        "type": "social",
        "userId": "000724.c6db39a5fe39403bb30f0935adfa6f4e.0215"
      }
    ],
    "privileges": ["STANDARD_CONTENT", "SUBSCRIBER", "V1_CONTENT"]
  }
};

if (url.indexOf(path2) != -1) {
  obj = {
    "subscriptions": [
      {
        "id": "16138265",
        "startsAt": "2023-05-09T02:16:03.000Z",
        "endsAt": "2099-12-31T23:59:59.000Z",
        "legacySubscriptionId": "HSSUBS_B2CSUBSCRIBER",
        "externalId": "6459ace76868b8056feae069",
        "status": "ACTIVE",
        "purchaserId": null,
        "plan": {
          "affiliation": null,
          "initialTermMonths": 12,
          "renewalTermMonths": 12,
          "name": "IOSIAP_ANNUAL",
          "subscriptionType": "B2C"
        },
        "platform": "APPLE",
        "membership": "PRIMARY",
        "renewalTerm": "ANNUAL",
        "renewsAt": "2099-12-31T23:59:59.000Z",
        "subscriptionState": "ANNUAL",
        "tags": ["CURRENT_SUB"],
        "voucher": {
          "code": "ANNUAL"
        }
      }
    ]
  }
};

$done({body: JSON.stringify(obj)});