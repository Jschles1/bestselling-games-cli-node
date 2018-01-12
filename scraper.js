const rp = require('request-promise');
const cheerio = require('cheerio');

const games = require('./games');

const scrape = (url, cb) => {
  const options = {
    uri: url,
    transform: (body) => {
      return cheerio.load(body);
    }
  };

  rp(options)
    .then($ => {
      console.log($);
      // Get Attributes from element classes
      // Use attributes to create new JS model object
    })
    .then(cb)
    .catch(error => {

    });
};

module.exports = {
  scrape
};