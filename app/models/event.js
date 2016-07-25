'use strict';

module.exports = function(sequelize, DataTypes) {
  var Event;
  Event = sequelize.define('event', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      field: 'title',
      type: DataTypes.STRING
    },
    description: {
      field: 'description',
      type: DataTypes.STRING
    },
    date_start: {
      field: 'date_start',
      type: DataTypes.DATE
    },
    date_stop: {
      field: 'date_stop',
      type: DataTypes.DATE
    }
  }, {
    tableName: 'events',
    timestamps: false,
    freezeTableName: true,
  });
  return Event;
};
