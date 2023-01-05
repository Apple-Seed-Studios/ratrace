import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogoutButton from '../LogoutButton';

let mockFunction = jest.fn();

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => {
    return {
      logout: mockFunction,
    }
  }
}))

test('When the logout button is clicked it should redirect the user, using the auth0 hook.', () => {
  render(<LogoutButton></LogoutButton>);
  let logoutButton = screen.getByLabelText('logout button');
  fireEvent.click(logoutButton)
  expect(mockFunction.mock.calls).toHaveLength(1);
  expect(mockFunction.mock.lastCall[0]).toStrictEqual({ returnTo: window.location.origin })
})