import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductForm from '../Product/ProductForm';


describe("test for blog component", () => {
    
    //test case for buttons
    test("render the blog form with button", () => {
        render(<ProductForm/>);
        const buttonList = screen.findAllByRole("button");       
    });
})