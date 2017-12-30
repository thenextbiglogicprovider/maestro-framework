import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../Webpack.config.dev';

const port = 1234,
  app = express(),
  compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

app.get('/users', (re, res) => {
  res.json([{
    "id": 1,
    "name": "Ajeet Yadav",
    "email": "ajeet1989yadav@gmail.com",
    "age": 28
  }, {
    "id": 2,
    "name": "Ajeet Yadav",
    "email": "ajeet1989yadav@gmail.com",
    "age": 28
  }, {
    "id": 3,
    "name": "Ajeet Yadav",
    "email": "ajeet1989yadav@gmail.com",
    "age": 28
  }, {
    "id": 4,
    "name": "Ajeet Yadav",
    "email": "ajeet1989yadav@gmail.com",
    "age": 28
  }, {
    "id": 5,
    "name": "Ajeet Yadav",
    "email": "ajeet1989yadav@gmail.com",
    "age": 28
  }]);
});

/*eslint-disable no-console*/
app.listen(port, (err) => {
  if (err) {
    console.log('Error:' + err);
  } else {
    open('http://localhost:' + port);
  }
});
