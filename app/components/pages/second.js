'use strict';

var m = require('mithril');
var store = require('../../store');
var seo = require('./../seo/seo.js');
var master = require('./../layout/master.js');

function controller(params, done) {
  var scope = {};
  scope.meta_title = 'Second page';
  scope.meta_description = 'Lorem ipsum dolor';
  store.load('dog', 123).then(function(dog) {
    scope.myDog = dog;
    done && done(null, scope);
  });
  return scope;
}

function view(scope) {
  if (global.document) seo.updateTitle(scope.meta_title);

  return seo.extend( master, {
    content: [
      m.trust('<!-- Server side rendering \\o/ -->'),
      m('h1', 'Ohh, another page'),
      m('p', 'try to realod and look to the response'),
      m('a', {
        href: '/',
        config: m.route
      }, 'back to home page'),
      m('a', {
        href: '/third-page',
        config: m.route
      }, 'back to third page'),
      m('p', scope.myDog && ('My dogs name is ' + scope.myDog.name) || '')
    ]
  });
}

module.exports = {
  controller: controller,
  view: view
};
