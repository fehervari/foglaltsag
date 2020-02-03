var requireOption = require('../common').requireOption;

/**
 * Get timelock object or objects
 * return /login/timelock
 */

module.exports = function (objectrepository) {

    var timelockModel = requireOption(objectrepository, 'timelockModel');

    return function (req, res, next) {

        timelockModel.findOne({_id: req.query.id}).exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/');
            }
            console.log(result);
            res.tpl.timelocks = result;
            return next();
        });
    };
};
