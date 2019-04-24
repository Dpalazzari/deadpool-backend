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
const url = require('./helpers/consulHelper');
// let url = require('./seeders/helpers/consulHelper');
try {
  url().then(apiUrl => console.log(apiUrl))
} catch (err) {
  console.log(err);
}
// url().then(thing => {
//   console.log(thing)
// })
// console.log(url);
// console.log(typeof db.characters)
module.exports = app;