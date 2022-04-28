const express = require('express');
require('express-async-errors');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);
app.use((error, req, res, next) => {
  console.log('### Error handler!');
  console.log(error);
  res.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at port 3000'));
