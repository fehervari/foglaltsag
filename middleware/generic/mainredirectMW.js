/**
 * This middleware has one purpose, when the user visits the /login/ page,
 * should be redirected to
 *    - /login.html when not signed in
 *    - /logins/ when signed in
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {

        if (typeof req.session.userid === 'undefined') {
            console.log(req.session.userid);
            return res.redirect('/index');
        } else {
            console.log(req.session.userid);
            return res.redirect('/logins/index');
        }
    };
};

