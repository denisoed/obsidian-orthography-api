const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 7777;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server is running on port 7777');
});
