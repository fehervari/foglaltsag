var express = require('express');
var app = express();
//app.use(express.static('static'));
var session = require('express-session');


app.set('view engine', 'ejs');
//app.use(express.static('static'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];
    //console.log("tpl létrehozva");
    return next();
});

app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 60000000
    },
    resave: true,
    saveUninitialized: false
}));

require('./routes/usersandkeys')(app);
require('./routes/users')(app);
require('./routes/doorsandkeys')(app);
require('./routes/timelock')(app);

require('./routes/inside')(app);

require('./routes/outside')(app);



app.use(function (err, req, res, next) {
    //Flush out the stack to the console
    console.error(err.stack);
    res.end('Check console.log');
});

var server = app.listen(3000, function () {
    console.log("A szerver elindult");
    console.log("A port: 3000");
});
