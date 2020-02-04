var requireOption = require('../common').requireOption;

/**
 * Update timelock object or create
 * return /login/timelock
 */

module.exports = function (objectrepository) {

    var userandkeyModel = requireOption(objectrepository, 'userandkeyModel');

    return function (req, res, next) {

        if (typeof req.body['user'] === 'undefined') {
            return next();
        }

        var k = new userandkeyModel();

        if ( typeof res.tpl['userandkey'] !== 'undefined' ) {
            k = res.tpl.userandkey;
        }

        k.user = req.body['user'];
        k.door = req.body['door'];
        console.log("\n\n");
        console.log(k);
        k.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log("Felvéve: " + k.user);
            res.tpl.userandkey = k;

            res.redirect('/logins/usersandkeys');
            //return next();
        });
    };
};
