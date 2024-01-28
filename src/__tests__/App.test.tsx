import { render, screen } from "@testing-library/react";
import App from "../App";

it("demo", () => {
  expect(true).toBe(true);
});

it("Renders the main page", () => {
  render(<App />);
  const CountEl = screen.getByText(/count/);
  expect(CountEl).toBeInTheDocument();
});
