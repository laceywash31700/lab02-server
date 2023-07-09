'use strict';

const {Sequelize, DataTypes } = require('sequelize');
const pokemon = require('./pokemon.model.js');
const artist = require('./artist.model.js');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sequelize = new Sequelize(POSTGRES_URI,{
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

module.exports = {
  dbConnection: sequelize,
  Pokemon: pokemon(sequelize, DataTypes),
  Artist: artist(sequelize, DataTypes )
};