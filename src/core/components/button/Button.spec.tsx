import React from "react";
import { Button } from "./Button";
import { render, fireEvent } from "@testing-library/react";

describe("Test Button React Component", () => {
  it("should have a Button with text", () => {
    const { getByRole } = render(<Button theme="header" text="ButtonText" />);
    const button = getByRole("button");

    expect(button).toHaveTextContent("ButtonText");
  });

  it("should have a Button with onClick function", () => {
    let value = 1;
    const fakeFunction = () => {
      value = value + 1;
    };
    const { getByRole } = render(
      <Button theme="header" text="ButtonText" onClick={fakeFunction} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(button).toHaveTextContent("ButtonText");
    expect(value).toBe(2);
  });

  it("should have a Submit Button", async () => {
    const { getByRole } = render(
      <Button theme="header" text="ButtonText" submit={true} />
    );

    const button = getByRole("button");

    expect(button).toHaveAttribute("type", "submit");
  });

  it("should have a header Button", () => {
    const { getByRole } = render(<Button theme="header" text="ButtonText" />);

    const button = getByRole("button");

    expect(button).toHaveClass("header");
  });

  it("should have a regular Button", () => {
    const { getByRole } = render(<Button theme="regular" text="ButtonText" />);

    const button = getByRole("button");

    expect(button).toHaveClass("regular");
  });

  it("should have a form Button", () => {
    const { getByRole } = render(<Button theme="form" text="ButtonText" />);

    const button = getByRole("button");

    expect(button).toHaveClass("form");
  });
});
