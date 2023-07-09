'use strict';

const {Artist} = require('../models/index.js');
const {Pokemon} = require('../models/index.js');

async function updateContent(req,res) {
  const route = req.path.includes('artist') ? Artist : Pokemon;
  const id = parseInt(req.params.id);
  const newContent = req.body;
  
  let oldContent = await route.findOne({where: {id}});
  let updatedContent = await oldContent.update(newContent);
  
  res.status(200).json(updatedContent);
}

module.exports = updateContent;