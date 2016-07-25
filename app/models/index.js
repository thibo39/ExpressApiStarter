"use strict";

var Sequelize, config, db, env, fs, path, responseType, sequelize;

fs = require('fs');
path = require('path');
Sequelize = require('sequelize');
env = process.env.NODE_ENV || 'development';
config = require('./../config/database.json')[env];
sequelize = new Sequelize(config.database, config.username, config.password, config);
db = {};

responseType = function(statut) {
  var response;
  return response = {
    statut: statut,
    message: ''
  };
};

fs.readdirSync(__dirname).filter(function(file) {
  return file.indexOf('.') !== 0 && file !== 'index.js';
}).forEach(function(file) {
  var model;
  model = sequelize["import"](path.join(__dirname, file));
  return db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    return db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = {
  db: db,
  responseType: responseType
};
