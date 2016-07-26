'use strict';

var home = require('./components/pages/home');
var second = require('./components/pages/second');

module.exports = {
  '/': home,
  '/second-page': second
};
