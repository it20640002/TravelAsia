import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "../Blog/BlogForm";


describe("test for blog component", () => {
    
    //test case for buttons
    test("render the blog form with button", () => {
        render(<BlogForm />);
        const buttonList = screen.findAllByRole("button");       
    });
})