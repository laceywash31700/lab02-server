'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const { start } = require('./src/server.js');
const { dbConnection } = require('./models/index.js');

dbConnection.sync().then(() => start(PORT)).catch(console.error);
