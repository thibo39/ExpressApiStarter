"use strict";

// Requires
var Event = require('./../models').db.event;

// Charge une resource spécifique (avec l'ID de la base)
var load = function(id) {
  return new Promise( function(resolve, reject) {
    Event.findById(id).then( function (event1) {
      Event.findById(id).then( function (event1) {
        Event.findById(id).then( function (event1) {
          Event.findById(id).then( function (event1) {
            Event.findById(id).then( function (event1) {
              Event.findById(id).then( function (result) {
                resolve(result);
              });
            });
          });
        });
      });
    });
  }).then( function (data) {
    return data;
  });
}

// Charge une ou plusieurs resource en fonction des données dque tu passe dans le 'query'
var loadWhere = function (query) {
  return new Promise( function(resolve, reject) {
    if ( typeof(query.isFutur) != 'undefined') {
      if (query.isFutur == 1) {
        Event.findAll({where: {id: {$gte: 1}}}).then( function (data) {
          resolve(data);
        });
      }
    } else {
      resolve({youpi: false});
    }
    ///resolve(query);
  }).then( function (data) {
    return data;
  });
}

// Supprime une resource spécifique à partir d'un ID
var remove = function (id) {

}

// Enregistre une valeur (store) ou (update)
var save = function (model) {
  // model.id
  // model.type
}

// Exporter les méthodes de la resource
module.exports = {
  get: load,
  query: loadWhere,
  destroy: remove,
  save: save
}