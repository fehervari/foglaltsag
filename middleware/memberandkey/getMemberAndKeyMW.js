var requireOption = require('../common').requireOption;


module.exports = function (objectrepository) {

    var memberandkeyModel = requireOption(objectrepository, 'memberandkeyModel');

    return function (req, res, next) {
        /**
         *
         */

        memberandkeyModel.find({}).exec(function (err, result) {
            if (err) {
                return next(err);
            }

            res.tpl.memberandkey = result;
            return next();
        });

    };

};
