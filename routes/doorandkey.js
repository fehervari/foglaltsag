var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var getDoorAndKeyMW = require('../middleware/doorandkey/getDoorAndKeyMW');
var delDoorAndKeyMW = require('../middleware/doorandkey/delDoorAndKeyMW');
var updateDoorAndKeyMW = require('../middleware/doorandkey/updateDoorAndKeyMW');

var getDoorAndKeyOneMW = require('../middleware/doorandkey/getDoorAndKeyOneMW');


var userModel = require('../models/user');
var getUserModelMW = require('../middleware/user/getUserById');
var doorandkeyModel = require('../models/doorandkey');

module.exports = function (app) {

    var objectRepository = {
        doorandkeyModel: doorandkeyModel,
        userModel: userModel

    };

    app.use('/logined/doorandkey/edit',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getDoorAndKeyOneMW(objectRepository),
        updateDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, './logined/doorandkeyedit2')
    );

    app.use('/logined/doorandkey/add',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        updateDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, './logined/doorandkeyedit')
    );


    app.use('/logined/doorandkey/del',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getDoorAndKeyOneMW(objectRepository),
        delDoorAndKeyMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/logined/doorandkey');
        }
    );

    app.use('/doorandkey',
        getDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, 'doorandkey')
    );

    app.use('/logined/doorandkey',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, './logined/doorandkey')
    );
};
