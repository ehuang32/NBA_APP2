// Schema for a player

var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = mongoose.Schema({
    'api': {
        'status': Number,
        'message': String,
        'results': Number,
        'filters': [String],
        'players': [{
            'firstName': String,
            'lastName': String,
            'teamId': String,
            'yearsPro': String,
            'collegeName': String,
            'country': String,
            'playerId': String,
            'dateOfBirth': String,
            'affiliation': String,
            'startNba': String,
            'heightInMeters': String,
            'weightInKilograms': String,
            'leagues': {
                'standard': {
                    'jersey': String,
                    'active': String,
                    'pos': String
                }
            }
        }]
    }
})

mongoose.model('player', playerSchema);