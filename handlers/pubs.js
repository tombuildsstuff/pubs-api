'use strict';

var repository = require(__base + '/repositories/pubs');

module.exports = {
  getAll: function (req, res, next) {
    repository.getAll(function (pubs) {
      res.status(200).send(pubs);
      next();
    })
  }
}
