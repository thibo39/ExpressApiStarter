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
        Event.findAll().then( function (data) {
          resolve(data);
        });
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
  var response = {};
  // model.id
  // model.type

  return new Promise( function(resolve, reject) {
    Event.build({title: model.title, date_start: model.date_start, date_stop: model.date_stop, description: model.description})
    .save()
    .then(function(o){
        console.log(o.values);
        response.statut = 'success';
        response.message = o;
        resolve(response);
    }).catch(function(error) {
        console.log(error);
        response.statut = 'error';
        response.message = error;
        resolve(response);
    });
    
  });
}

// Exporter les méthodes de la resource
module.exports = {
  get: load,
  query: loadWhere,
  destroy: remove,
  save: save
}