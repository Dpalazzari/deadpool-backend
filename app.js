const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.locals.title = 'Deadpool backend';

const sequel = require('./src/sequelize')
const Sequelize = sequel.class;
const sequelize = sequel.sequelize;

module.exports = app;