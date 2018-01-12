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

const clearGames = () => {
  allGames = [];
};

module.exports = {
  allGames,
  createGame,
  clearGames
}