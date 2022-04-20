const express = require('express');
const router = require('./routes');

const app = express();
app.use(router);

app.listen(3000, () => console.log('Server started at port 3000'));
