const express = require('express');
const readAll = require('../modules/readAll.js');
const readOne = require('../modules/readOne.js');
const createContent = require('../modules/create.js');
const updateContent = require('../modules/update.js');
const destroyContent = require('../modules/delete.js');
const trainer = express.Router();

trainer.get('/trainers', readAll);
trainer.get('/trainers/:id', readOne);
trainer.post('/trainers', createContent);
trainer.put('/trainers/:id', updateContent);
trainer.delete('/trainers/:id', destroyContent);

module.exports = trainer;