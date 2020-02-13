var requireOption = require('../common').requireOption;

/**
 * Get timelock object or objects
 * return /login/timelock
 */

module.exports = function (objectrepository) {

    var timelockModel = requireOption(objectrepository, 'timelockModel');

    return function (req, res, next) {

        timelockModel.find({}).exec(function (err, result) {
            if (err) {
                console.log("\n\n\n\ajjaj");

                return next(err);
            }
            res.tpl.timelock = result;
            return next();
        });
    };
};
