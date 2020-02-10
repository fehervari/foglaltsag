var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var delTimeLockMW = require('../middleware/timelock/delTimeLockMW');
var updateTimeLockMW = require('../middleware/timelock/updateTimeLockMW');


var getTimeLockMW = require('../middleware/timelock/getTimeLockMW');

var getTimeLockOneMW = require('../middleware/timelock/getTimeLockOneMW');


var getDoorAndKeyMW = require('../middleware/doorsandkeys/getDoorAndKeyMW');
var getUserMW = require('../middleware/users/getUserMW');


var timelockModel = require('../models/timelocks');
var userloginModel = require('../models/userlogin');

var doorandkeyModel = require('../models/doorsandkeys');
var userModel = require('../models/user');


module.exports = function (app) {

    var objectRepository = {
        timelockModel: timelockModel,
        userloginModel: userloginModel,
        doorandkeyModel: doorandkeyModel,
        userModel: userModel


    };

    app.use('/logins/timelock/add',
        authMW(objectRepository),
        getDoorAndKeyMW(objectRepository),
        getUserMW(objectRepository),
        updateTimeLockMW(objectRepository),
        renderMW(objectRepository, './logins/timelockedit')
    );

    app.use('/logins/timelock/edit',
        authMW(objectRepository),
        getTimeLockOneMW(objectRepository),
        updateTimeLockMW(objectRepository),
        renderMW(objectRepository, './logins/timelockedit2')
    );

    app.use('/logins/timelock/del',
        authMW(objectRepository),
        getTimeLockOneMW(objectRepository),
        delTimeLockMW(objectRepository),
        function (req, res, next) {
            return res.redirect('./logins/timelock');
        }
    );

    app.use('/timelock',
        getTimeLockMW(objectRepository),
        renderMW(objectRepository, 'timelock')
    );

    app.use('/logins/timelock',
        authMW(objectRepository),
        getTimeLockMW(objectRepository),
        renderMW(objectRepository, './logins/timelock')
    );
};
