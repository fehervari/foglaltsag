/**
 * If the user is logged in, redirects to /login/
 */

var log = require('loglevel');


module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof req.session.userid !== 'undefined') {
            log.debug("Jártam itt.");
            return res.redirect('/logined');
        }
        return next();
    };

};
