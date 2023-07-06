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

app.use(logger);

app.use(express.json());


app.get('/wat-up-internet/:person' , (req,res) => {
  res.status(200).send(`What it is ${req.params.person} Welcome to the internet`);
});


app.get('/peace', (_, res) => {
  res.status(200).send(`Safe surfing internet vagabond. Remember not to download or share any personal information from sites that are sketchy.`);
});


app.get('*', (_,__,next) => next({message: `You are not going anywhere my dude this route doesn't exist`}));


app.use('*', handleNotFound);
app.use(handleError);


module.exports = {app, start};