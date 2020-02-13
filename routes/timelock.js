var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var delTimeLockMW = require('../middleware/timelock/delTimeLockMW');
var updateTimeLockMW = require('../middleware/timelock/updateTimeLockMW');


var getTimeLockMW = require('../middleware/timelock/getTimeLockMW');

var getTimeLockOneMW = require('../middleware/timelock/getTimeLockOneMW');


var getDoorAndKeyMW = require('../middleware/doorandkey/getDoorAndKeyMW');
var getMemberMW = require('../middleware/member/getMemberMW');


var timelockModel = require('../models/timelock');
var userModel = require('../models/user');
var getUserModelMW = require('../middleware/user/getUserById');


var doorandkeyModel = require('../models/doorandkey');
var memberModel = require('../models/member');
var errorModel = require('../models/member');


module.exports = function (app) {

    var objectRepository = {
        timelockModel: timelockModel,
        userModel: userModel,
        doorandkeyModel: doorandkeyModel,
        memberModel: memberModel,
        errorModel: errorModel


    };

    app.use('/logined/timelock/add',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getDoorAndKeyMW(objectRepository),
        getMemberMW(objectRepository),
        updateTimeLockMW(objectRepository),
        renderMW(objectRepository, './logined/timelockedit')
    );

    app.use('/logined/timelock/edit',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getDoorAndKeyMW(objectRepository),
        getMemberMW(objectRepository),
        getTimeLockOneMW(objectRepository),
        updateTimeLockMW(objectRepository),
        renderMW(objectRepository, './logined/timelockedit2')
    );

    app.use('/logined/timelock/del',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getTimeLockOneMW(objectRepository),
        delTimeLockMW(objectRepository),
        function (req, res, next) {
            return res.redirect('./logined/timelock');
        }
    );

    app.use('/timelock',
        getTimeLockMW(objectRepository),
        renderMW(objectRepository, 'timelock')
    );

    app.use('/logined/timelock',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getTimeLockMW(objectRepository),
        renderMW(objectRepository, './logined/timelock')
    );
};
