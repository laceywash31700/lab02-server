'use strict';

const Artist = (dbConnection,DataTypes) => {
  return dbConnection.define('artist', {
    name: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    hasAlbums: {
      type: DataTypes.BOOLEAN,
      allowNull: true 
    }
  }); 
};

module.exports = Artist;