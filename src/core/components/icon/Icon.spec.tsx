import React from "react";
import { Icon } from "./Icon";
import { render, fireEvent } from "@testing-library/react";

describe("Test Icon React Component", () => {
  it("should have a XS Icon from Material Icons", () => {
    const { getByTestId } = render(
      <Icon size="xs" library="material-icons" type="close" />
    );
    const i = getByTestId("Icon");

    expect(i).toHaveClass("xs");
    expect(i).toHaveClass("material-icons");
    expect(i).toHaveTextContent("close");
  });

  it("should have a XL Icon from Font Awesome", () => {
    const { getByTestId } = render(
      <Icon size="xl" library="fa" type="fa-facebook-square" />
    );
    const i = getByTestId("Icon");

    expect(i).toHaveClass("xl");
    expect(i).toHaveClass("fa");
    expect(i).toHaveClass("fa-facebook-square");
  });

  it("should have a XS Icon from Material Icons with onClick function", () => {
    let value = 1;
    const fakeFunction = () => {
      value = value + 1;
    };
    const { getByTestId } = render(
      <Icon
        size="xs"
        library="material-icons"
        type="close"
        onClick={fakeFunction}
      />
    );

    const i = getByTestId("Icon");
    fireEvent.click(i);

    expect(i).toHaveTextContent("close");
    expect(value).toBe(2);
  });
});
