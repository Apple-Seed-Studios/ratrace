// const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

const { tasks } = require('../models/Collection');

let mongoServer;
const setUpMongoDb = async () => {
  mongoServer = await MongoMemoryServer.create();
  mongoose.connect(mongoServer.getUri());
}

const tearDownMongoDb = async () => {
  if (mongoose.connection) {
    await mongoose.connection.close()
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
}

describe('Test task model', () => {

  beforeAll(async () => {
    await setUpMongoDb();
  });

  afterAll(async () => {
    await tearDownMongoDb();
  });

  afterEach(async () => await mongoose.connection.db.dropDatabase());

  it('should successfully create task in the database', async () => {
    const testEmail = "abc@orchard-street.com";
    const task = await tasks.create({ email: testEmail, task_name: "Buy Cheese", task_desc: "Buy Stilton", completed: false });
    console.log(task.task_name)
    expect(task.task_name).toBe("Buy Cheese");
    const taskFromDb = await tasks.getOne(task._id, testEmail);
    expect(taskFromDb.task_name).toBe("Buy Cheese");
  });

  it('should successfully create and update task in the database', async () => {
    const testEmail = "abc@orchard-street.com";
    const task = await tasks.create({ email: testEmail, task_name: "Buy Cheese", task_desc: "Buy Stilton", completed: false });
    console.log(task.task_name)
    expect(task.task_name).toBe("Buy Cheese");
    const taskFromDb = await tasks.getOne(task._id, testEmail);
    expect(taskFromDb.task_name).toBe("Buy Cheese");

    const updatedTask = await tasks.update(task._id, testEmail, { task_name: "Purchase Cheese" });
    expect(updatedTask.task_name).toBe("Purchase Cheese");

    const taskFromDbAfterUpdate = await tasks.getOne(task._id, testEmail);
    expect(taskFromDbAfterUpdate.task_name).toBe("Purchase Cheese");

  });

  it('should successfully create and delete task in the database', async () => {
    const testEmail = "abc@orchard-street.com";
    const task = await tasks.create({ email: testEmail, task_name: "Buy Cheese", task_desc: "Buy Stilton", completed: false });
    console.log(task.task_name)
    expect(task.task_name).toBe("Buy Cheese");
    const taskFromDb = await tasks.getOne(task._id, testEmail);
    expect(taskFromDb.task_name).toBe("Buy Cheese");
    const resp = await tasks.delete(task._id, testEmail);
    console.log(resp);
    expect(resp.deletedCount).toBe(1);
    expect(await tasks.getOne(task._id, testEmail)).toBeFalsy();
  });
});