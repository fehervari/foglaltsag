var requireOption = require('../common').requireOption;
/**
 * Ez kérdezi le a usert, hogy van-e.
 * @param objectrepository
 * @returns {Function}
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {


        userModel.findOne({_id: req.query.id}).exec(function (err, user) {
            if ((err) || (!user)) {
                return res.redirect('/');
            }
            console.log(user);
            res.tpl.users = user;
        });
    };
};
