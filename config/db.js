var mongoose = require('mongoose');
var settings = require('../config/conf.json')
var db = 'mongodb://localhost/kulcsokesajtok';

mongoose.connect(db,  {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err)
        console.error(err);
    else
        (settings.confs.debug_level >= 10) ? console.log("Connected to the mongodb"): null ;
});

module.exports = mongoose;