'use strict';

const { trainerCollection, pokemonCollection } = require('../models/index.js');

async function updateContent(req, res) {
  const route = req.path.includes('trainers') ? trainerCollection : pokemonCollection;

  const id = parseInt(req.params.id);
  const newContent = req.body;
  try {
    let updatedContent = await route.update(id, newContent);
    res.status(200).json(updatedContent);
  }
  catch (err) {
    res.status(400).send(err);
  }

}

module.exports = updateContent;