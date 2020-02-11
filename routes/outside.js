var mainRedirectMW = require('../middleware/generic/mainredirectMW');

var inverseAuthMW = require('../middleware/generic/inverseAuthMW');
var checkUserLoginMW = require('../middleware/generic/checkUserLoginMW');
var renderMW = require('../middleware/generic/renderMW');
var logoutMW = require('../middleware/generic/logoutMW');

var userloginModel = require('../models/userlogin');


module.exports = function (app) {

    var objectRepository = {
        userloginModel: userloginModel
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
    app.use('/logins/logout',
    logoutMW(objectRepository),
    function(req, res, next) {
        res.redirect('/index');
    }
    );
    
    app.use('/index',
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
