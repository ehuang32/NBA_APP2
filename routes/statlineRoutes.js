// Routes for Statlines

const express = require('express');
const statlineRouter = express.Router();
const statlineController = require('../controllers/statlineController.js');

// Retrieve latest Statline given player ID
// Gets playerID from params
statlineRouter.get('https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/126', statlineController.getStatline);

module.exports = statlineRouter;