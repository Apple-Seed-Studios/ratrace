import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteButton from '../';

let mockFunction = jest.fn();

test('Our Delete Button when clicked should display a popover with a delete button.', () => {
render(<DeleteButton deleteFunction={() => mockFunction()} ></DeleteButton>);
let deleteButton = screen.getByTestId('ClearIcon');
fireEvent.click(deleteButton);
expect(screen.getByText(/Delete Task?/)).toBeInTheDocument();
});
test('When the popover delete button is clicked it should execute the delete function given as a prop.', () => {
render(<DeleteButton deleteFunction={() => mockFunction()}></DeleteButton>);
let deleteButton = screen.getByTestId('ClearIcon');
fireEvent.click(deleteButton);
let confirmationDeleteButton = screen.getByTestId('DeleteForeverIcon');
fireEvent.click(confirmationDeleteButton);
expect(mockFunction.mock.calls).toHaveLength(1);
});