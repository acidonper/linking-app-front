import React from "react";
import { InputPass } from "./InputPass";
import { render, fireEvent } from "@testing-library/react";

describe("Test InputPass React Component", () => {
  it("should have an input with type password", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputPass value={""} label="InputPassid" onChange={mockFn} />
    );

    const inputPass = getByTestId("Password");

    expect(inputPass).toHaveAttribute("type", "password");
    expect(inputPass).toHaveAttribute("value", "");
  });

  it("should have a required input with type password", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputPass
        value={""}
        label="InputPassid"
        onChange={mockFn}
        required={true}
      />
    );

    const inputPass = getByTestId("Password");

    expect(inputPass).toHaveAttribute("required", "");
  });

  it("should have a secured input with type password", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputPass
        value={""}
        label="InputPassid"
        onChange={mockFn}
        security={true}
      />
    );

    const inputPass = getByTestId("Password");

    expect(inputPass).toHaveAttribute(
      "pattern",
      "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    );
  });

  it("should have a required and secured input with type password", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputPass
        value={""}
        label="InputPassid"
        onChange={mockFn}
        security={true}
        required={true}
      />
    );

    const inputPass = getByTestId("Password");

    expect(inputPass).toHaveAttribute(
      "pattern",
      "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    );
    expect(inputPass).toHaveAttribute("required", "");
  });

  it("should has been modified password field", () => {
    let password: string = "";
    const onChangeInputPass = (data: string): void => {
      password = data;
    };
    const { getByTestId } = render(
      <InputPass value={""} label="InputPassid" onChange={onChangeInputPass} />
    );

    const inputPass = getByTestId("Password");
    fireEvent.change(inputPass, { target: { value: "newpassword" } });

    expect(password).toBe("newpassword");
  });
});
