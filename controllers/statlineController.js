// Controller for Statlines

const mongoose = require('mongoose');
const statline = mongoose.model('statline');

/*
ENDPOINTS:
getStatline
*/

//GET REQUESTS
//------------------------------------------------------------------------------
// Retrieve latest Statline given player ID (Tested as Anthony Davis')
// TESTED
const getStatline = (req, res) => {
    statline.find((err, statline) =>{
        if (!err) {
            res.send(statline);
        } else {
            res.send(err);
        }
        }
    });
};
