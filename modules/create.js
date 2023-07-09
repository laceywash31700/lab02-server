'use strict';

const {Artist} = require('../models/index.js');
const {Pokemon} = require('../models/index.js');

async function createContent(req,res) {
  const route = req.path.includes('artist') ? Artist : Pokemon;
  console.log(route);
  const newContent = req.body;
  let savedContent = await route.create(newContent);
  res.status(200).json(savedContent);
}

module.exports = createContent;