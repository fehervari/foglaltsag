var mongoose = require('mongoose');

var db = 'mongodb://localhost/kulcsokesajtok';

mongoose.connect(db,  {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

module.exports = mongoose;