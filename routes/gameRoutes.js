// Routes for Games

const express = require('express');
const gameRouter = express.Router();
const gameController = require('../controllers/gameController');

//Retrieve game information given game ID
//Gets gameID from params
gameRouter.get('https://api-nab-v1.p.rapidapi.com/games/gameId/6222', gameController.getGame);

module.exports = gameRouter;