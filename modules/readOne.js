'use strict';

const {Artist} = require('../models/index.js');
const {Pokemon} = require('../models/index.js');

async function readOne(req,res) {
  const route = req.path.includes('artist') ? Artist : Pokemon;
  const id = parseInt(req.params.id);
  let content = await route.findOne({where: {id}});
  res.status(200).json(content);
}

module.exports = readOne;