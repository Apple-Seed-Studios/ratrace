'use strict';

const Messages = require('./Messages/Messages');
const Tasks = require('./Tasks/Tasks');
const Users = require('./Users/Users');

class Collection {

  constructor(model) {
    this.model = model;
  }

  get(id) {
    if (id) {
      return this.model.findOne({ id });
    }
    else {
      return this.model.find({});
    }
  }

  create(record) {
    return this.model.create(record);
  }

  update(id, data) {
    return this.model.findOne({ where: { id } })
      .then(record => record.update(data));
  }

  delete(id) {
    return this.model.destroy({ where: { id }});
  }

}



module.exports = {
  users: new Collection(Users),
  tasks: new Collection(Tasks),
  messages: new Collection(Messages),
};
