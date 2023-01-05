import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginButton from '../LoginButton';


let mockFunction = jest.fn()
let mockUser = {
  loginWithRedirect: mockFunction,
}

jest.mock('../../../hooks/useAuth', () => ({
  useAuth: () => {
    return mockUser
  }
}))

test('The login button should redirect the user to the login page when clicked', () => {
  render(<LoginButton></LoginButton>);
  let loginButton = screen.getByText('Get Started');
  fireEvent.click(loginButton);
  expect(mockFunction.mock.calls).toHaveLength(1);
})