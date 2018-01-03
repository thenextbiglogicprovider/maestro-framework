import express from 'express';
import path from 'path';
import open from 'open';
import compression from "compression";

const port = 1234,
  app = express();

  app.use(compression());
  app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/views/index.html'));
});

/*eslint-disable no-console*/
app.listen(port, (err) => {
  if (err) {
    console.log('Error:' + err);
  } else {
    open('http://localhost:' + port);
  }
});
