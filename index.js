'use strict';
const app = require('./src/server');
const {config} = require('dotenv');
config();
const PORT = process.env.PORT;

app.start(PORT);