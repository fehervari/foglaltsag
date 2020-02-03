var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Userlogin = db.model('Userlogin', {
  name: String,
  email: String,
  password: String,
});

module.exports = Userlogin;
