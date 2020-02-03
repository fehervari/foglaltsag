var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var getUserMW = require('../middleware/users/getUserMW');
var getUserOneMW = require('../middleware/users/getUserOne');
var delUserMW = require('../middleware/users/delUserMW');
var updateUserMW = require('../middleware/users/updateUserMW');




var userModel = require('../models/user');
var userloginModel = require('../models/userlogin');
var doorandkeyModel = require('../models/doorsandkeys');


module.exports = function (app) {

    var objectRepository = {
        userModel: userModel,
        userloginModel: userloginModel

    };

    app.use('/logins/users/add',
        authMW(objectRepository),
        updateUserMW(objectRepository),
        renderMW(objectRepository, './logins/usersedit')

    );

    app.use('/logins/users/edit',
        authMW(objectRepository),
        getUserOneMW(objectRepository),
        updateUserMW(objectRepository),
        renderMW(objectRepository, './logins/usersedit2'),
        function (req, res, next) {
            res.redirect('/logins/users');
        }
    );

    app.use('/logins/user/del',
        authMW(objectRepository),
        getUserOneMW(objectRepository),
        delUserMW(objectRepository),
        function (req, res, next) {
            res.redirect('/logins/users');
        }
    );

    app.use('/logins/users',
        authMW(objectRepository),
        getUserMW(objectRepository),
        renderMW(objectRepository, './logins/users')
    );

    app.use('/users',
        getUserMW(objectRepository),
        renderMW(objectRepository, 'users')
    );
};
