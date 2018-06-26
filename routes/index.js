'use strict';

const express = require('express');
const request = require('request');
const getCountries = require('../controllers/getCountries');
const router = express.Router(); // eslint-disable-line
const catalogDataModel = require('../viewModels/countryData');


router.get('/', getCountries);

module.exports = router;
