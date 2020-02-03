var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var timelockModel = requireOption(objectrepository, 'timelockModel');

    return function (req, res, next) {

        if (typeof req.body['user'] === 'undefined') {
            return next();
        }

        var k = new timelockModel();

        if (typeof res.tpl['timelocks'] !== 'undefined') {
            k = res.tpl.timelocks;
        }

        k.user = req.body['user'];
        k.place = req.body['place'];
        k.timestart = req.body['timestart'];
        k.timeend = req.body['timestop'];
        k.event = req.body['event'];
        console.log("\n\n");
        console.log(k);
        k.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log("Felvéve: " + k.user);
            res.tpl.timelocks = k;

            res.redirect('/logins/timelock');
            return next();
        });
    };
};

