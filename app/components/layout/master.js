'use strict';

var m = require('mithril');

function controller(params, done) {
  var scope = params || {};
  done && done(null, scope);
  return scope;
}

function view(scope) {
  //Autre menu responsive avec Pure => http://purecss.io/layouts/tucked-menu-vertical/#
  return m('#wrapper', [
    m('div', {class: 'pure-menu pure-menu-horizontal'}, [ 
      m('ul', {class: 'pure-menu-list'}, [
        m('li', {class: 'pure-menu-item'}, m('a', {class: 'pure-menu-link'},'News')),
        m('li', {class: 'pure-menu-item'}, m('a', {class: 'pure-menu-link'},'Sports')),
        m('li', {class: 'pure-menu-item'}, m('a', {class: 'pure-menu-link'},'Finance')),
      ])
    ]),
    scope && scope.content,
    scope && scope.modal
  ]);
}

module.exports = {
  controller: controller,
  view: view
};
