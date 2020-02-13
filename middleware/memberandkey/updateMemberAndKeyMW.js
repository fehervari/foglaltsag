var requireOption = require('../common').requireOption;

/**
 * Update timelock object or create
 * return /login/timelock
 */

module.exports = function (objectrepository) {

    var memberandkeyModel = requireOption(objectrepository, 'memberandkeyModel');
    var memberModel = requireOption(objectrepository, 'memberModel');
    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {

        if (typeof req.body['member'] === 'undefined') {
            return next();
        }

        var k = new memberandkeyModel();

        if ( typeof res.tpl['memberandkey'] !== 'undefined' ) {
            k = res.tpl.memberandkey;
        }

        k.member = req.body['member'];
        k.door = req.body['door'];
        console.log("\n\n");
        console.log(k);

        memberModel.findOne({name: k.member}).exec(function (err, member) {
            if ((err) || (!member)) {
                console.log("nincs member");
                res.tpl.error.push('Nincs ilyen felhasználó a rendszerben!');
                return next();
            }
            else {
                doorandkeyModel.findOne({door: k.door}).exec(function (err, door) {
                    if ((err) || (!door)) {
                        console.log("nincs door");
                        res.tpl.error.push('Nincs ilyen ajtó a rendszerben!');
                        return next();
                    }
                    else {
                        k.save(function (err) {
                            if (err) {
                                return next(err);
                            }
                            console.log("Felvéve: " + k.member);
                            res.tpl.memberandkey = k;
                            res.redirect('/logined/memberandkey');
                            //return next();
                        });
                    }
                });
            }
        });
    };
};
