var Schema = require('mongoose').Schema;
var db = require('../config/db');

var UsersAndKeys = db.model('usersandkeys', {
    user: String,
    door: String
});

module.exports = UsersAndKeys;

