'use strict';

const { trainerCollection, pokemonCollection } = require('../models/index.js');

async function destroyContent(req, res) {
  const route = req.path.includes('trainers') ? trainerCollection : pokemonCollection ;
      
  try {
    const id = parseInt(req.params.id);
    let target = await route.delete({ where: { id } });
    res.status(204).json(target);
  }
  catch (err) {
    res.status(400).json(err);
  }
}


module.exports = destroyContent;