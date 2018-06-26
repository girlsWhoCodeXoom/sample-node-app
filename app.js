"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use('/', index);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
