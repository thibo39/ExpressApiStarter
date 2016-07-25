"use strict";

var load = function(id) {
  return new Promise(function(resolve) {
    resolve({
      id: id,
      name: 'Dolly'
    });
  }).then( function (data) {

  });
}

module.exports = {
	get: load
}