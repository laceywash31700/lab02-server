'use strict';

const { Artist, trainerCollection, pokemonCollection } = require('../models/index.js');

async function readOne(req, res) {
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
  
  const id = parseInt(req.params.id);
  let content = await route.get(id, {
    include: { model: model }})
    .then(res => res.status(200).json(content))
    .catch(err => err);
}


module.exports = readOne;