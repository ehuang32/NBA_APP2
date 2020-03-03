// Routes for Players

const express = require('express');
const playerRouter = express.Router();
const playerController = require('../controllers/playerController');

//Retrieve player information given player ID
//Gets playerID from params
playerRouter.get('https://api-nab-v1.p.rapidapi.com/players/playerId/126', playerController.getPlayer);

module.exports = playerRouter;