const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
    // res.end();
  }
  if (req.url === '/about') {
    res.end('Here is our short story');
    // res.end();
  }
  res.end(`
    <h1>Opps!</h1>
    <p>We can't find the page you are looking for!</p>
    <a href="/">Home</a>
  `);
  // res.end();
});

server.listen(5000);
