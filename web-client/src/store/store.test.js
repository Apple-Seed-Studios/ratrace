import {describe, expect, test} from '@jest/globals';

import store from "./index";
import { tasks } from "../__fixtures__";
import { addTask, addTaskPure, updateTask, deleteTask, getTasks } from "./tasks";

describe('Task Add and GET_TASKS Store Actions', () => {

  beforeEach(() => {
    store.dispatch({ type: 'RESET' });
  })

  afterEach(() => {
    store.dispatch({ type: 'RESET' });
  })

  test('should add task', async () => {
    const initialState = store.getState();
    const newTask = tasks[0];
    const expectedState = { ...initialState, tasks: [...initialState.tasks, newTask] };
    const action = addTask(newTask);
    await store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual(expectedState);
  });

  test('should get tasks (set them from server)', async () => {
    const action = getTasks();
    await store.dispatch(action);
    const state = store.getState();
    expect(state.tasks).toEqual(tasks);
  })
});

describe('Task Store Actions', () => {
  let initialState;

  beforeEach(() => {
    store.dispatch({ type: 'RESET' });
    initialState = store.getState();
    store.dispatch(addTaskPure(tasks[0]));
    store.dispatch(addTaskPure(tasks[1]));
    store.dispatch(addTaskPure(tasks[2]));
  })

  afterEach(() => {
    store.dispatch({ type: 'RESET' });
  })


  test('should update task', async () => {
    const expectedState = { ...initialState, tasks: [tasks[0], tasks[1], { ...tasks[2], task_name: 'updated task'}] };
    const action = updateTask({_id: tasks[2]._id, task_name: 'updated task'});
    await store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual(expectedState);
  });

  test('should delete task', async () => {
    const expectedState = { ...initialState, tasks: [tasks[0], tasks[2]] };
    const action = deleteTask({ _id: tasks[1]._id });
    await store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual(expectedState);
  });

});
