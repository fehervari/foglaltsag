var mainRedirectMW = require('../middleware/generic/mainredirectMW');

var inverseAuthMW = require('../middleware/generic/inverseAuthMW');
//var checkUserLoginMW = require('../middleware/generic/checkUserLogin');
var renderMW = require('../middleware/generic/renderMW');
var authMW = require('../middleware/generic/authMW');
var logoutMW = require('../middleware/generic/logoutMW');
var sessionMW = require('../middleware/generic/getSessionIdMW');


var userModel = require('../models/user');

var getUserModelMW = require('../middleware/user/getUserById');

var log = require('loglevel');


module.exports = function (app) {

    var objectRepository = {
        userModel: userModel
    };

    /**
     * Main page
     */

    app.use('/logined/sum',
        authMW(objectRepository),
        renderMW(objectRepository, './logined/sum')
    );

    app.use('/logined/index',
        authMW(objectRepository),
        sessionMW(objectRepository),
        getUserModelMW(objectRepository),
        renderMW(objectRepository, './logined/index'),
        );

    /**
     * Sum page
     */

    /**
     * Main page
     */
    app.get('/logined/logout',
        logoutMW(objectRepository),
        function(req, res, next) {
            res.redirect('/');
        }
    );
/*
    app.use('/logined/index',
        authMW(objectRepository),
        renderMW(objectRepository, 'logined/index')

    );*/

    app.use('/logined',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        mainRedirectMW(objectRepository)
    );


};
