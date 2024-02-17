import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the heading and TrafficLights component", () => {
    render(<App />);

    // Check if the heading is rendered
    const headingElement = screen.getByText(/Traffic Lights/i);
    expect(headingElement).toBeInTheDocument();
  });
});
