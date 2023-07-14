'use strict';

const { Artist, trainerCollection, pokemonCollection } = require('../models/index.js');

async function readAll(req, res) {
  const route = req.path.includes('trainer')
    ? trainerCollection
    : req.path.includes('pokemon')
      ? pokemonCollection
      : Artist;
  
  const model = req.path.includes('trainer')
    ? pokemonCollection.model
    : req.path.includes('pokemon')
      ? trainerCollection.model
      : null;
  
  let content = route.get(null, {
    include: { model: model}})
    .then(res => res.status(200).json(content))
    .catch(err => err);
}

module.exports = readAll;