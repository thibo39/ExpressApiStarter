'use strict';

var m = require('mithril');
var store = require('../../store');
var seo = require('./../seo/seo.js');
var master = require('./../layout/master.js');
var validate = require("validate.js");
var rules = require("./../../validator/rules.js");

function submit (e) {
  e.preventDefault();
  var form = e.target;
  var isValidForm = validate({title: form.title.value, date: form.date_start.value}, rules);
  
  if ( isValidForm != 'undefined') {
    console.log('fail');
  } else {
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
}

function controller(params, done) {
  var scope = {};
  scope.meta_title = 'Third page';
  scope.meta_description = 'Lorem ipsum dolor';
  store.loadWhere('event', {}).then(function(events) {
    scope.myEvents = events;
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
        href: '/second-page',
        config: m.route
      }, 'back to second page'),
      m('select',[
        scope.myEvents && scope.myEvents.map( function (event) {
          return m('option', event.title);
        })
      ]),
      m('form', {class: 'pure-form', method: 'POST', action: '#', onsubmit: submit}, [ 
        m('fieldset', [
          m('input',{type:'text',name:'title'}),
          m('input',{type:'text',name:'description'}),
          m('input',{type:'text',name:'date_start'}),
          m('input',{type:'text',name:'date_stop'}),
          m('button', {id: 'btn', class:'pure-button', type:'submit'},'OK')
        ])
      ])
    ]
  });
}

module.exports = {
  controller: controller,
  view: view
};