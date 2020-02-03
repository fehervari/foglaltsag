var requireOption = require('../common').requireOption;

/**
 * Get doorandkey object or objects
 * returt /login/doorsandkeys
 */

module.exports = function (objectrepository) {

    var doorandkeyModel = requireOption(objectrepository, 'doorandkeyModel');

    return function (req, res, next) {
        /*
        res.tpl.doorsandkeys = [
            {
                _id: '13524354354253',
                place: 'udvar',
                door: 'első',
                keynum: '23'
            },
            {
                _id: '13524354354254',
                place: 'konyha',
                door: 'konyha',
                keynum: '12'
            }
        ];
        return next();
        */

        doorandkeyModel.find({}).sort('door').exec(function (err, result) {
            if (err) {
                return next(err);
            }

            res.tpl.doorsandkeys = result;
            return next();
        });
    };
};
