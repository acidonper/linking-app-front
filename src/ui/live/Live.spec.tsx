import React from "react";
import { Live } from "./Live";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { liveCards } from "../../utils/test";
import * as matchesLib from "../../infrastructure/suggestion/matches";
import * as unmatchesLib from "../../infrastructure/suggestion/unmatch";
import { screen, fireEvent } from "@testing-library/dom";

describe("Test React Multicomponent Live", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should have a Live component without cards", async () => {
    window.alert = () => {};
    const fakeCards = liveCards;
    const apiGetSuggestionsMock = jest
      .spyOn(matchesLib, "apiGetMatches")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    await act(async () => {
      ReactDOM.render(<Live />, container);
    });
    const LiveEmptyComments = screen.getAllByRole("heading");

    expect(LiveEmptyComments.length).toBe(2);
    expect(apiGetSuggestionsMock).toBeCalledTimes(1);
  });

  it("should have a Live component with a couple of cards", async () => {
    window.alert = () => {};
    const fakeCards = liveCards;
    jest
      .spyOn(matchesLib, "apiGetMatches")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    await act(async () => {
      ReactDOM.render(<Live />, container);
    });

    const nameTitle = screen.getAllByRole("heading");
    const images = screen.getAllByRole("img");
    const icons = screen.getAllByTestId("Icon");

    expect(images.length).toBe(2);
    expect(nameTitle[0]).toHaveTextContent("pepe");
    expect(nameTitle[1]).toHaveTextContent("pepa");
    expect(icons[0]).toHaveTextContent("favorite");
    expect(icons[1]).toHaveTextContent("close");
    expect(icons[2]).toHaveTextContent("favorite");
    expect(icons[3]).toHaveTextContent("close");
  });

  it("should discard a card", async () => {
    window.alert = () => {};
    const fakeCards = liveCards;
    jest
      .spyOn(matchesLib, "apiGetMatches")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    const apiUnmatchMock = jest
      .spyOn(unmatchesLib, "apiUnmatch")
      .mockImplementationOnce(() => Promise.resolve("OK"));

    await act(async () => {
      ReactDOM.render(<Live />, container);
    });

    const nameTitle = screen.getAllByRole("heading");
    const images = screen.getAllByRole("img");
    const icons = screen.getAllByTestId("Icon");

    expect(images.length).toBe(2);
    expect(nameTitle[0]).toHaveTextContent("pepe");
    expect(nameTitle[1]).toHaveTextContent("pepa");
    expect(icons[0]).toHaveTextContent("favorite");
    expect(icons[1]).toHaveTextContent("close");
    expect(icons[2]).toHaveTextContent("favorite");
    expect(icons[3]).toHaveTextContent("close");

    await act(async () => {
      fireEvent.click(icons[1]);
    });

    const newNameTitle = screen.getAllByRole("heading");
    const newImages = screen.getAllByRole("img");
    const newIcons = screen.getAllByTestId("Icon");

    expect(newImages.length).toBe(1);
    expect(newNameTitle[0]).toHaveTextContent("pepa");
    expect(newIcons[0]).toHaveTextContent("favorite");
    expect(newIcons[1]).toHaveTextContent("close");
    expect(apiUnmatchMock).toBeCalledTimes(1);
  });
});
