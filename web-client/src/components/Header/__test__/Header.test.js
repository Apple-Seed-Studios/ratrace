import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../../../context/themeContext"; 
import "@testing-library/jest-dom";
import Header from '../';

let mockUser = {
    isAuthenticated: true,
    user: {
        name: 'Example name',
        picture: 'Example.com',
    }
}

jest.mock('../../../hooks/useAuth', () => ({
    useAuth: () => {
        return mockUser
    }
}))

afterEach(() => {
    cleanup();
})

test('Our Header should render without crashing.', () => {
    render(<Theme>
    <Router>
    <Header></Header>
    </Router>
    </Theme>)
    expect(screen.getByText(/🐀 Rat-race/)).toBeInTheDocument();
});
test('Our Header should display a login button if the user is not logged in.', () => {
    mockUser.isAuthenticated = false;
    render(<Theme>
        <Router>
        <Header></Header>
        </Router>
        </Theme>)
        expect(screen.getByLabelText('login button')).toBeInTheDocument();
})
test('Our Header should display a logout button if the user is logged in.', () => {
    mockUser.isAuthenticated = true;
    render(<Theme>
        <Router>
        <Header></Header>
        </Router>
        </Theme>)
        expect(screen.getByLabelText('logout button')).toBeInTheDocument();
})