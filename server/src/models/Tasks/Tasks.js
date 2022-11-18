'use strict';

//bring in mongoose
const mongoose=require('mongoose');

//extract the schema property from mongoose object
const { Schema } = mongoose;

//declare the book schema
const taskSchema = new Schema({

  email: {type: String, required: true},
  content: {type: String, required: true},
  details: {type: String, required: true},
  // categories: {type: Array, required: true},

});

// define the model

// allows our `Model` to use `mongoose` methods
const Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;