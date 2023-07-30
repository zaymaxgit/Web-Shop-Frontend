import { render, screen } from "@testing-library/react";
import Headphones from "./Headphones";

describe("Headphone component", () => {
  it("Yes render", () => {
    render(<Headphones />);
    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});
