'use strict';

//bring in mongoose
const mongoose = require('mongoose');

//extract the schema property from mongoose object
const { Schema } = mongoose;

//declare the book schema
const taskSchema = new Schema({

  email: { type: String, required: true },
  task_name: { type: String, required: true },
  task_description: { type: String, required: false },
  completed: { type: Boolean, required: true },
  tracked_time: { type: Number },
  // tags: {type: Array},
  tag: { type: Array },
  created: { type: Date, default: Date.now },
});

// define the model

// allows our `Model` to use `mongoose` methods
const Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;
