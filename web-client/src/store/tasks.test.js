import { addTask, taskReducer } from "./tasks";

describe('Task Reducers', () => {
  test('should add task', () => {
    const initialState = taskReducer();
    const newTask = {content: "Get bread."}
    const expectedState = [...initialState, newTask];
    let state = initialState;
    state = taskReducer(state, addTask(newTask));
    expect(state).toEqual(expectedState);
  });
});