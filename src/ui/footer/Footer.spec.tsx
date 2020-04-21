import React from "react";
import { Footer } from "./Footer";
import { render } from "@testing-library/react";

describe("Test React Multicomponent Footer", () => {
  it("should have a Footer component", () => {
    const { getAllByRole } = render(<Footer />);

    const title = getAllByRole("heading");
    const links = getAllByRole("link");

    expect(title.length).toBe(7);
    expect(links.length).toBe(10);
  });
});
