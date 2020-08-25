const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.server.use(express.json());
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;