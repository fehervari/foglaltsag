/**
 * This middleware has one purpose, when the user visits the /login/ page,
 * should be redirected to
 *    - /login.html when not signed in
 *    - /logins/ when signed in
 */
var log = require('loglevel');



module.exports = function (objectrepository) {

    return function (req, res, next) {

        if (typeof req.session.userid === 'undefined') {
            log.debug(req.session.userid + " No userId, because not logged in!");
            return res.redirect('/index');
        } else {
            log.debug("Logged in UserId: " + req.session.userid);
            return res.redirect('/logined/index');
        }
    };
};

