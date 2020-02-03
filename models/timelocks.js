var Schema = require('mongoose').Schema;
var db = require('../config/db');

var TimeLocks = db.model('timelocks', {
    user: String,
    place: String,
    timestart: String,
    timeend: String,
    event: String
});

module.exports = TimeLocks;

