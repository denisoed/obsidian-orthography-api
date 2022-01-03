const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(7777, () => {
  console.log('Server is running on port 7777');
});
