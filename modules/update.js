'use strict';

const { Artist, trainerCollection, pokemonCollection } = require('../models/index.js');

async function updateContent(req, res) {
  const route = req.path.includes('trainer')
    ? trainerCollection
    : req.path.includes('pokemon')
      ? pokemonCollection
      : Artist;

  const id = parseInt(req.params.id);
  const newContent = req.body;

  let updatedContent = route.update(id, newContent)
    .then(res => res.status(200).json(updatedContent))
    .catch(err => err);

}

module.exports = updateContent;