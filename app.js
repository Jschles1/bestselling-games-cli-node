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

        getDetails();
      });
      break;
    case 'ps4':
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/playstation-4?nav=28-xu0,131dc-ffff2418", () => {
        console.log("Current PS4 Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });

        getDetails();
      });
      break;
    case 'switch': // Need to fix scraping
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/nintendo-switch?nav=28-xu0,13ffff2418-1e8", () => {
        console.log("Current Nintendo Switch Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });

        getDetails();
      });
      break;
    case 'wii u':
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/nintendo-wii-u?nav=131b0-ffff2418", () => {
        console.log("Current Wii U Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });

        getDetails();
      });
      break;
    case '3ds':
      games.clearGames();
      scraper.scrape("https://www.gamestop.com/browse/games/nintendo-3ds?nav=131a2-ffff2418", () => {
        console.log("Current Nintendo 3DS Bestsellers:");

        games.listGames().forEach((game, index) => {
          console.log(`${index + 1}. ${game.title}`);
        });

        getDetails();
      });
      break;
    default:
      rl.question('Invalid input, please try again: ', (input) => {
        listBestsellers(input);
      });
  }
};

const getDetails = () => {
  rl.question("Please enter the number of the game you want more details on:  ", (input) => {
    listDetails(input);
  });
};

const listDetails = (input) => {
  let req = parseInt(input);
  let game;
  if (req > 0 && req < 13) {
    game = games.listGames()[req - 1];
    console.log("*******************************************************************");
    console.log(`${game.title}:`);
    console.log(`Published by: ${game.publisher}`);
    console.log(`Current Price: ${game.price}`);
    console.log(`For more info, go to: ${game.url}`);
    console.log("*******************************************************************");

    decision();
  } else {
    rl.question('Invalid input, please try again: ', (input) => {
      listDetails(input);
    });
  }
};

const decision = () => {
  rl.question(`
    Type (1) if you would like to get details on another game from the list. \n
    Type (2) if you would like to choose another system's bestsellers to list. \n
    Type (3) if you would like to exit the program. \n
  `, (input) => {
    switch(input) {
      case "1":
        getDetails();
        break;
      case "2":
        getSystem();
        break;
      case "3":
        console.log("See you later!");
        rl.close();
        break;
      default:
        console.log('Invalid input, please try again:');
        decision();
    }
  });
};

call();





