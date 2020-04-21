import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import * as authLib from "../../infrastructure/auth/login";
import * as sockLib from "../../infrastructure/chat/chat";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Test React Multicomponent Header", () => {
  it("should have a header component", () => {
    const initSocket: SocketIOClient.Socket = {} as any;
    const { getByRole } = render(<Header socket={initSocket} />);

    const title = getByRole("heading");
    const botton = getByRole("button");

    expect(title).toHaveTextContent("Linking");
    expect(botton).toHaveTextContent("Logout");
  });

  it("should logout through button", () => {
    const initSocket: SocketIOClient.Socket = {} as any;
    const { getByRole } = render(<Header socket={initSocket} />);
    jest.spyOn(authLib, "apiLogout").mockImplementation(() => {});
    jest.spyOn(sockLib, "disconnectChat").mockImplementation(() => {
      return true;
    });

    const botton = getByRole("button");

    fireEvent.click(botton);

    expect(botton).toHaveTextContent("Logout");
  });
});
