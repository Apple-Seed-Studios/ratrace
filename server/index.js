'use strict';

require('dotenv').config();

const { start } = require('./src/server.js');
const PORT = process.env.PORT;
console.log(PORT);

start(PORT);
