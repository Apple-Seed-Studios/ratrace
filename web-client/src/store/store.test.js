import {describe, expect, test} from '@jest/globals';

import store from "./index";
import { tasks } from "../__fixtures__";
import { addTask, addTaskPure, updateTask } from "./tasks";

describe('Task Store Actions', () => {
  test('should add task', async () => {
    store.dispatch({ type: 'RESET' });
    const initialState = store.getState();
    const newTask = tasks[0];
    const expectedState = { ...initialState, tasks: [...initialState.tasks, newTask] };
    const action = addTask(newTask);
    await store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual(expectedState);
  });

  test('should update task', async () => {
    store.dispatch({ type: 'RESET' });
    const initialState = store.getState();
    store.dispatch(addTaskPure(tasks[0]));
    store.dispatch(addTaskPure(tasks[1]));
    store.dispatch(addTaskPure(tasks[2]));
    const expectedState = { ...initialState, tasks: [tasks[0], tasks[1], { ...tasks[2], task_name: 'updated task'}] };
    const action = updateTask({_id: tasks[2]._id, task_name: 'updated task'});
    await store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual(expectedState);
  });
});