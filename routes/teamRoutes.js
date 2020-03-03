// Routes for Teams

const express = require('express');
const teamRouter = express.Router();
const teamController = require('../controllers/teamController.js');

// Retrieve Team given Team Id
// Gets TeamId from params
teamRouter.get('https://api-nba-v1.p.rapidapi.com/teams/teamId/17', teamController.getTeam);

module.exports = teamRouter;