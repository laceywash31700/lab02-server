'use strict';

const { Artist, trainerCollection, pokemonCollection } = require('../models/index.js');


function createContent(req, res) {
  const route = req.path.includes('trainer')
    ? trainerCollection
    : req.path.includes('pokemon')
      ? pokemonCollection
      : Artist;

  const newContent = req.body;
  let savedContent = route.create(newContent)
    .then(res => res.status(200).json(savedContent))
    .catch(err => err);
  
}

module.exports = createContent;