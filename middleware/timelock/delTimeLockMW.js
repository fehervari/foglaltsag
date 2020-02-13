var requireOption = require('../common').requireOption;

/**
 * Delete the timelock object
 * return /login/timelock
 */

module.exports = function (objectrepository) {


    return function (req, res, next) {
        if (typeof res.tpl.timelock === 'undefined') {
            console.log("ID: " + res.tpl.timelock._id);
            console.log("ajjaj");
            return next();
        }

        console.log("Törölve: " + res.tpl.timelock.member);
        res.tpl.timelock.remove(next);
        //return next();
    };

};
