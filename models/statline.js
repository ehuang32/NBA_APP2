// Schema for a player's Statline

var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statlineSchema = mongoose.Schema({
    'api': {
        'status': Number,
        'message': String,
        'results': Number,
        'filters': [String],
        'statistics': [Object]
    }
})

mongoose.model('statline', statlineSchema);