var requireOption = require('../common').requireOption;
/**
 * Ez kérdezi le a usert, hogy van-e.
 * @param objectrepository
 * @returns {Function}
 */

module.exports = function (objectrepository) {

    var memberModel = requireOption(objectrepository, 'memberModel');

    return function (req, res, next) {
        /**
         *
         */
    /*
        res.tpl.users = [
            {
                name: "sanyi",
                phone: "111",
                email: "sanyi@me.me"
            },
            {
                name: "bela",
                phone: "222",
                email: "bela@me.me"
            }
        ];
        return next();
*/
        /*
        //userModel.find({}).exec(function (err, result) {
            if (err) {
                return next(err);
            }

            res.tpl.users = null//result;
            return next();
        //});
        */


        //if (typeof req.query['id'] == 'undefined') {
            memberModel.find({}).sort('name').exec(function (err, result) {
                if (err) {
                    return next(err);
                }

                res.tpl.member = result;
                return next();
            });
        //}
    };
};
