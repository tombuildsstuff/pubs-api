'use strict';
var home           = require(__base + '/handlers/home');

var requestLogger  = require(__base + '/middleware/requestLogger');
module.exports = {
  configure: function (app) {
    app.use(requestLogger.logger);

    app.get('/', home.getIndex);
  }
}
