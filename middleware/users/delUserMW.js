var requireOption = require('../common').requireOption;

/**
 * Delete the user object
 * return /login/
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if (typeof res.tpl.users === 'undefined') {
            console.log("ID: " + res.tpl.users._id);
            console.log("ajjaj");
            return next();
        }

        console.log("Törölve: " + res.tpl.users.name);
        res.tpl.users.remove(next);
    };
};
