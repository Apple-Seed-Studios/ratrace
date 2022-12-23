import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AvatarPic from '../Avatar';

let mockUser = {
    isAuthenticated: false
};

jest.mock('../../../hooks/useAuth', () => ({
    useAuth: () => {
        return mockUser;
    }
}))

afterEach(() => {
    cleanup();
})

    test('If the user is authenticated, component should render using the user information.', () => {
        mockUser = {
            isAuthenticated: true,
            user: {
                name: 'Rat',
                picture: 'example.com'
            }
        }
        render(<AvatarPic></AvatarPic>)
        expect(screen.getByAltText('Rat')).toBeInTheDocument();
    })
    test('If the user is not authenticated the component should render using not authenticated information.', () => {
        mockUser = {
            isAuthenticated: false,
            user: {
                name: undefined,
                picture: undefined,
            }
        }
        render(<AvatarPic></AvatarPic>)
        expect(screen.getByAltText("User not logged in image")).toBeInTheDocument();
    })


