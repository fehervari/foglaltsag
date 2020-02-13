var requireOption = require('../common').requireOption;

/**
 * Delete doorandkey object
 * returt /login/doorandkey
 */

module.exports = function (objectrepository) {

    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {

        if (typeof res.tpl.doorandkey === 'undefined') {
        console.log("ID: " + res.tpl.doorandkey._id);
        console.log("ajjaj");
        return next();
    }

        console.log("Törölve: " + res.tpl.doorandkey.place);
        res.tpl.doorandkey.remove(next);
        //return next();
    };
};
