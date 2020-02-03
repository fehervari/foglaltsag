var requireOption = require('../common').requireOption;

/**
 * Get doorandkey object or objects
 * returt /login/doorsandkeys
 */

module.exports = function (objectrepository) {

    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {


        doorandkeyModel.findOne({_id: req.query.id}).exec(function (err, doorsandkeys) {
            if ((err) || (!doorsandkeys)) {
                return res.redirect('/');
            }
            console.log(doorsandkeys);
            res.tpl.doorsandkeys = doorsandkeys;
            return next();
        });
    };
};

