var requireOption = require('../common').requireOption;

/**
 * Létrehoz vagy módosít
 * ha nincs létrehoz, ha van módosít
 * ha sikeres, akkor átirányít a member-re
 */
module.exports = function (objectrepository) {

    var memberModel = requireOption(objectrepository, 'memberModel');

    return function (req, res, next) {

        if (typeof req.body['name'] === 'undefined') {
            return next();
        }

        var k = new memberModel();

        if (typeof res.tpl['member'] !== 'undefined') {
            k = res.tpl.member;
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
            res.tpl.member = k;

            res.redirect('/logined/member');

        });
    };
};

