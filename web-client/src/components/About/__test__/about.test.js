import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../';

test('Our about page should render without crashing.', () => {
  render(<About></About>);
  expect(screen.getByText(/We are Apple Seed Studios/)).toBeInTheDocument();
})