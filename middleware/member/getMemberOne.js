var requireOption = require('../common').requireOption;
/**
 * Ez kérdezi le a membert, hogy van-e.
 * @param objectrepository
 * @returns {Function}
 */

module.exports = function (objectrepository) {

    var memberModel = requireOption(objectrepository, 'memberModel');

    return function (req, res, next) {


        memberModel.findOne({_id: req.query.id}).exec(function (err, member) {
            if ((err) || (!member)) {
                return res.redirect('/');
            }
            console.log(member);
            res.tpl.member = member;
            return next();
        });
    };
};
