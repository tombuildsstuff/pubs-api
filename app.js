'use strict';
global.__base = __dirname;

var bodyParser = require('body-parser'),
    express    = require('express');
var routing = require(__base + '/startup/routing');

var app = express();

app.use(bodyParser.json());
routing.configure(app);

var server = app.listen(3003, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Pubs API listening at http://%s:%s', host, port);
});
