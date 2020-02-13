var requireOption = require('../common').requireOption;

/**
 * Delete the user object
 * return /login/
 */

module.exports = function (objectrepository) {

    var memberModel = requireOption(objectrepository, 'memberModel');

    return function (req, res, next) {
        if (typeof res.tpl.member === 'undefined') {
            console.log("ID: " + res.tpl.member._id);
            console.log("ajjaj");
            return next();
        }

        console.log("Törölve: " + res.tpl.member.name);
        res.tpl.member.remove(next);
    };
};
