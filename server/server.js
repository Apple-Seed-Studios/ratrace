'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const handleHelloWorld= require('./routes/route').handleHelloWorld;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hello', handleHelloWorld)

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('App is running on port :: ' + port));
  }
}
