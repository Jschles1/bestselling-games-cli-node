const rp = require('request-promise');
const cheerio = require('cheerio');

const games = require('./games');

const scrape = (url) => {
  const options = {
    uri: url,
    transform: (body) => {
      return cheerio.load(body);
    }
  };

  rp(options)
    .then(data => {
      // Get Attributes from element classes
      // Use attributes to create new JS model object
    })
};

module.exports = {
  scrape
};