import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Copyright from "..";

describe("Test Copyright Component", () => {
  test("Copyright Component renders", () => {
    render(<Copyright></Copyright>)
    const expectedContent = "Apple Seed Studios 🐀";
    expect(screen.getByText(expectedContent)).toBeInTheDocument();

  });
  test("Copyright should link off of the page to our github.", () =>{
    render(<Copyright></Copyright>)
    const expectedContent = "Apple Seed Studios 🐀";
    expect(screen.getByText(expectedContent).href).toEqual("https://github.com/Apple-Seed-Studios")
  });
  test("Copyright should display the current date.", () => {
    render(<Copyright></Copyright>);
    let expectedDate = new RegExp(new Date().getFullYear());
    expect(screen.getByText(expectedDate)).toBeInTheDocument();
  })
});
