var requireOption = require('../common').requireOption;

/**
 * Létrehoz vagy módosít
 * ha nincs létrehoz, ha van módosít
 * ha sikeres, akkor átirányít a users-re
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        if (typeof req.body['name'] === 'undefined') {
            return next();
        }

        var k = new userModel();

        if (typeof res.tpl['users'] !== 'undefined') {
            k = res.tpl.users;
        }

        k.name = req.body['name'];
        k.phone = req.body['phone'];
        k.email = req.body['email'];
        console.log("\n\n");
        console.log(k);
        k.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log("Felvéve: " + k.name);
            res.tpl.users = k;

            res.redirect('/logins/users');

        });
    };
};

