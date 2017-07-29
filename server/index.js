require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

// init router
const router = require('./router');

// init Database
require('./database/config');

// init database's tables and seed
require('./database');


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`node listening on port ${port}`);
});
