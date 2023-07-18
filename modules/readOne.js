'use strict';

const { trainerCollection, pokemonCollection } = require('../models/index.js');

async function readOne(req, res) {
  const route = req.path.includes('trainer') ? trainerCollection : pokemonCollection;
  
  const model = req.path.includes('trainer')
    ? pokemonCollection.model
    : req.path.includes('pokemon')
      ? trainerCollection.model
      : null;
  
  const id = parseInt(req.params.id);
  try {let content = await route.get(id, {
    include: { model: model }});
  res.status(200).json(content);}
  catch(err){
    res.status(400).send(err);
  }
}


module.exports = readOne;