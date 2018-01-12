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
      const results = $("div.product");
      results.each((i, elem) => {
        let title = $(".ats-product-title-lnk")[i].children[0].data;
        let priceArr = $("p.pricing.ats-product-price")[i];
        let price;

        if (priceArr.children.length !== 1) {
          price = priceArr.children[1].data;
        } else {
          price = priceArr.children[0].data;
        }

        let publisher = $(".publisher.ats-product-publisher")[i].children[0].data.replace("by", "").trim();
        let url = "www.gamestop.com" + $(".ats-product-title-lnk")[i].attribs.href;
        
        games.createGame(title, price, publisher, url);
      })
    })
    .then(cb)
    .catch(error => {
      console.log(error)
    });
};

module.exports = {
  scrape
};