var Schema = require('mongoose').Schema;
var db = require('../config/db');

var DoorAndKey = db.model('doorandkey', {
    place: String,
    door: String,
    keynum: String
});

module.exports = DoorAndKey;

