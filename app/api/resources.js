'use strict';

var Promise = require('promise');
var events = require('./../resources/events.js');



module.exports = {
  event: {
    get: function(id) {
      return new Promise(function(resolve) {

        resolve({
          id: id,
          name: 'Dolly'
        });
      }).then( function (data) {

      });
    }
  }
};
