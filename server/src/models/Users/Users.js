'use strict';

//bring in mongoose
const mongoose=require('mongoose');

//extract the schema property from mongoose object
const { Schema } = mongoose;

//declare the book schema
const userSchema = new Schema({

  email: {type: String, required: true},
  name: {type: String, required: true},
  password: {type: String, required: true},

});

// define the model

// allows our `Model` to use `mongoose` methods
const Users = mongoose.model('User', userSchema);

module.exports = Users;