var obj = JSON.parse($response.body);

obj.status = "entitled",
obj.product = "epi:web:basic",
obj.pid = "condenast.identity.385dff55e05dfcb01510c91527e9e017";

$done({body: JSON.stringify(obj)});