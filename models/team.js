// Schema for a Team

var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = mongoose.Schema({
    "api": {
        "status": Number,
        "message": String,
        "results": Number,
        "filters": [String],
        "teams": [{
            "city": String,
            "fullName": String,
            "teamId": String,
            "nickname": String,
            "logo": String,
            "shortName": String,
            "allStar": String,
            "nbaFranchise": String,
            "leagues": {
                "standard": {
                    "confName": String,
                    "divName": String
                },
                "vegas": {
                    "confName": String,
                    "divName": String
                },
                "utah": {
                    "confName": String,
                    "divName" String
                }
            }
        }]
    }
})

mongoose.model('team', teamSchema);