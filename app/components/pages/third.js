'use strict';

var m = require('mithril');
var store = require('../../store');

function maFonction (e) {
  e.preventDefault();
  var form = e.target;
  store.save({
    type: 'event',
    title: form.title && form.title.value || '',
    description: form.description && form.description.value || '',
    date_start: form.date_start && form.date_start.value || '',
    date_stop: form.date_stop && form.date_stop.value || ''
  }).then( function (response) {
    if (response.redirect) {
      document.location = response.redirect;
    }
  });
}

function controller(params, done) {
  var scope = {};
  store.loadWhere('event', {}).then(function(events) {
    scope.myEvents = events;
    done && done(null, scope);
  });
  return scope;
}

function view(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1', 'Ohh, another page'),
    m('p', 'try to realod and look to the response'),
    m('a', {
      href: '/second-page',
      config: m.route
    }, 'back to second page'),
    m('select',[
      scope.myEvents && scope.myEvents.map( function (event) {
        return m('option', event.title);
      })
    ]),
    m('form', {method: 'POST', action: '#', onsubmit: maFonction}, [ 
      m('input',{type:'text',name:'title'}),
      m('input',{type:'text',name:'description'}),
      m('input',{type:'text',name:'date_start'}),
      m('input',{type:'text',name:'date_stop'}),
      m('button',{type:'submit'},'OK')
    ])
  ];
}

module.exports = {
  controller: controller,
  view: view
};