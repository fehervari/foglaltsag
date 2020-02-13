var requireOption = require('../common').requireOption;

/**
 * Update doorandkey object or create
 * return /login/doorandkey
 */

module.exports = function (objectrepository) {

    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {

        if (typeof req.body['place'] === 'undefined') {
            return next();
        }

        var k = new doorandkeyModel();

        if (typeof res.tpl['doorandkey'] != 'undefined') {
            k = res.tpl.doorandkey;
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
            else {
            console.log("Felvéve: " + k.place);
            res.tpl.doorandkey = k;

            res.redirect('/logined/doorandkey');
            //return next();
            }
        });
    };
};
