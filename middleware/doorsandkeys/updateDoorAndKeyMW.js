var requireOption = require('../common').requireOption;

/**
 * Update doorandkey object or create
 * return /login/doorsandkeys
 */

module.exports = function (objectrepository) {

    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {

        if (typeof req.body['place'] === 'undefined') {
            return next();
        }

        var k = new doorandkeyModel();

        if (typeof res.tpl['doorsandkeys'] != 'undefined') {
            k = res.tpl.doorsandkeys;
        }

        k.place = req.body['place'];
        k.door = req.body['door'];
        k.keynum = req.body['keynum'];
        console.log("\n\n");
        console.log(k);
        k.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log("Felvéve: " + k.place);
            res.tpl.doorsandkeys = k;

            res.redirect('/logins/doorsandkeys');
            return next();
        });
    };
};
