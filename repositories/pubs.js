'use strict';

module.exports = {
  getAll: function(callback) {
    var pubs = [
      { 'id': 1, 'name': 'The Foresters' },
      { 'id': 2, 'name': 'The Globe' },
      { 'id': 3, 'name': 'The Windmill' }
    ]
    callback(pubs);
  }
}
