var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kulcsokesajtok');

module.exports = mongoose;