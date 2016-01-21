'use strict';

module.exports = {
  getIndex: function (req, res, next)
  {
    res.send('Pubs API');
    next();
  }
}
