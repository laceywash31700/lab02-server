'use strict';

// creates trainers model for  for pokemon.
const Trainer = (dbConnection, DataTypes) => {
  return dbConnection.define('trainer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    homeTown: {
      type:DataTypes.STRING,
      allowNull: false
    },
    badges:{
      type:DataTypes.JSONB,
      allowNull: true
    }
  });
};

module.exports = Trainer;
