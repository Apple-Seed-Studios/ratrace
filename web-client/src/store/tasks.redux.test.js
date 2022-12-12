import {
  addTaskPure,
  updateTaskPure,
  deleteTaskPure,
  taskReducer,
} from "./tasks";
import { tasks } from "../__fixtures__";

describe("Task Reducers", () => {
  test("should add task", async () => {
    const initialState = taskReducer();
    const newTask = { content: "Get bread." };
    const action = addTaskPure(newTask);
    const expectedState = [...initialState, newTask];
    let state = initialState;
    state = taskReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  test("should update task", async () => {
    const initialState = taskReducer();
    let state = initialState;
    state = taskReducer(state, addTaskPure(tasks[0]));
    state = taskReducer(state, addTaskPure(tasks[1]));
    const expectedState = [
      { ...tasks[1], task_name: "updated task" },
      tasks[0],
    ];
    const action = updateTaskPure({
      _id: tasks[1]._id,
      task_name: "updated task",
    });
    state = taskReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  test("should delete task", async () => {
    // setup
    const initialState = taskReducer();
    let state = initialState;
    state = taskReducer(state, addTaskPure(tasks[0]));
    state = taskReducer(state, addTaskPure(tasks[1]));
    state = taskReducer(state, addTaskPure(tasks[2]));

    // expectation
    const expectedState = [tasks[2], tasks[0]];
    const action = deleteTaskPure({ _id: tasks[1]._id });
    state = taskReducer(state, action);
    expect(state.length).toEqual(expectedState.length);
    expect(state).toEqual(expectedState);
  });
});
