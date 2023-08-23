import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page it Cases" , () => {
    it("should load contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    it("should load input inside contact component", () => {
        render(<Contact />);
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBe(2);
    })

    it("should load button inside contact component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })
})