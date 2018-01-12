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
    case 'xbox one':
      // Scrape Xbox
      // Create Game Objects
      // List Game objects
      // Call getDetails
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/xbox-one?nav=28-xu0,131e0-ffff2418", () => {
        console.log("Current Xbox One Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });
      });
      
      break;
    case 'ps4':
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/playstation-4?nav=28-xu0,131dc-ffff2418", () => {
        console.log("Current PS4 Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });
      });
      
      break;
    case 'switch':
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/nintendo-switch?nav=28-xu0,13ffff2418-1e8", () => {
        console.log("Current Nintendo Switch Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });
      });

      break;
    case 'wii u':
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/nintendo-wii-u?nav=131b0-ffff2418", () => {
        console.log("Current Wii U Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });
      });
      
      break;
    case '3ds':
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/nintendo-3ds?nav=131a2-ffff2418", () => {
        console.log("Current Nintendo 3DS Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });
      });
      
      break;
    default:
      rl.question('Invalid input, please try again: ', (input) => {
        listBestsellers(input);
      });
  }
};

call();





