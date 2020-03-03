// Schema for a game, doesn't have format yet

var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = mongoose.Schema({
    'api': {
        'status': Number,
        'message': String,
        'results': Number,
        'filters': [String],
        'games': [{
            'seasonYear': String,
            'league': String,
            'gameId': String,
            'startTimeUTC': String,
            'endTimeUTC': String,
            'arena': String,
            'city': String,
            'country': String,
            'clock': String,
            'gameDuration': String,
            'currentPeriod': String,
            'halftime': String,
            'EndOfPeriod': String,
            'seasonStage': String,
            'statusShortGame': String,
            'statusGame': String,
            'vTeam': {
                'teamId': String,
                'shortName': String,
                'fullName': String,
                'nickName': String,
                'logo': String,
                'score': {
                    'points': String
                }
            },
            'hTeam': {
                'teamId': String,
                'shortName': String,
                'fullName': String,
                'nickName': String,
                'logo': String,
                'score': {
                    'points': String
                }
            }
        }]
    }
})

mongoose.model('game', gameSchema);