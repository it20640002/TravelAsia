import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TravelForm from '../Travel/TravelForm';


describe("test for travel component", () => {
    
    //test case for buttons
    test("render the travel form with button", () => {
        render(<TravelForm />);
        const buttonList = screen.findAllByRole("button");       
    });
})