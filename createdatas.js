

var userModel = require('./models/user');
var doorandkeyModel = require('./models/doorandkey');
var timelockModel = require('./models/timelock');
var memberModel = require('./models/member');
var memberandkeyModel = require('./models/memberandkey');

var one = new doorandkeyModel();
one.place="Ebédlő";
one.door="Ebédlőajtó";
one.keynum = "11";
one.save();

var two = new memberModel();
two.name="Jani";
two.email="jani@me.me";
two.phone = "061111222";
two.save();


var three = new memberandkeyModel();
three.member="Jani";
three.door="Ebédlő";
three.save();

var four = new timelockModel();
four.member ="Jani";
four.place="Ebédlő";
four.timestart = "11h";
four.timeend = "16h";
four.event = "Buli";
four.save();

var User = new userModel();
User.name = "asd";
User.email = "asd@asd.asd";
User.password = "asd";
User.level = "1";
User.save();

