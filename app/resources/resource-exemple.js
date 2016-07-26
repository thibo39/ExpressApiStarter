"use strict";

// Charge une resource spécifique (avec l'ID de la base)
var load = function(id) {
  
}

// Charge une ou plusieurs resource en fonction des données dque tu passe dans le 'query'
var loadWhere = function (query) {

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