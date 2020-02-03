/**
 * If the user is logged in, redirects to /login/
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof req.session.userid !== 'undefined') {
            return res.redirect('/logins');
        }
        return next();
    };

};
