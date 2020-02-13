var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Member = db.model('member', {
    name: String,
    phone: String,
    email: String
});

module.exports = Member;

