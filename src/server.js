'use strict';

//        (.Y.)    <----8008s

const express = require('express');
const app = express();
const handleNotFound = require('../error-handler/404.js');
const handleError = require('../error-handler/500.js');
const logger = require('../middleware/logger.js');
const validator = require('../middleware/validator.js');
const pokemonRoutes = require('../routes/pokemon.route.js');
const trainerRoutes = require('../routes/trainer.route.js');

function start(port) {
  app.listen(port, () => console.log(`Hey .....hello , echo..echo...echo I'm listening in port ${port}`));
}

app.use(express.json());

app.use(logger);


app.get('/what\'s-up', validator ,  (req,res) => {
  const name = req.query.name;
  res.status(200).send(`what's up ${name}`);
  
});



app.get('/wat-up-internet/:person' , (req,res) => {
  res.status(200).send(`Hey! Hey! Hey!, ${req.params.person} Welcome to the internet`);
});


app.get('/peace', (req, res) => {
  res.status(200).send(`Safe surfing internet vagabond. Remember not to download or share any personal information from sites that are sketchy.`);
});

app.use(pokemonRoutes);
app.use(trainerRoutes);


app.use('*', handleNotFound);
app.use(handleError);


module.exports = {app, start};