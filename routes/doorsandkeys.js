var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var getDoorAndKeyMW = require('../middleware/doorsandkeys/getDoorAndKeyMW');
var delDoorAndKeyMW = require('../middleware/doorsandkeys/delDoorAndKeyMW');
var updateDoorAndKeyMW = require('../middleware/doorsandkeys/updateDoorAndKeyMW');

var getDoorAndKeyOneMW = require('../middleware/doorsandkeys/getDoorAndKeyOneMW');


var userloginModel = require('../models/userlogin');
var doorandkeyModel = require('../models/doorsandkeys');

module.exports = function (app) {

    var objectRepository = {
        doorandkeyModel: doorandkeyModel,
        userloginModel: userloginModel

    };



    app.use('/logins/doorsandkeys/edit',
        authMW(objectRepository),
        getDoorAndKeyOneMW(objectRepository),
        updateDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, './logins/doorsandkeysedit2')
    );

    app.use('/logins/doorsandkeys/add',
        authMW(objectRepository),
        updateDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, './logins/doorsandkeysedit')
    );


    app.use('/logins/doorsandkeys/del',
        authMW(objectRepository),
        getDoorAndKeyOneMW(objectRepository),
        delDoorAndKeyMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/logins/doorsandkeys');
        }
    );

    app.use('/doorsandkeys',
        getDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, 'doorsandkeys')
    );

    app.use('/logins/doorsandkeys',
        authMW(objectRepository),
        getDoorAndKeyMW(objectRepository),
        renderMW(objectRepository, './logins/doorsandkeys')
    );
};
