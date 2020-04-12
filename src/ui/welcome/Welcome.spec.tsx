import React from "react";
import { Welcome } from "./Welcome";
import { render, getAllByRole } from "@testing-library/react";

describe("Test React Multicomponent Welcome", () => {
  it("should have a welcome component", () => {
    const { getByRole, getAllByRole } = render(<Welcome />);
    const welcomePageMainText = getByRole("WelcomePageMainText");
    const footer = getByRole("contentinfo");
    const bottons = getAllByRole("button");

    expect(bottons[1]).toHaveTextContent("Login");
    expect(welcomePageMainText).toBe;
    expect(bottons[0]).toHaveTextContent("Signup");
    expect(footer).toBe;
  });
});
