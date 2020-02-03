/*
module.exports = function (objectrepository, viewName) {

    var db = objectrepository['db'];
    return function (req, res, next) {
        //res.render(viewName, res.tpl);
        console.log("render MW " + viewName);
        res.end('Template: '+ viewName+ ' '+ db.getAll());
    };

};*/

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        res.render(viewName, res.tpl);
    };

};
