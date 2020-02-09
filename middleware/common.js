const fs = require('fs');

var settings = require("../config/conf.json");

// var configs = fs.readFile('./config/conf.json', 'utf8', (err, jsonString) => {
//   //console.log(jsonString);
//   //console.log("A beolvasott conf file.");
//   var configs = JSON.parse(jsonString)
//   console.log("debug level is:", configs.confs.debug_level)
//   return configs;
// })

console.log("debug level is:", settings.confs.debug_level);

/**
 * Load a dependency from an object repository
 * @param objectRepository object repository
 * @param propertyName dependency name
 * @returns {*}
 */
function requireOption(objectRepository, propertyName) {
  if (objectRepository && objectRepository[propertyName]) {
    return objectRepository[propertyName];
  }
  throw new TypeError(propertyName + ' required');
}

module.exports.requireOption = requireOption;

