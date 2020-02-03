var requireOption = require('../common').requireOption;


module.exports = function (objectrepository) {

    var userandkeyModel = requireOption(objectrepository, 'userandkeyModel');

    return function (req, res, next) {
        /**
         *
         */

        userandkeyModel.find({}).exec(function (err, result) {
            if (err) {
                return next(err);
            }

            res.tpl.userandkey = result;
            return next();
        });

    };

};
