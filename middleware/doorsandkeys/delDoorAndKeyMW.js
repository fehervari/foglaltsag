var requireOption = require('../common').requireOption;

/**
 * Delete doorandkey object
 * returt /login/doorsandkeys
 */

module.exports = function (objectrepository) {

    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {

        if (typeof res.tpl.doorsandkeys === 'undefined') {
        console.log("ID: " + res.tpl.doorsandkeys._id);
        console.log("ajjaj");
        return next();
    }

        console.log("Törölve: " + res.tpl.doorsandkeys.place);
        res.tpl.doorsandkeys.remove(next);
        return next();
    };
};
