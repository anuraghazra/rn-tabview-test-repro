import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import App from "./App";

describe("<App />", () => {
  it("should switch tabs", () => {
    render(<App />);

    expect(screen.getByRole("tab", { name: "First" })).toHaveAccessibilityState({
      selected: true,
    });
    expect(screen.getByText("First Route")).toBeVisible();

    fireEvent.press(screen.getByRole("tab", { name: "Second" }));
    expect(screen.getByText("Second Route")).toBeVisible();
  });
});
