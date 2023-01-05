import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../';

afterEach(() => {
  cleanup()
})
let mockUser = {
  isAuthenticated: true,
  user: {
      name: 'Rat',
      picture: 'example.com',
      email: 'rat@rats.com',
  },
  isLoading: true,
}
jest.mock('../../../hooks/useAuth', () => ({
  useAuth: () => {
    return mockUser
  }
}))

test('If the user information is not yet loaded, the login component should display loading text', () => {
render(<Login></Login>);
expect(screen.getByTestId('loading_text')).toBeInTheDocument();
});
test('If the user information is loaded, the login component should display their picture, name, and email', () => {
mockUser.isLoading = false;
render(<Login></Login>);
expect(screen.getByText(/Rat/)).toBeInTheDocument();
expect(screen.getByText(/rat@rats.com/)).toBeInTheDocument();
expect(screen.getByAltText('example.com')).toBeInTheDocument();
});