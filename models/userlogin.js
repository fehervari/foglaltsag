var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Userlogin = db.model('userlogin', {
  name: String,
  email: String,
  password: String,
  level: Number
});

module.exports = Userlogin;
