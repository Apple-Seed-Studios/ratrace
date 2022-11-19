import { addTaskRaw, taskReducer } from "./tasks";

describe('Task Reducers', () => {
  test('should add task', async () => {
    const dispatch = jest.fn();
    const mockAxios = {
      post: (url, payload) => Promise.resolve({ data: payload })
    };
    const initialState = taskReducer();
    const newTask = {content: "Get bread."}
    const expectedState = [...initialState, newTask];
    let state = initialState;
    let thunk = addTaskRaw(mockAxios)(newTask);
    state = taskReducer(state, await thunk(dispatch));
    expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_TASK', payload: newTask});
  });
});