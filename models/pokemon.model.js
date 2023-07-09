'use strict';

const Pokemon = (dbConnection, DataTypes) => {
  return dbConnection.define('Pokemon', {
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    abilities: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isLegendary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
};

module.exports = Pokemon;
