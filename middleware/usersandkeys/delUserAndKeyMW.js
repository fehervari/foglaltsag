var requireOption = require('../common').requireOption;



module.exports = function (objectrepository) {


    return function (req, res, next) {

        if (typeof res.tpl.userandkey === 'undefined') {
            console.log("ID: " + res.tpl.userandkey._id);
            return next();
        }

        console.log("Törölve: " + res.tpl.userandkey.user);
        res.tpl.userandkey.remove(next);
        //return next();
    };

};
