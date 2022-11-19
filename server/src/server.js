'use strict';


//IMPORT
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const v1 = require('./routes/v1')
// const verifyUser = require('./auth');





const { handleHelloWorld, getMessage, postMessage } = require('./routes/route');


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

if (process.env.SERVE_STATIC_PAGES) {
  console.log('serving static pages from express server');
  app.use("/", express.static("../web-client/build"));
}


//Routes
// app.get('/', (req,res) => {
//   res.send('hello');
// });

app.use('/api/v1', v1);
app.get('/hello', handleHelloWorld)
app.get('/messages', getMessage)
app.post('/messages', postMessage)

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('App is running on port :: ' + port));
  }
}
