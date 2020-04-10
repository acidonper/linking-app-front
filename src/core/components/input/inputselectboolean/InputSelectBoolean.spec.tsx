import React from "react";
import { InputSelectBoolean } from "./InputSelectBoolean";
import { render, fireEvent } from "@testing-library/react";

describe("Test InputSelectBoolean React Component", () => {
  it("should have a boolean select input", () => {
    const mockFn = jest.fn();
    const { getByRole, getAllByRole } = render(
      <InputSelectBoolean
        name="inputselectbooleanid"
        onChange={mockFn}
        defaultValue={true}
      />
    );

    const inputSelectBooleanCombobox = getByRole("combobox");
    const inputSelectBooleanOption = getAllByRole("option");

    expect(inputSelectBooleanCombobox).toHaveAttribute(
      "name",
      "inputselectbooleanid"
    );
    expect(inputSelectBooleanCombobox).toHaveAttribute(
      "id",
      "inputselectbooleanid"
    );
    expect(inputSelectBooleanOption[0]).toHaveAttribute("id", "true");
    expect(inputSelectBooleanOption[0]).toHaveAttribute("value", "true");
    expect(inputSelectBooleanOption[0]).toHaveValue("true");
    expect(inputSelectBooleanOption[1]).toHaveAttribute("id", "false");
    expect(inputSelectBooleanOption[1]).toHaveAttribute("value", "false");
    expect(inputSelectBooleanOption[1]).toHaveValue("false");
  });

  it("should change selected item", () => {
    let boolean: boolean = false;
    const onChangeSelectBoolean = (data: boolean): void => {
      boolean = data;
    };

    const { getByRole } = render(
      <InputSelectBoolean
        name="onChangeSelectBoolean"
        onChange={onChangeSelectBoolean}
        defaultValue={true}
      />
    );

    const inputSelectBooleanCombobox = getByRole("combobox");
    fireEvent.change(inputSelectBooleanCombobox, { target: { value: true } });

    expect(boolean).toEqual(true);
  });
});
