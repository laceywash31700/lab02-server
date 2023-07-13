'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const pokemon = require('./pokemon.model.js');
const artist = require('./artist.model.js');
const trainer = require('./trainer.model.js');
const trainersPokemon = require('./trainersPokemon.model.js');
const Collection = require('./collection.js');

const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sequelize = new Sequelize(POSTGRES_URI);

const pokemonModel = pokemon(sequelize, DataTypes);
const trainerModel = trainer(sequelize, DataTypes);

trainerModel.hasMany(pokemonModel, {
  foreignKey: 'trainerId',
  sourceKey: 'id',
});

pokemonModel.hasMany(trainerModel, {
  foreignKey: 'trainerId',
  targetKey: 'id'
});

trainersPokemon.belongsTo(trainerModel);
trainersPokemon.belongsTo(pokemonModel);

const trainerCollection = new Collection(trainerModel);
const pokemonCollection = new Collection(pokemonModel);

module.exports = {
  dbConnection: sequelize,
  Artist: artist(sequelize, DataTypes),
  trainerCollection,
  pokemonCollection
};
