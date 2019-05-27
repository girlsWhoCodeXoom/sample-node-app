'use strict';

const axios = require('axios');
const countryDataModel = require('../viewModels/countryData');

/**
 *
 * getCountryData makes 2 different API calls to get data about the countries that Xoom serves
 * and passes the responses from those calls to the callback
 * @param callback
 */
function getCountryData(callback) {
    /* axios is a node module that does x */
    axios.all([
        axios.get('https://api.xoom.com/v2/catalog/currency-channels?beta=false&page_size=500'),
        axios.get('http://countryapi.gear.host/v1/Country/getCountries')
    ]).then(axios.spread((response1, response2) => {
        return callback(null, response1, response2)
    })).catch(error => {
        console.log(error);
    });
}

function getCountries(req, res, next) {
    getCountryData((err, data1, data2) => {
        /* This is the callback */
        const cData = countryDataModel(data1, data2);
        res.render('index', {
            title: 'Express',
            data: cData,
        });
    });
}

module.exports = getCountries;
