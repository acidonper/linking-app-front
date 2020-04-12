import React from "react";
import { Sidebar } from "./Sidebar";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Test React Multicomponent Sidebar", () => {
  it("should have a Sidebar component", () => {
    const history = createMemoryHistory();

    const { getAllByRole, getByText } = render(
      <Router history={history}>
        <Sidebar />
      </Router>
    );

    const sidebarLinks = getAllByRole("link");
    const pick = getByText("Pick");
    const live = getByText("Live");
    const chat = getByText("Chat");
    const profile = getByText("Profile");
    const photos = getByText("Photos");

    expect(sidebarLinks.length).toBe(5);
    expect(pick).toBe;
    expect(live).toBe;
    expect(chat).toBe;
    expect(profile).toBe;
    expect(photos).toBe;
  });
});
