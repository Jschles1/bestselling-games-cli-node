const readline = require('readline');

const scraper = require('./scraper');
const games = require('./games');

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
  rl.question("Which system's current bestselling games would you like to see? (Xbox One, PS4, Switch, Wii U, 3DS): ", (input) => {
    listBestsellers(input);
  });
};

const listBestsellers = (input) => {
  let system = input.toLowerCase();
  console.log(system);

  switch (system) {
    case 'xbox':
      // Scrape Xbox
      // Create Game Objects
      // Call getDetails
    case 'ps4':

    case 'switch':

    case 'wii u':

    case '3ds':

    default:
      rl.question('Invalid input, please try again: ', (input) => {
        listBestsellers(input);
      });
  }
};

call();





