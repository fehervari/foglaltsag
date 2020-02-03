var Schema = require('mongoose').Schema;
var db = require('../config/db');

var DoorsAndKeys = db.model('doorsandkeys', {
    place: String,
    door: String,
    keynum: String
});

module.exports = DoorsAndKeys;

