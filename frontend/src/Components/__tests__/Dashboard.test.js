import {render, screen} from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";


//test case for header
test("supplier header renders with react document", () => {
    render(<Dashboard/>);
    const linkElement = screen.getByText(/Blogs/i);
    expect(linkElement).toBeInTheDocument();
});

