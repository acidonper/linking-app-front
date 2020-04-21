import React from "react";
import { Frontal } from "./Frontal";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import * as authLib from "../../infrastructure/auth/login";
import * as signupLib from "../../infrastructure/profile/signup";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Test React Multicomponent Frontal", () => {
  it("should have a frontal component", () => {
    const { getAllByRole } = render(<Frontal />);

    const titles = getAllByRole("heading");
    const bottons = getAllByRole("button");

    expect(titles.length).toBe(3);
    expect(bottons[0]).toHaveTextContent("Signup");
    expect(bottons[1]).toHaveTextContent("Login");
  });

  it("should display signup form pressing Singup button", () => {
    jest
      .spyOn(signupLib, "apiSignup")
      .mockImplementation(() => Promise.resolve("user pepe created"));
    const { getAllByRole, getAllByText } = render(<Frontal />);

    const bottons = getAllByRole("button");

    fireEvent.click(bottons[0]);
    const divSignup = getAllByText("Linking App Registration");

    expect(divSignup.length).toBe(1);
  });

  it("should display login form pressing Login button", () => {
    jest
      .spyOn(authLib, "apiLogin")
      .mockImplementation(() => Promise.resolve({ token: "token" }));
    const { getAllByRole, getAllByText } = render(<Frontal />);

    const bottons = getAllByRole("button");

    fireEvent.click(bottons[1]);
    const divLogin = getAllByText("Linking App Login");

    expect(divLogin.length).toBe(1);
  });
});
