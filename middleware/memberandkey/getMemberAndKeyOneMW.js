var requireOption = require('../common').requireOption;


module.exports = function (objectrepository) {

    var memberandkeyModel = requireOption(objectrepository, 'memberandkeyModel');

    return function (req, res, next) {

        memberandkeyModel.findOne({_id: req.query.id}).exec(function (err, memberandkey) {
            if ((err) || (!memberandkey)) {
                return res.redirect('/');
            }
            console.log(memberandkey);
            res.tpl.memberandkey = memberandkey;
            return next();
        });

    };

};
