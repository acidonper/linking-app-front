import React from "react";
import { Logout } from "./Logout";
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

describe("Test React Multicomponent Logout", () => {
  it("should have a Logout component", () => {
    const fakeFunction = () => {};
    const initSocket: SocketIOClient.Socket = {} as any;
    const { getByRole } = render(
      <Logout
        theme="header"
        text="testing"
        redirectPath="/test"
        onSubmit={fakeFunction}
        socket={initSocket}
      />
    );

    const botton = getByRole("button");

    expect(botton).toHaveTextContent("testing");
  });

  it("should have a Logout request", () => {
    const fakeFunction = jest.fn();
    const initSocket: SocketIOClient.Socket = {} as any;
    jest.spyOn(chatLib, "disconnectChat").mockImplementation(() => {
      return true;
    });
    const { getByRole } = render(
      <Logout
        theme="header"
        text="testing"
        redirectPath="/test"
        onSubmit={fakeFunction}
        socket={initSocket}
      />
    );

    const botton = getByRole("button");
    fireEvent.click(botton);

    expect(fakeFunction).toBeCalledTimes(1);
  });
});
