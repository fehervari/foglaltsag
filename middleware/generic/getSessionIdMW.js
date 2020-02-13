


module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.tpl.sessionid.push(req.session.userid);
        return next();
    };
};
