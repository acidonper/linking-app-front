import React from "react";
import { Chat } from "./Chat";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { chatCards } from "../../utils/test";
import * as matchesLib from "../../infrastructure/suggestion/matches";
import { screen } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import { Card } from "../../domain/Card";

describe("Test React Multicomponent Chat", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should have a Chat component without cards", async () => {
    window.alert = () => {};
    const initSocket: SocketIOClient.Socket = {} as any;
    const fakeCards = chatCards;
    const apiGetSuggestionsMock = jest
      .spyOn(matchesLib, "apiGetMatches")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    await act(async () => {
      ReactDOM.render(
        <MemoryRouter initialEntries={["test"]}>
          <Chat socket={initSocket} />
        </MemoryRouter>,
        container
      );
    });
    const ChatEmptyComments = screen.getAllByRole("heading");

    expect(ChatEmptyComments.length).toBe(2);
    expect(apiGetSuggestionsMock).toBeCalledTimes(1);
  });

  it("should have a Chat component without 2 cards", async () => {
    window.alert = () => {};
    const initSocket: SocketIOClient.Socket = {} as any;
    const fakeCards = chatCards;
    jest
      .spyOn(matchesLib, "apiGetMatches")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    await act(async () => {
      ReactDOM.render(
        <MemoryRouter initialEntries={["test"]}>
          <Chat socket={initSocket} />
        </MemoryRouter>,
        container
      );
    });

    const images = screen.getAllByRole("img");
    const links = screen.getAllByRole("link");

    expect(images.length).toBe(2);
    expect(links[0]).toHaveTextContent("pepe");
    expect(links[1]).toHaveTextContent("pepa");
  });

  it("should have a message when component does not receive cards", async () => {
    window.alert = () => {};
    const initSocket: SocketIOClient.Socket = {} as any;
    const fakeCards: Card[] = [];
    jest
      .spyOn(matchesLib, "apiGetMatches")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    await act(async () => {
      ReactDOM.render(
        <MemoryRouter initialEntries={["test"]}>
          <Chat socket={initSocket} />
        </MemoryRouter>,
        container
      );
    });

    const heading = screen.getAllByRole("heading");

    expect(heading[0]).toHaveTextContent("Matches is coming soon!");
    expect(heading[1]).toHaveTextContent("Give Live a Chance!");
    expect(heading[2]).toHaveTextContent("Go to Pick...");
  });
});
