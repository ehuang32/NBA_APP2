//Controller for Players

const mongoose = require('mongoose');
const player = mongoose.model('player');

/*
ENDPOINTS:
getPlayer
*/

//GET REQUESTS
//------------------------------------------------------------------------------
//Retrieve player information given player ID
// NOT TESTED
const getPlayer = (req, res) => {
    player.find((err, player) => {
        if(!err) {
            res.send(player);
        } else {
            res.send(err);
        }
        }
    });
};