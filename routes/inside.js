var mainRedirectMW = require('../middleware/generic/mainredirectMW');

var inverseAuthMW = require('../middleware/generic/inverseAuthMW');
//var checkUserLoginMW = require('../middleware/generic/checkUserLogin');
var renderMW = require('../middleware/generic/renderMW');
var authMW = require('../middleware/generic/authMW');
var logoutMW = require('../middleware/generic/logoutMW');
var userloginModel = require('../models/userlogin');

module.exports = function (app) {

    var objectRepository = {
        userloginModel: userloginModel
    };

    /**
     * Main page
     */

    app.use('/logins/sum',
        authMW(objectRepository),
        renderMW(objectRepository, './logins/sum')
    );

    app.use('/logins/index',
        authMW(objectRepository),
        renderMW(objectRepository, './logins/index')
    );

    /**
     * Sum page
     */

    /**
     * Main page
     */
    app.get('/logins/logout',
        logoutMW(objectRepository),
        function(req, res, next) {
            res.redirect('/');
        }
    );

    app.use('/logins/index',
        authMW(objectRepository),
        renderMW(objectRepository, 'logins/index')

    );

    app.use('/logins',
        authMW(objectRepository),
        mainRedirectMW(objectRepository)
    );


};
