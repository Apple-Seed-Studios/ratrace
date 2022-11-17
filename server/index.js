'use strict';

require('dotenv').config();
console.log(process.env)
const { start } = require('./src/server.js');
const PORT = process.env.PORT
console.log(PORT);

start(PORT);
