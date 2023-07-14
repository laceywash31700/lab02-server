'use strict';

const { Artist, trainerCollection, pokemonCollection } = require('../models/index.js');

function destroyContent(req, res) {
  const route = req.path.includes('trainer')
    ? trainerCollection
    : req.path.includes('pokemon')
      ? pokemonCollection
      : Artist;
  
  const id = parseInt(req.params.id);
  let target = route.destroy({ where: { id } })
    .then(res => res.status(204).json(target))
    .catch(err => err);
}
  

module.exports = destroyContent;