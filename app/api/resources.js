'use strict';

// Requires
var Promise = require('promise');

// Resources
var events = require('./../resources/events.js');

module.exports = {
  event: {
    get: events.get,
    query: events.query,
    destroy: events.destroy,
    save: events.save
  },
  cat: {
    get: function (id) {
      return new Promise(function(resolve) {
        resolve({
          id: id,
          name: 'Dolly'
        });
      }).then( function (data) {
        return data;
      });
    }
  },
  dog: {
    get: function (id) {
      return new Promise(function(resolve) {
        resolve({
          id: id,
          name: 'Doggy'
        });
      }).then( function (data) {
        return data;
      });
    }
  }
};
