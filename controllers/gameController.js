//Controller for Games

const mongoose = require('mongoose');
const game = mongoose.model('game');

/*
ENDPOINTS:
getGame
*/

//GET REQUESTS
//------------------------------------------------------------------------------
//Retrieve game information given game ID
// NOT TESTED
const getGame = (req, res) => {
    game.find((err, game) => {
        if(!err) {
            res.send(game);
        } else {
            res.send(err);
        }
        }
    });
};