import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Copyright from ".";

describe('Test Copyright Component', () => {
  test('Copyright Component renders', () => {
    render(<Copyright />);
    const expectedContent = "Apple Seed Studios 🐀"
    expect(screen.getByText(expectedContent)).toBeInTheDocument();
  });
});