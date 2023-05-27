import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventForm from '../Event/EventForm';


describe("test for event component", () => {
    
    //test case for buttons
    test("render the event form with button", () => {
        render();
        const buttonList2 = screen.findAllByRole("button");       
    });
})