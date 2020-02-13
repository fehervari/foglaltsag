var requireOption = require('../common').requireOption;



module.exports = function (objectrepository) {


    return function (req, res, next) {

        if (typeof res.tpl.memberandkey === 'undefined') {
            console.log("ID: " + res.tpl.memberandkey._id);
            return next();
        }

        console.log("Törölve: " + res.tpl.memberandkey.member);
        res.tpl.memberandkey.remove(next);
        //return next();
    };

};
