import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import TaskFormContent from "./TaskFormContent";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let store;

const mockReducer = jest.fn((state, action) => state);

describe("Test TaskFormContent Component", () => {
  let toggleForm;
  beforeEach(() => {
    jest.clearAllMocks();
    store = createStore(mockReducer, applyMiddleware(thunk));
    toggleForm = jest.fn();
  });
  test("TaskFormContent Component to render", async () => {
    render(
      <Provider store={store}>
        <TaskFormContent {...{ toggleForm }} />
      </Provider>
    );

    expect(screen.getByLabelText(/Task Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/)).toBeInTheDocument();
    expect(screen.getByText(/Save/)).toBeInTheDocument();
  });

  test("TaskFormContent Component Button calls handleSubmit", async () => {
    render(
      <Provider store={store}>
        <TaskFormContent {...{ toggleForm }} />
      </Provider>
    );

    const user = userEvent.setup();
    const taskNameInput = screen.getByLabelText(/Task Name/);
    const taskDescInput = screen.getByLabelText(/Description/);
    expect(screen.getByLabelText(/Task Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/)).toBeInTheDocument();
    const taskSubmitButton = screen.getByText(/Save/);
    await user.click(taskNameInput);
    await user.keyboard("Buy bread");
    await user.click(taskDescInput);
    await user.keyboard("Pumpkin seed");
    await user.click(taskSubmitButton);

    expect(mockReducer).toHaveBeenCalledWith(undefined, {
      payload: expect.objectContaining({
        task_name: "Buy bread",
        task_description: "Pumpkin seed",
      }),
      type: "ADD_TASK",
    });
  });
});
