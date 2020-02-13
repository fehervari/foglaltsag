var Schema = require('mongoose').Schema;
var db = require('../config/db');

var TimeLock = db.model('timelock', {
    member: String,
    place: String,
    timestart: String,
    timeend: String,
    event: String
});

module.exports = TimeLock;

