'use strict';

const {Artist} = require('../models/index.js');
const {Pokemon} = require('../models/index.js');

async function destroyContent(req,res) {
  const route = req.path.includes('artist') ? Artist : Pokemon;
  const id = parseInt(req.params.id);
  let target = await route.destroy({where: {id}});
  res.status(204).json(target);
}

module.exports = destroyContent;