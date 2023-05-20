const a = typeof $task != 'undefined';
const b = typeof $httpClient != 'undefined';

if (b) {
  $done({
    'response': {
      'status': 200,
      'body': '{"data": {"premiumAccess": true }}'
    }
  })
} else if (a) {
  $done({
    'status': 'HTTP/1.1 200 OK',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': '{"data": {"premiumAccess": true }}'
  })
} else {
  $done({'status': 200, 'body': '{"data": {"premiumAccess": true }}'})
};
