'use strict';

const express = require('express');
const readAll = require('../modules/readAll.js');
const readOne = require('../modules/readOne.js');
const createContent = require('../modules/create.js');
const updateContent = require('../modules/update.js');
const destroyContent = require('../modules/delete.js');
const pokemon = express.Router();

pokemon.get('/pokemon', readAll);
pokemon.get('/pokemon/:id', readOne);
pokemon.post('/pokemon', createContent);
pokemon.put('/pokemon/:id', updateContent);
pokemon.delete('/pokemon/:id', destroyContent);

module.exports = pokemon;