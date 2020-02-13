var mainRedirectMW = require('../middleware/generic/mainredirectMW');

var inverseAuthMW = require('../middleware/generic/inverseAuthMW');
var checkUserLoginMW = require('../middleware/generic/checkUserLoginMW');
var renderMW = require('../middleware/generic/renderMW');
var logoutMW = require('../middleware/generic/logoutMW');
var sessionMW = require('../middleware/generic/getSessionIdMW');

var userModel = require('../models/user');


module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /**
     * Sum page
     */

    app.use('/sum',
        renderMW(objectRepository, 'sum')
    );

    /**
     * Login page
     */

    
    app.use('/nologin',
    renderMW(objectRepository, 'nologin')
    );
    
    /**
     * Main page
     */
    app.use('/logined/logout',
    logoutMW(objectRepository),
    function(req, res, next) {
        res.redirect('/index');
    }
    );
    
    app.use('/index',
    sessionMW(objectRepository),
    renderMW(objectRepository, 'index')
    );
    
    app.use('/login',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
    
    app.use('/',
    //renderMW(objectRepository, 'index'),
    mainRedirectMW(objectRepository)
    );
};
