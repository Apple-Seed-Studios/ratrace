'use strict';

const Messages= require('./Messages/Messages');
const Tasks= require('./Tasks/Tasks');
const Users= require('./Users/Users')

class Collection {

  constructor(model) {
    this.model = model;
  }

  get(id) {
    if (id) {
      return this.model.findOne({ id });
    }
    else {
      return this.model.findAll({});
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
  Users: new Collection(Users),
  Tasks: new Collection(Tasks),
  Messages: new Collection(Messages),
}