require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const logger = require('morgan');
const path = require('path');

// TODO initialize express app
const app = express();
// TODO initialize router
const router = require('./router');
// TODO initialize Database
require('./database/config');
// TODO initialize database's tables and seed data
require('./database');
// TODO use 'parser' and 'logger' as middleware
app.use(parser.json());
app.use(parser.urlencoded());
app.use(logger('dev'));
// TODO serve static files
app.use(express.static(path.resolve(__dirname, '../static'));
// TODO use middleware to '/api' in front of all routes
app.use('/api', router);
const port = process.env.PORT || 3000;
// TODO start listening with server
app.listen(port, () => {
  console.log(`max is listening to you on ${port}`);
});
