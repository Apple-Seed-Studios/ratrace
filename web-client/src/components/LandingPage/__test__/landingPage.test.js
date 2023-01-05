import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from '../';

test('Our landing page should render without crashing.', () => {
render(<LandingPage></LandingPage>);
expect(screen.getByTestId('landing_page_box')).toBeInTheDocument();
});

