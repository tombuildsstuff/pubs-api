'use strict';

module.exports = {
  logger: function (req, res, next) {
    var method = req.method;
    var url = req.originalUrl;
    console.log('[' + method + '] - ' + url);
    next();
  }
}
