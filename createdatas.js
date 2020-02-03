

var userloginModel = require('./models/userlogin');
var doorandkeyModel = require('./models/doorsandkeys');
var timelockModel = require('./models/timelocks');
var userModel = require('./models/user');
var userandkeyModel = require('./models/usersandkeys');

var one = new doorandkeyModel();
one.place="Ebédlő";
one.door="Ebédlőajtó";
one.keynum = "11";
one.save();

var two = new userModel();
two.name="Jani";
two.email="jani@me.me";
two.phone = "061111222";
two.save();


var three = new userandkeyModel();
three.user="Jani";
three.dooranduser="Ebédlő";
three.save();

var four = new timelockModel();
four.user ="Jani";
four.place="Ebédlő";
four.timestart = "11h";
four.timeend = "16h";
four.event = "Buli";
four.save();

var User = new userloginModel();
User.name = "asd";
User.email = "asd@asd.asd";
User.password = "asd";
User.save();
