import React from "react";
import { InputNumber } from "./InputNumber";
import { render, fireEvent } from "@testing-library/react";

describe("Test InputNumber React Component", () => {
  it("should have an input with type number", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputNumber
        value={0}
        min={0}
        max={10}
        label="inputnumberid"
        onChange={mockFn}
      />
    );

    const inputNumber = getByTestId("Number");

    expect(inputNumber).toHaveAttribute("type", "number");
    expect(inputNumber).toHaveAttribute("id", "inputnumberid");
    expect(inputNumber).toHaveAttribute("placeholder", "inputnumberid");
    expect(inputNumber).toHaveAttribute("value", "0");
    expect(inputNumber).toHaveAttribute("min", "0");
    expect(inputNumber).toHaveAttribute("max", "10");
  });

  it("should have a required input with type number", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputNumber
        value={0}
        min={0}
        max={10}
        label="inputnumberid"
        onChange={mockFn}
        required={true}
      />
    );

    const inputNumber = getByTestId("Number");

    expect(inputNumber).toHaveAttribute("required", "");
  });

  it("should change input content", () => {
    let number: number = 0;
    const onChangeInput = (data: number): void => {
      number = data;
    };

    const { getByTestId } = render(
      <InputNumber
        value={0}
        min={0}
        max={10}
        label="inputnumberid"
        onChange={onChangeInput}
      />
    );

    const inputNumber = getByTestId("Number");
    fireEvent.change(inputNumber, { target: { value: 10 } });

    expect(number).toEqual("10");
  });
});
