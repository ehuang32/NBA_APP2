// Controller for Teams

const mongoose = require('mongoose');
const team = mongoose.model('team');

/*
ENDPOINTS:
getTeam
*/

//GET REQUESTS
//------------------------------------------------------------------------------
// Retrieve Team given Team Id
// TESTED
const getTeam = (req, res) => {
    team.find((err, team) =>{
        if (!err) {
            res.send(team);
        } else {
            res.send(err);
        }
        }
    });
};
