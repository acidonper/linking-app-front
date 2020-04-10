import React from "react";
import { InputText } from "./InputText";
import { render, fireEvent } from "@testing-library/react";

describe("Test InputText React Component", () => {
  it("should have a text input with regular text", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(
      <InputText value="" label="inputtextid" onChange={mockFn} type="text" />
    );

    const inputText = getByRole("textbox");

    expect(inputText).toHaveAttribute("type", "text");
    expect(inputText).toHaveAttribute("id", "inputtextid");
    expect(inputText).toHaveAttribute("placeholder", "inputtextid");
    expect(inputText).toHaveAttribute("value", "");
  });

  it("should have a required text input with regular text", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(
      <InputText
        value=""
        label="inputtextid"
        onChange={mockFn}
        type="text"
        required={true}
      />
    );

    const inputText = getByRole("textbox");

    expect(inputText).toHaveAttribute("required", "");
  });

  it("should have a text input with email", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputText value="" label="inputtextid" onChange={mockFn} type="email" />
    );

    const inputText = getByTestId("Text");

    expect(inputText).toHaveAttribute("type", "email");
    expect(inputText).toHaveAttribute("id", "inputtextid");
    expect(inputText).toHaveAttribute("placeholder", "inputtextid");
    expect(inputText).toHaveAttribute("value", "");
  });

  it("should have a required text input with email", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <InputText
        value=""
        label="inputtextid"
        onChange={mockFn}
        type="email"
        required={true}
      />
    );

    const inputText = getByTestId("Text");

    expect(inputText).toHaveAttribute("required", "");
  });

  it("should change input content with a regular text", () => {
    let text: string = "";
    const onChangeInputText = (data: string): void => {
      text = data;
    };

    const { getByRole } = render(
      <InputText
        value=""
        label="inputtextid"
        onChange={onChangeInputText}
        type="text"
      />
    );

    const inputText = getByRole("textbox");
    fireEvent.change(inputText, { target: { value: "NewText" } });

    expect(text).toEqual("NewText");
  });

  it("should change input content with an email", () => {
    let email: string = "";
    const onChangeInputEmail = (data: string): void => {
      email = data;
    };

    const { getByTestId } = render(
      <InputText
        value=""
        label="inputtextid"
        onChange={onChangeInputEmail}
        type="email"
        required={true}
      />
    );

    const inputText = getByTestId("Text");
    fireEvent.change(inputText, { target: { value: "root@example.com" } });

    expect(email).toEqual("root@example.com");
  });
});
