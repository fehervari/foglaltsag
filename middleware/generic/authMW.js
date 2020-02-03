/**
 * If the user is not logged in, redirects to /login.html
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof req.session.userid === 'undefined') {
            return res.redirect('/nologin');
        }
        return next();
    };
};