var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('user', {
  name: String,
  email: String,
  password: String,
  level: Number
  
});

module.exports = User;
