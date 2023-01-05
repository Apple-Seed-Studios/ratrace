import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginNavIcon from '../LoginNavIcon';

let mockFunction = jest.fn()
let mockUser = {
  loginWithRedirect: mockFunction,
}

jest.mock('../../../hooks/useAuth', () => ({
  useAuth: () => {
    return mockUser
  }
}))

test('When the login nav icon is clicked it should redirect to the login page for the user.', () => {
  render(<LoginNavIcon></LoginNavIcon>);
  let loginNavIcon = screen.getByLabelText('login button');
  fireEvent.click(loginNavIcon);
  expect(mockFunction.mock.calls).toHaveLength(1);
})