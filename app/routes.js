'use strict';

var home = require('./components/pages/home');
var second = require('./components/pages/second');
var third = require('./components/pages/third');

module.exports = {
  '/': home,
  '/second-page': second,
  '/third-page': third
};
