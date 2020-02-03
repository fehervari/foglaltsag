var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var getUserAndkeyMW = require('../middleware/usersandkeys/getUserAndKeyMW');
var getUserAndkeyOneMW = require('../middleware/usersandkeys/getUserAndKeyOneMW');
var delUserAndKeyMW = require('../middleware/usersandkeys/delUserAndKeyMW');
var updateUserAndKeyMW = require('../middleware/usersandkeys/updateUserAndKeyMW');


var getDoorAndKeyMW = require('../middleware/doorsandkeys/getDoorAndKeyMW');
var getUserMW = require('../middleware/users/getUserMW');
var userModel = require('../models/user');

var doorandkeyModel = require('../models/doorsandkeys');
var userandkeyModel = require('../models/usersandkeys');
var userloginModel = require('../models/userlogin');

module.exports = function (app) {

    var objectRepository = {
        userandkeyModel: userandkeyModel,
        userloginModel: userloginModel,
        doorandkeyModel: doorandkeyModel,
        userModel: userModel
    };


    app.use('/logins/usersandkeys/add',
        authMW(objectRepository),
        getUserMW(objectRepository),
        getDoorAndKeyMW(objectRepository),
        updateUserAndKeyMW(objectRepository),
        renderMW(objectRepository, './logins/usersandkeyedit')
    );


    app.use('/logins/usersandkeys/del',
        authMW(objectRepository),
        getUserAndkeyOneMW(objectRepository),
        delUserAndKeyMW(objectRepository),
        function (req, res, next) {
            return res.redirect('./logins/usersandkeys');
        }
    );

    app.use('/usersandkeys',
        getUserAndkeyMW(objectRepository),
        renderMW(objectRepository, 'usersandkeys')
    );


    app.use('/logins/usersandkeys',
        authMW(objectRepository),
        getUserAndkeyMW(objectRepository),
        renderMW(objectRepository, './logins/usersandkeys')
    );
};
