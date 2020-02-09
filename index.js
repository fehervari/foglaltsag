var express = require('express');
var app = express();
app.use(express.static('static'));
var session = require('express-session');

var settings = require("./config/conf.json");


var log = require('loglevel');

//log.disableAll()
//log.enableAll()
log.disableAll();

log.setLevel("debug") ;

log.trace("trace");
log.debug("debug");
log.info("info");
log.warn("warn");
log.error("error");

console.log("");
console.log("");

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

var server = app.listen(settings.confs.port, function () {
    console.log("A szerver elindult");
    console.log("A port: " + settings.confs.port);
    console.log()
});


'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
    ++alias;
  });
});