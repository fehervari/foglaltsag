var requireOption = require('../common').requireOption;
var log = require('loglevel');

/**
 * Load a user (if exists) with the :userid param
 * and put it on res.tpl.user
 */
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userloginModel');

  return function (req, res, next) {
    //not enought parameter
    if ((typeof req.params === 'undefined') || (req.params === 'null')) {
      return next();
    }

    //lets find the user
    userModel.findOne({_id: req.session.userid}, function (err, result) {
      log.debug(result);
      if (err) {
        return next(err);
      }

      res.tpl.userlogin = result;

      return next();
    });

  };

};
