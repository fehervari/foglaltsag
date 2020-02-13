var requireOption = require('../common').requireOption;

/**
 * Get doorandkey object or objects
 * returt /login/doorandkey
 */

module.exports = function (objectrepository) {

    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {


        doorandkeyModel.findOne({_id: req.query.id}).exec(function (err, doorandkey) {
            if ((err) || (!doorandkey)) {
                return res.redirect('/');
            }
            console.log(doorandkey);
            res.tpl.doorandkey = doorandkey;
            return next();
        });
    };
};

