'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const pokemon = require('./pokemon.model.js');
const trainer = require('./trainer.model.js');
const pokeDex = require('./PokeDex.model.js');
const Collection = require('./collection.js');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sequelize = new Sequelize(POSTGRES_URI);

const pokemonModel = pokemon(sequelize, DataTypes);
const trainerModel = trainer(sequelize, DataTypes);
const pokeDexModel = pokeDex(sequelize,DataTypes);

<<<<<<< HEAD
pokemonModel.belongsToMany(trainerModel, { through: pokeDexModel });
trainerModel.belongsToMany(pokemonModel, { through: pokeDexModel });
pokeDexModel.hasMany(pokemonModel);
pokemonModel.belongsTo(pokeDexModel);
pokeDexModel.hasMany(trainerModel);
trainerModel.belongsTo(pokeDexModel);
=======
trainerModel.hasMany(pokemonModel, {
  foreignKey: 'trainerId',
  sourceKey: 'id',
});

pokemonModel.hasMany(trainerModel, {
  foreignKey: 'trainerId',
  targetKey: 'id'
});

trainersPokemon.belongsToMany(trainerModel);
trainersPokemon.belongsToMany(pokemonModel);
>>>>>>> main

const trainerCollection = new Collection(trainerModel);
const pokemonCollection = new Collection(pokemonModel);

module.exports = {
  dbConnection: sequelize,
  trainerCollection,
  pokemonCollection
};
