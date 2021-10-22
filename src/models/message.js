'use strict';

const message = (sequelize, DataTypes) => sequelize.define('message', {
  words: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  channel: {
    type: DataTypes.UUID,
    // defaultValue: sequelize.UUID(),
    allowNull: false,
  }
});

module.exports = message;
