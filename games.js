class Game {
  constructor(title, price, publisher, url) {
    this.title = title;
    this.price = price;
    this.publisher = publisher;
    this.url = url;
  }
};

var allGames = [];

const createGame = (title, price, publisher, url) => {
  const game = new Game(title, price, publisher, url);
  allGames.push(game);
};

const listGames = () => {
  return allGames;
}

const clearGames = () => {
  allGames = [];
};

module.exports = {
  listGames,
  createGame,
  clearGames
}