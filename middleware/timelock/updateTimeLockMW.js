var requireOption = require('../common').requireOption;
var log = require('loglevel');


module.exports = function (objectrepository) {

    var timelockModel = requireOption(objectrepository, 'timelockModel');
    var memberModel = requireOption(objectrepository, 'memberModel');
    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');
    
    return function (req, res, next) {

        if (typeof req.body['member'] === 'undefined') {
            //log.debug("Undefined volt a member a timelockban");
            return next();
        }
        //log.debug(req.body['member']);
        var k = new timelockModel();

 

        if (typeof res.tpl['timelock'] !== 'undefined') {
            k = res.tpl.timelock;
        }

        k.member = req.body['member'];
        k.place = req.body['place'];
        k.timestart = req.body['timestart'];
        k.timeend = req.body['timestop'];
        k.event = req.body['event'];
        console.log("\n\n");
        console.log(k);



        memberModel.findOne({name: k.member}).exec(function (err, member) {
            if ((err) || (!member)) {
                console.log("nincs member");
                res.tpl.error.push('Nincs ilyen felhasználó a rendszerben!');
                return next();
            }
            else {
                doorandkeyModel.findOne({place: k.place}).exec(function (err, place) {
                    if ((err) || (!place)) {
                        console.log("nincs place");
                        res.tpl.error.push('Nincs ilyen helyszín a rendszerben!');
                        return next();
                    }
                    else {
                        k.save(function (err) {
                            if (err) {
                                return next(err);
                            }
                            console.log("Felvéve: " + k.member);
                            res.tpl.timelock = k;
                
                            res.redirect('/logined/timelock');
                            //return next();
                        });
                    }
                });
            }
        });


        
/*
        memberModel.findOne({name: k.member}).exec(function (err, member) {
            if ((err) || (!member)) {
                res.tpl.timelock = k;
                res.tpl.error.push('Nincs ilyen felhasználó a rendszerben!');
                return next();
            }
            else{
                //console.log(member);
                k.save(function (err) {
                    if (err) {
                        return next(err);
                    }
                    console.log("Felvéve: " + k.member);
                    res.tpl.timelock = k;
        
                    res.redirect('/logined/timelock');
                    //return next();
                });
            }
        });*/
    };
};

