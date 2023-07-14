const express = require('express');
const readAll = require('../modules/readAll.js');
const readOne = require('../modules/readOne.js');
const createContent = require('../modules/create.js');
const updateContent = require('../modules/update.js');
const destroyContent = require('../modules/delete.js');
const trainer = express.Router();

trainer.get('/trainer', readAll);
trainer.get('/trainer/:id', readOne);
trainer.post('/trainer', createContent);
trainer.put('/trainer/:id', updateContent);
trainer.delete('/trainer/:id', destroyContent);

module.exports = trainer;