var requireOption = require('../common').requireOption;

/**
 * Delete the timelock object
 * return /login/timelock
 */

module.exports = function (objectrepository) {


    return function (req, res, next) {
        if (typeof res.tpl.timelocks === 'undefined') {
            console.log("ID: " + res.tpl.timelocks._id);
            console.log("ajjaj");
            return next();
        }

        console.log("Törölve: " + res.tpl.timelocks.user);
        res.tpl.timelocks.remove(next);
        //return next();
    };

};
