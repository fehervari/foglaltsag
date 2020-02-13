var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var getMemberAndkeyMW = require('../middleware/memberandkey/getMemberAndKeyMW');
var getMemberAndkeyOneMW = require('../middleware/memberandkey/getMemberAndKeyOneMW');
var delMemberAndKeyMW = require('../middleware/memberandkey/delMemberAndKeyMW');
var updateMemberAndKeyMW = require('../middleware/memberandkey/updateMemberAndKeyMW');


var getDoorAndKeyMW = require('../middleware/doorandkey/getDoorAndKeyMW');
var getMemberMW = require('../middleware/member/getMemberMW');
var memberModel = require('../models/member');

var doorandkeyModel = require('../models/doorandkey');
var memberandkeyModel = require('../models/memberandkey');
var userModel = require('../models/user');
var getUserModelMW = require('../middleware/user/getUserById');


module.exports = function (app) {

    var objectRepository = {
        memberandkeyModel: memberandkeyModel,
        userModel: userModel,
        doorandkeyModel: doorandkeyModel,
        memberModel: memberModel
    };


    app.use('/logined/memberandkey/add',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getMemberMW(objectRepository),
        getDoorAndKeyMW(objectRepository),
        updateMemberAndKeyMW(objectRepository),
        renderMW(objectRepository, './logined/memberandkeyedit')
    );


    app.use('/logined/memberandkey/del',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getMemberAndkeyOneMW(objectRepository),
        delMemberAndKeyMW(objectRepository),
        function (req, res, next) {
            return res.redirect('./logined/memberandkey');
        }
    );

    app.use('/memberandkeysum',
        getMemberAndkeyMW(objectRepository),
        renderMW(objectRepository, 'memberandkeysum')
    );

    app.use('/memberandkey',
        getMemberAndkeyMW(objectRepository),
        renderMW(objectRepository, 'memberandkey')
    );

    app.use('/logined/memberandkeysum',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getMemberAndkeyMW(objectRepository),
        renderMW(objectRepository, './logined/memberandkeysum')
    );

    app.use('/logined/memberandkey',
    authMW(objectRepository),
    getUserModelMW(objectRepository),
    getMemberAndkeyMW(objectRepository),
    renderMW(objectRepository, './logined/memberandkey')
);
};
