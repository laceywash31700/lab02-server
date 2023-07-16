'use strict';

const { trainerCollection, pokemonCollection } = require('../models/index.js');

async function readAll(req, res) {
  console.log(req.path);
  const route = req.path.includes('trainers')
    ? trainerCollection
    : pokemonCollection;

  const model = req.path.includes('trainers')
    ? pokemonCollection.model
    : req.path.includes('pokemon')
      ? trainerCollection.model
      : null;
 
  try {
    let content = await route.get(null, {
      include: { model: model }
    });
    res.status(200).json(content);
  }
  catch (e) {
    console.error(e);
  }
}

module.exports = readAll;