import { fireEvent, render, screen } from '@testing-library/react';
import Header from './../components/Header';
import { Provider } from 'react-redux';
import appStore from './../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

describe(("Header Page it Cases"), () => {
    it('should render header component with login button', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

    it('should render Cart item inside header component', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const cartText = screen.getByText(/Cart/);
        expect(cartText).toBeInTheDocument();
    })

    it('should render change login button text to logout on click', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const loginButton = screen.getByRole('button',{name: 'Login'});

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole('button',{name: 'Logout'});
        expect(logoutButton).toBeInTheDocument();
    })
})