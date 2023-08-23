import { screen, render } from "@testing-library/react";
import UserCard, {withRated} from "../components/Users";
import MOCK_DATA from './mocks/userCard.mock.json';
import "@testing-library/jest-dom";

describe("User Card component IT cases", () => {

    it('should render user card', () =>{
        render(<UserCard userData={MOCK_DATA}/>)

        const name = screen.getByText('Leanne Graham');

        expect(name).toBeInTheDocument();
    })

    it('should render rated user card', () =>{
        const Rated = withRated(UserCard);
        render(<Rated userData={MOCK_DATA}/>)

        const label = screen.getByText('Top Rated');

        expect(label).toBeInTheDocument();
    })
})