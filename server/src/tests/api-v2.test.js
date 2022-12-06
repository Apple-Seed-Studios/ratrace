const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const express = require('express');
const request = require('supertest');
const { tasks } = require('../models/Collection');
const { buildTasks } = require('../__fixtures__');

const apiV2 = require('../routes/v2');


let mongoServer, app, taskFixtures;
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

const mockUser = {
  email: "templeton@example.com"
}

function mockAuthMiddleware(req, res, next) {
  req.user = mockUser;
  next();
}

beforeAll(async () => {
  await setUpMongoDb();
  app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/v2', mockAuthMiddleware, apiV2);
});

afterAll(async () => {
  await tearDownMongoDb();
});

describe('Test api-v2', () => {
  let tasksInDb;
  beforeEach(async () => {
    taskFixtures = buildTasks(mockUser.email);
    console.log(taskFixtures)
    const promises = taskFixtures.map((task) => tasks.create(task));
    tasksInDb = await Promise.all(promises);
  });

  afterEach(async () => await mongoose.connection.db.dropDatabase());

  test('get a task', async () => {
    const taskId1 = tasksInDb[0]._id;
    const resp = await request(app).get(`/api/v2/tasks/${taskId1}`)
    console.log(resp.body);
    expect(resp.body).toMatchObject({ _id: taskId1 });
  });

  test('get tasks', async () => {
    const resp = await request(app).get(`/api/v2/tasks`)
    expect(resp.body.length).toBe(tasksInDb.length);
  });

  test('post task', async () => {
    const newTask = { ...taskFixtures[0] };
    newTask.task_name = newTask + " new"
    const resp = await request(app).post('/api/v2/tasks')
      .set('Accept', 'application/json')
      .send(newTask);
    expect(resp.body).toMatchObject(newTask);
    const newId = resp.body._id;
    const respAfterPost = await request(app).get(`/api/v2/tasks/${newId}`);
    expect(respAfterPost.body).toMatchObject({ _id: newId });
  })

  test('update task', async () => {
    const taskId = tasksInDb[0]._id;
    const updateForTask = { task_name: "Updated Name" };
    const resp = await request(app).put(`/api/v2/tasks/${taskId}`)
      .set('Accept', 'application/json')
      .send(updateForTask);
    expect(resp.body).toMatchObject({ task_name: "Updated Name" });
    const respAfterUpdate = await request(app).get(`/api/v2/tasks/${taskId}`);
    expect(respAfterUpdate.body).toMatchObject({ _id: taskId, task_name: "Updated Name" });
  })

  test('delete task', async () => {
    const taskId1 = tasksInDb[0]._id;
    const resp = await request(app).delete(`/api/v2/tasks/${taskId1}`)
    console.log(resp.body);
    expect(resp.body.deletedCount).toBe(1);
    const respAfterDelete = await request(app).get('/api/v2/tasks');
    expect(respAfterDelete.body.length).toBe(tasksInDb.length - 1);
  });
});