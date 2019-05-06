const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.locals.title = 'Deadpool backend';

let db = require('./models/index');
let routes = require('./routes/routes')
routes(app, db);
module.exports = app;