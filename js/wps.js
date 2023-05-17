var obj = JSON.parse($response.body);

obj.privilege = [
  {
    "times": 0,
    "spid": "data_recover",
    "expire_time": 4102415999
  },
  {
    "times": 0,
    "spid": "ocr",
    "expire_time": 4102415999
  },
  {
    "times": 0,
    "spid": "pdf2doc",
    "expire_time": 4102415999
  },
  {
    "times": 0,
    "spid": "pdf_merge",
    "expire_time": 4102415999
  }, {
    "times": 0,
    "spid": "pdf_sign",
    "expire_time": 4102415999
  }, {
    "times": 0,
    "spid": "pdf_split",
    "expire_time": 4102415999
  }
];

obj.vip = {
  "enabled": [
    {
      "name": "超级会员",
      "memberid": 40,
      "expire_time": 4102415999
    }, {
      "name": "WPS会员",
      "memberid": 20,
      "expire_time": 4102415999
    }, {
      "name": "稻壳会员",
      "memberid": 12,
      "expire_time": 4102415999
    }
  ],
  "memberid": 40,
  "name": "超级会员",
  "has_ad": 0,
  "expire_time": 4102415999
};

$done({body: JSON.stringify(obj)});
