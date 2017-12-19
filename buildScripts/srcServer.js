var express = require('express'),
  path = require('path'),
  open = require('open'),
  port = 1234,
  app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log('Error:' + err);
  } else {
    open('http://localhost:'+port);
  }
});
