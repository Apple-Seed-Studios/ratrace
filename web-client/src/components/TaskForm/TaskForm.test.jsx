import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import TaskForm from "./TaskForm";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let store;

const mockReducer = jest.fn((state, action) => state);

describe("Test TaskForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    store = createStore(mockReducer, applyMiddleware(thunk));
  });

  test("should render TaskForm", () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );
    expect(screen.getByText(/\+ Task/)).toBeInTheDocument();
  });

  test("should open on button click", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    const openButton = screen.getByText(/\+ Task/);
    await user.click(openButton);
    expect(await screen.findByLabelText(/Task Name/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Description/i)).toBeInTheDocument();
    expect(await screen.findByText(/Save/i)).toBeInTheDocument();
  });

  test("should call dispatch on submit", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    const openButton = screen.getByText(/\+ Task/);
    await user.click(openButton);
    const taskNameInput = screen.getByLabelText(/Task Name/);
    const taskDescInput = screen.getByLabelText(/Description/);
    const taskSubmitButton = screen.getByText(/Save/);
    await user.click(taskNameInput);
    await user.keyboard("Buy bread");
    await user.click(taskDescInput);
    await user.keyboard("Pumpkin seed");
    await user.click(taskSubmitButton);
    expect(mockReducer).toHaveBeenCalled();
  });
});
