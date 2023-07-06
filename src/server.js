'use strict';
const express = require('express');
const app = express();
const handleNotFound = require('../error-handler/404');
const handleError = require('../error-handler/500');
const logger = require('../middleware/logger');
const validator = require('../middleware/validator');

function start(port) {
  app.listen(port, () => console.log(`Hey hello , echo....echo...I'm listening in ${port}`));
}
app.use(express.json());

app.use(logger);


app.get('/what\'s-up',validator,  (req,res,next) => {
  const name = req.query.name;
  !name ? next() : res.status(200).send(`what's up ${name}`);
  
});



app.get('/wat-up-internet/:person' , (req,res) => {
  res.status(200).send(`What it is ${req.params.person} Welcome to the internet`);
});


app.get('/peace', (req, res) => {
  res.status(200).send(`Safe surfing internet vagabond. Remember not to download or share any personal information from sites that are sketchy.`);
});



app.use('*', handleNotFound);
app.use(handleError);


module.exports = {app, start};