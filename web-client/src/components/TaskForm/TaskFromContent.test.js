import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom';
import TaskFormContent from './TaskFormContent';

describe('Test TaskFormContent Component', () => {
  test('TaskFormContent Component Button calls handleSubmit', async () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    const toggleForm = jest.fn();

    const user = userEvent.setup()
    render(<TaskFormContent {...{handleSubmit, toggleForm}} />);
    // const taskNameInput = screen.getByLabelText(/Task Name/);
    // const taskDescInput = screen.getByLabelText(/Description/);
    const taskSubmitButton = screen.getByText(/Submit/);
    /*
    await user.click(taskNameInput);
    await user.keyboard("Buy bread");
    await user.click(taskDescInput);
    await user.keyboard("Pumpkin seed");
    */
    await user.click(taskSubmitButton);

    // const expectedEvent = { target: { task_name: { value: "Buy Bread" } } };

    expect(handleSubmit).toHaveBeenCalled();
  });
});