import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import * as chatLib from "../../infrastructure/chat/chat";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Test React Multicomponent Login", () => {
  it("should have a Login component", () => {
    const fakeFunction = () => {};
    const initSocket: SocketIOClient.Socket = {} as any;
    const { getAllByRole } = render(
      <Login
        title="testingTitle"
        text="testing"
        redirectPath="/test"
        close={fakeFunction}
        submit={fakeFunction}
      />
    );

    const buttons = getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("testing");
    expect(buttons[1]).toHaveTextContent("Close");
  });

  it("should have a Login request", () => {
    window.alert = () => {};

    const fakeLoginFunction = jest.fn();
    const fakeCloseFunction = jest.fn();

    const { getAllByRole } = render(
      <Login
        title="testingTitle"
        text="testing"
        redirectPath="/test"
        close={fakeCloseFunction}
        submit={fakeLoginFunction}
      />
    );

    const buttons = getAllByRole("button");

    fireEvent.click(buttons[0]);

    expect(fakeLoginFunction).toBeCalledTimes(1);
  });

  it("should have a Close Login View request", () => {
    window.alert = () => {};

    const fakeLoginFunction = jest.fn();
    const fakeCloseFunction = jest.fn();

    const { getAllByRole } = render(
      <Login
        title="testingTitle"
        text="testing"
        redirectPath="/test"
        close={fakeCloseFunction}
        submit={fakeLoginFunction}
      />
    );

    const buttons = getAllByRole("button");

    fireEvent.click(buttons[1]);

    expect(fakeCloseFunction).toBeCalledTimes(1);
  });
});
