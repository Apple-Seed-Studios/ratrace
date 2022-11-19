import { addTaskPure, updateTaskPure, taskReducer } from "./tasks";
import { tasks } from '../__fixtures__';

describe('Task Reducers', () => {
  test('should add task', async () => {
    const initialState = taskReducer();
    const newTask = {content: "Get bread."}
    const action = addTaskPure(newTask);
    const expectedState = [...initialState, newTask];
    let state = initialState;
    state = taskReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  test('should update task', async () => {
    const initialState = taskReducer();
    let state = initialState;
    state = taskReducer(state, addTaskPure(tasks[0]));
    state = taskReducer(state, addTaskPure(tasks[1]));
    const expectedState = [tasks[0], { ...tasks[1], task_name: 'updated task'}];
    const action = updateTaskPure({_id: tasks[1]._id, task_name: 'updated task'})
    state = taskReducer(state, action);
    expect(state).toEqual(expectedState);
  });
});