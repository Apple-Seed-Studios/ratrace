'use strict';

require('dotenv').config();
console.log(process.env)
const { start } = require('./server.js');
const PORT = process.env.PORT
console.log(PORT);

start(PORT);
