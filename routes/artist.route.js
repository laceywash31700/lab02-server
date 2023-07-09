'use strict';

const express = require('express');
const readAll = require('../modules/readAll.js');
const readOne = require('../modules/readOne.js');
const createContent = require('../modules/create.js');
const updateContent = require('../modules/update.js');
const destroyContent = require('../modules/delete.js');
const artist = express.Router();

artist.get('/artist', readAll);
artist.get('/artist/:id', readOne);
artist.post('/artist', createContent);
artist.put('/artist/:id', updateContent);
artist.delete('/artist/:id', destroyContent);

module.exports = artist;
