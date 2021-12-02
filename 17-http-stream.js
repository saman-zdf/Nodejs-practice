var http = require('http');

var fs = require('fs');

http
  .createServer(function (request, response) {
    const text = fs.readFileSync('./content/big.txt', 'utf8');
    response.end(text);
  })
  .listen(5000);
