'use strict';

const {Artist} = require('../models/index.js');
const {Pokemon} = require('../models/index.js');

async function readAll(req,res) {
  const route = req.path.includes('artist') ? Artist : Pokemon;
  let content = await route.findAll();
  res.status(200).json(content);
}

module.exports = readAll;