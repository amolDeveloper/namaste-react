import { fireEvent, render, screen } from "@testing-library/react"
import Body from '../components/Body';
import '@testing-library/jest-dom';
import MOCK_DATA from './mocks/usersList.mock.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './../utils/appStore';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

describe("Body Component IT cases", () =>{

    beforeEach(async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Body />
                    </Provider>
                </BrowserRouter>
            )
        })
    })

 

    it('should search user list for Leanne text input', async () => {
        // await act(async () => {
        //     render(
        //         <BrowserRouter>
        //             <Provider store={appStore}>
        //                 <Body />
        //             </Provider>
        //         </BrowserRouter>
        //     )
        // })

        const userCardsBeforeSearch = screen.getAllByTestId('userCard');

        expect(userCardsBeforeSearch.length).toBe(10);

        const searchButton = screen.getByRole('button', {name: 'Search'});

        const serachInput = screen.getByTestId('searchInput');

        fireEvent.change(serachInput, {target: {value : 'Leanne'}});

        fireEvent.click(searchButton);

        const userCardsAfterSearch = screen.getAllByTestId('userCard');

        expect(searchButton).toBeInTheDocument();
        expect(userCardsAfterSearch.length).toBe(1);
    })

    it('should search top rated users', async () => {
        // await act(async () => {
        //     render(
        //         <BrowserRouter>
        //             <Provider store={appStore}>
        //                 <Body />
        //             </Provider>
        //         </BrowserRouter>
        //     )
        // })

        const topRatedButton = screen.getByRole('button', {name: 'Top Rated Users'});

        fireEvent.click(topRatedButton);

        const userCards = screen.getAllByTestId('userCard');

        expect(userCards.length).toBe(5);

    })
})