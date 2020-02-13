var Schema = require('mongoose').Schema;
var db = require('../config/db');

var MemberAndKey = db.model('memberandkey', {
    member: String,
    door: String
});

module.exports = MemberAndKey;

