var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Users = db.model('users', {
    name: String,
    phone: String,
    email: String
});

module.exports = Users;

