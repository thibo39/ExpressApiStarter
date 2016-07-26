'use strict';

var m = require('mithril');
var seo = require('./../seo/seo.js');
var master = require('./../layout/master.js');

function controller(params, done) {
  var scope = params || {};
  scope.meta_title = 'Home page :)';
  scope.meta_description = 'Lorem ipsum dolor aoaib dijab diadiav daiad b';
  done && done(null, scope);
  return scope;
}

function view(scope) {
  if (global.document) seo.updateTitle(scope.meta_title);

  return seo.extend( master, {
    content: [
      m('h1', 'mithril-isomorphic-example'),
      m('p', 'yes, it works'),
      m('a', {
        href: '/second-page',
        config: m.route
      }, 'second page')
    ]
  });
}

module.exports = {
  controller: controller,
  view: view
};
