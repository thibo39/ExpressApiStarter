'use strict';

var Promise = require('promise');

module.exports = {
  event: {
    get: function(id) {
      return new Promise(function(resolve) {
        resolve({
          id: id,
          name: 'Dolly'
        });
      });
    }
  }
};
