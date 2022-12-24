import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeButton from '../ThemeButton';
import Theme from '../../../context/themeContext';

afterEach(() => {
    cleanup();
})

test('Clicking on the theme button should switch the theme and button icon.', () => {
    render(
    <Theme>
        <ThemeButton/>
    </Theme>
    )
    let themeButtonLightMode = screen.getByTestId('Brightness7Icon')
    fireEvent.click(themeButtonLightMode)
    expect(screen.getByTestId('brightness_4')).toBeInTheDocument();
    let themeButtonDarkMode = screen.getByTestId('brightness_4');
    fireEvent.click(themeButtonDarkMode);
    expect(screen.getByTestId('Brightness7Icon')).toBeInTheDocument();
});