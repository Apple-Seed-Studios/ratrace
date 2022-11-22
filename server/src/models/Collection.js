'use strict';

const Messages = require('./Messages/Messages');
const Tasks = require('./Tasks/Tasks');
const Users = require('./Users/Users');

class Collection
{

  constructor(model)
  {
    this.model = model;
  }

  getOne(id, email)
  {
    console.log(id);

    return this.model.findOne({ _id: id, email: email });
  }

  getAll(email)
  {
    console.log('email in getAll: ', email);
    return this.model.find({ email: email });
  }

  create(record)
  {
    return this.model.create(record);
  }

  update(id, data)
  {
    return this.model.findOne({ where: { _id: id } })
      .then(record => record.update(data));
  }

  delete(id, email)
  {
    return this.model.deleteOne({ _id: id, email: email });
  }
}

module.exports = {
  users: new Collection(Users),
  tasks: new Collection(Tasks),
  messages: new Collection(Messages),
};
