import React from "react";
import { Conversation } from "./Conversation";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import * as chatLib from "../../infrastructure/chat/chat";
import { screen } from "@testing-library/dom";
import { fireEvent } from "@testing-library/react";

describe("Test React Multicomponent Conversation", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should have a Conversation component", async () => {
    window.alert = () => {};
    const initSocket: SocketIOClient.Socket = {} as any;
    const joinChatMock = jest
      .spyOn(chatLib, "joinChat")
      .mockImplementationOnce(() => true);

    await act(async () => {
      ReactDOM.render(
        <Conversation
          socket={initSocket}
          matchPhoto="http://photo1.example.com"
          matchUsername="pepe"
        />,
        container
      );
    });

    const image = screen.getByRole("img");
    const title = screen.getByRole("heading");
    const button = screen.getByRole("button");
    const textInput = screen.getByRole("textbox");
    const message = screen.getAllByRole("listitem");

    expect(image).toHaveAttribute("src", "http://photo1.example.com");
    expect(title).toHaveTextContent("pepe");
    expect(button).toHaveTextContent("Send");
    expect(textInput).toHaveAttribute("name", "Message");
    expect(message.length).toBe(1);
    expect(joinChatMock).toBeCalledTimes(1);
  });

  it("should have a Conversation component and send a message", async () => {
    window.alert = () => {};
    const initSocket: SocketIOClient.Socket = {} as any;
    jest.spyOn(chatLib, "joinChat").mockImplementationOnce(() => true);
    const messageChatMock = jest
      .spyOn(chatLib, "messageChat")
      .mockImplementationOnce(() => true);

    await act(async () => {
      ReactDOM.render(
        <Conversation
          socket={initSocket}
          matchPhoto="http://photo1.example.com"
          matchUsername="pepe"
        />,
        container
      );
    });

    const button = screen.getByRole("button");
    const textInput = screen.getByRole("textbox");

    fireEvent.change(textInput, { target: { value: "test" } });
    fireEvent.click(button);

    expect(messageChatMock).toBeCalledTimes(1);
  });
});
