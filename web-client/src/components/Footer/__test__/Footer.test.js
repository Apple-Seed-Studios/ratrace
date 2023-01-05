import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../';

test('Our Footer should render without crashing', () => {
    render(<Footer></Footer>);
    let expectedContent = 'Planting one seed at a time™';
    expect(screen.getByText(expectedContent)).toBeInTheDocument();
})