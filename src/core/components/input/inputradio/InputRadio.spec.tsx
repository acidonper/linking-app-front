import React from "react";
import { InputRadio } from "./InputRadio";
import { render, fireEvent } from "@testing-library/react";

describe("Test InputRadio React Component", () => {
  it("should have an input with type number", () => {
    const mockFn = jest.fn();
    const { getAllByRole } = render(
      <InputRadio
        name="inputnumberid"
        labels={["radio1", "radio2"]}
        onChange={mockFn}
      />
    );

    const inputRadio = getAllByRole("radio");

    expect(inputRadio[0]).toHaveAttribute("type", "radio");
    expect(inputRadio[0]).toHaveAttribute("name", "inputnumberid");
    expect(inputRadio[0]).toHaveAttribute("value", "radio1");
    expect(inputRadio[1]).toHaveAttribute("type", "radio");
    expect(inputRadio[1]).toHaveAttribute("name", "inputnumberid");
    expect(inputRadio[1]).toHaveAttribute("value", "radio2");
  });

  it("should change input content", () => {
    const mockFn = jest.fn();
    const { getByDisplayValue } = render(
      <InputRadio
        name="inputnumberid"
        labels={["radio1", "radio2"]}
        onChange={mockFn}
      />
    );

    const inputRadio = getByDisplayValue("radio2");
    fireEvent.change(inputRadio, { target: { value: "radio22" } });

    expect(inputRadio).toHaveAttribute("value", "radio22");
  });
});
