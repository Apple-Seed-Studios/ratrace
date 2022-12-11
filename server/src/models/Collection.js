'use strict';

const Tasks = require('./Tasks/Tasks');
const Users = require('./Users/Users');

class Collection {

  constructor(model) {
    this.model = model;
  }

  getOne(id, email) {
    console.log(id);
    return this.model.findOne({ _id: id, email: email });
  }

  getAll(email) {
    console.log('email in getAll: ', email);
    return this.model.find({ email: email });
  }

  create(record) {
    return this.model.create(record);
  }

  update(id, email, data) {
    return this.model.findOneAndUpdate({ _id: id, email: email }, data, { new: true });
  }

  delete(id, email) {
    return this.model.deleteOne({ _id: id, email: email });
  }
}

module.exports = {
  users: new Collection(Users),
  tasks: new Collection(Tasks),
};
