const readline = require('readline');
const rp = require('request-promise');
const cheerio = require('cheerio');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const call = () => {
  welcome();
};

const welcome = () => {
  console.log("Welcome to the Best Selling Games App!");
  setTimeout(() => {
    getSystem();
  }, 1000);
};

const getSystem = () => {
  // Get input on system to scrape:
  rl.question("Which system's current bestselling games would you like to see? (Xbox One, PS4, Switch, Wii U, 3DS): ", (system) => {
    listBestsellers(input);
  });
};

const listBestsellers = (input) => {
  const input = input.toLowerCase();
  rl.close();
};

call();





