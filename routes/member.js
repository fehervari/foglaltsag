var authMW = require('../middleware/generic/authMW');
var renderMW = require('../middleware/generic/renderMW');

var getMemberMW = require('../middleware/member/getMemberMW');
var getMemberOneMW = require('../middleware/member/getMemberOne');
var delMemberMW = require('../middleware/member/delMemberMW');
var updateMemberMW = require('../middleware/member/updateMemberMW');




var memberModel = require('../models/member');
var userModel = require('../models/user');
var getUserModelMW = require('../middleware/user/getUserById');

var doorandkeyModel = require('../models/doorandkey');


module.exports = function (app) {

    var objectRepository = {
        userModel: userModel,
        memberModel: memberModel

    };

    app.use('/logined/member/add',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        updateMemberMW(objectRepository),
        renderMW(objectRepository, './logined/memberedit')

    );

    app.use('/logined/member/edit',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getMemberOneMW(objectRepository),
        updateMemberMW(objectRepository),
        renderMW(objectRepository, './logined/memberedit2'),
        /*function (req, res, next) {

            return res.redirect('/logined/member');
        }*/
    );

    app.use('/logined/member/del',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getMemberOneMW(objectRepository),
        delMemberMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/logined/member');
        }
    );

    app.use('/logined/member',
        authMW(objectRepository),
        getUserModelMW(objectRepository),
        getMemberMW(objectRepository),
        renderMW(objectRepository, './logined/member')
    );

    app.use('/member',
        getMemberMW(objectRepository),
        renderMW(objectRepository, 'member')
    );
};
