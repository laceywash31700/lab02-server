'use strict';

const { trainerCollection, pokemonCollection } = require('../models/index.js');


async function createContent(req, res) {
  const route = req.path.includes('trainers') ? trainerCollection : pokemonCollection;
     

  const newContent = req.body;
  try {
    let savedContent = await route.create(newContent);
    res.status(200).json(savedContent);
  }
  catch (err) {
    res.status(400).send(err);
  }

}

module.exports = createContent;