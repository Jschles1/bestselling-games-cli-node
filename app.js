const readline = require('readline');
const rp = require('request-promise');
const cheerio = require('cheerio');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/**************************************************************************************/

var call = () => {
  welcome();
  getSystem();
};

var welcome = () => {

};

var getSystem = () => {
  // Get input on system to scrape:
  listBestsellers(system);
};

var listBestsellers = (system) => {

};





