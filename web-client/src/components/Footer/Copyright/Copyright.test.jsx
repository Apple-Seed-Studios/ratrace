import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Copyright from ".";

describe('Test Copyright Component', () => {
  test('Copyright Component renders', () => {
    render(<Copyright />);
    expect(screen.getByText('Apple Seed Studios')).toBeInTheDocument();
  });
});