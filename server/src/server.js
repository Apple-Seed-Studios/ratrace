'use strict';


//IMPORT
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const v1 = require('./routes/v1');
const v2 = require('./routes/v2');
const verifyUser = require('./middleware/auth');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');





// const { handleHelloWorld, getMessage, postMessage } = require('./routes/route');


// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is listening');
});

//connect mongoose to mongo
mongoose.connect(process.env.DB_URL);


//USE
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.STATIC_PAGES_DIR) {
  console.log('serving static pages from express server at', process.env.STATIC_PAGES_DIR);
  app.use("/", express.static(process.env.STATIC_PAGES_DIR));
}


//Routes
app.use(logger);

app.use('/api/v1', v1);
app.use('/api/v2', verifyUser, v2);
// app.get('/hello', handleHelloWorld);
// app.get('/messages', getMessage);
// app.post('/messages', postMessage);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('App is running on port :: ' + port));
  },
};
