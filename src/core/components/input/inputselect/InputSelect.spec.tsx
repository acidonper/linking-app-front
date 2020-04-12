import React from "react";
import { InputSelect } from "./InputSelect";
import { render, fireEvent } from "@testing-library/react";

describe("Test InputSelect React Component", () => {
  it("should have multiple select options without default value", () => {
    const mockFn = jest.fn();
    const { getByRole, getAllByRole } = render(
      <InputSelect
        name="inputselectid"
        onChange={mockFn}
        labels={["option1", "option2"]}
      />
    );

    const inputSelectCombobox = getByRole("combobox");
    const inputSelectOption = getAllByRole("option");

    expect(inputSelectCombobox).toHaveAttribute("name", "inputselectid");
    expect(inputSelectCombobox).toHaveAttribute("id", "inputselectid");
    expect(inputSelectOption[0]).toHaveAttribute("id", "---");
    expect(inputSelectOption[0]).toHaveValue("");
    expect(inputSelectOption[1]).toHaveAttribute("id", "option1");
    expect(inputSelectOption[1]).toHaveValue("option1");
    expect(inputSelectOption[2]).toHaveAttribute("id", "option2");
    expect(inputSelectOption[2]).toHaveValue("option2");
  });

  it("should change selected item in a multiple select options with default value", () => {
    let text: string = "option1";
    const onChangeSelectBoolean = (data: string): void => {
      text = data;
    };

    const { getByRole } = render(
      <InputSelect
        name="onChangeSelectBoolean"
        onChange={onChangeSelectBoolean}
        defaultValue={"option1"}
        labels={["option1", "option2"]}
      />
    );

    const inputSelectCombobox = getByRole("combobox");
    fireEvent.change(inputSelectCombobox, { target: { value: "option2" } });

    expect(text).toEqual("option2");
  });
});
