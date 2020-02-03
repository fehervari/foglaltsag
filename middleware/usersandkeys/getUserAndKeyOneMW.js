var requireOption = require('../common').requireOption;


module.exports = function (objectrepository) {

    var userandkeyModel = requireOption(objectrepository, 'userandkeyModel');

    return function (req, res, next) {

        userandkeyModel.findOne({_id: req.query.id}).exec(function (err, userandkey) {
            if ((err) || (!userandkey)) {
                return res.redirect('/');
            }
            console.log(userandkey);
            res.tpl.userandkey = userandkey;
            return next();
        });

    };

};
