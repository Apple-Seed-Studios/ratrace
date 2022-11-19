import {describe, expect, test} from '@jest/globals';

import store from "./index";
import { tasks } from "../__fixtures__";
import { addTask } from "./tasks";

describe('Task Store Actions', () => {
  test('should add task', async () => {
    const initialState = store.getState();
    const newTask = tasks[0];
    const expectedState = { ...initialState, tasks: [...initialState.tasks, newTask] };
    const action = addTask(newTask);
    await store.dispatch(action);
    const state = store.getState();
    expect(state).toEqual(expectedState);
  });
});