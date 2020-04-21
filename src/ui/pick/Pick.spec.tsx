import React from "react";
import { Pick } from "./Pick";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { pickCards } from "../../utils/test";
import * as suggestionLib from "../../infrastructure/suggestion/suggestions";
import * as belovedLib from "../../infrastructure/suggestion/beloved";

import { screen, fireEvent } from "@testing-library/dom";

describe("Test React Multicomponent Pick", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should have a Pick component without cards", () => {
    const { getAllByRole } = render(<Pick />);

    const pickEmptyComments = getAllByRole("heading");

    expect(pickEmptyComments.length).toBe(3);
  });

  it("should have a Pick component with a couple of cards", async () => {
    window.alert = () => {};
    const fakeCards = pickCards;
    jest
      .spyOn(suggestionLib, "apiGetSuggestions")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    await act(async () => {
      ReactDOM.render(<Pick />, container);
    });

    const nameTitle = screen.getAllByRole("heading");
    const images = screen.getAllByRole("img");
    const ages = screen.getAllByTestId("age");
    const genders = screen.getAllByTestId("gender");
    const icons = screen.getAllByTestId("Icon");

    expect(images.length).toBe(2);
    expect(nameTitle[0]).toHaveTextContent("pepe");
    expect(nameTitle[1]).toHaveTextContent("pepa");
    expect(ages[0]).toHaveTextContent("18");
    expect(ages[1]).toHaveTextContent("19");
    expect(genders[0]).toHaveTextContent("male");
    expect(genders[1]).toHaveTextContent("female");
    expect(icons[0]).toHaveTextContent("close");
    expect(icons[1]).toHaveTextContent("favorite_border");
    expect(icons[2]).toHaveTextContent("close");
    expect(icons[3]).toHaveTextContent("favorite_border");
  });

  it("should a suggestion card beloved", async () => {
    window.alert = () => {};
    const fakeCards = pickCards;
    jest
      .spyOn(suggestionLib, "apiGetSuggestions")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    jest
      .spyOn(belovedLib, "apiAddBeloved")
      .mockImplementationOnce(() => Promise.resolve("OK"));

    await act(async () => {
      ReactDOM.render(<Pick />, container);
    });

    const nameTitle = screen.getAllByRole("heading");
    const images = screen.getAllByRole("img");
    const ages = screen.getAllByTestId("age");
    const genders = screen.getAllByTestId("gender");
    const icons = screen.getAllByTestId("Icon");

    expect(images.length).toBe(2);
    expect(nameTitle[0]).toHaveTextContent("pepe");
    expect(nameTitle[1]).toHaveTextContent("pepa");
    expect(ages[0]).toHaveTextContent("18");
    expect(ages[1]).toHaveTextContent("19");
    expect(genders[0]).toHaveTextContent("male");
    expect(genders[1]).toHaveTextContent("female");
    expect(icons[0]).toHaveTextContent("close");
    expect(icons[1]).toHaveTextContent("favorite_border");
    expect(icons[2]).toHaveTextContent("close");
    expect(icons[3]).toHaveTextContent("favorite_border");

    await act(async () => {
      fireEvent.click(icons[1]);
    });

    const newNameTitle = screen.getAllByRole("heading");
    const newImages = screen.getAllByRole("img");
    const newAges = screen.getAllByTestId("age");
    const newGenders = screen.getAllByTestId("gender");
    const newIcons = screen.getAllByTestId("Icon");

    expect(newImages.length).toBe(1);
    expect(newNameTitle[0]).toHaveTextContent("pepa");
    expect(newAges[0]).toHaveTextContent("19");
    expect(newGenders[0]).toHaveTextContent("female");
    expect(newIcons[0]).toHaveTextContent("close");
    expect(newIcons[1]).toHaveTextContent("favorite_border");
  });

  it("should discard a card", async () => {
    window.alert = () => {};
    const fakeCards = pickCards;
    jest
      .spyOn(suggestionLib, "apiGetSuggestions")
      .mockImplementationOnce(() => Promise.resolve(fakeCards));

    await act(async () => {
      ReactDOM.render(<Pick />, container);
    });

    const nameTitle = screen.getAllByRole("heading");
    const images = screen.getAllByRole("img");
    const ages = screen.getAllByTestId("age");
    const genders = screen.getAllByTestId("gender");
    const icons = screen.getAllByTestId("Icon");

    expect(images.length).toBe(2);
    expect(nameTitle[0]).toHaveTextContent("pepe");
    expect(nameTitle[1]).toHaveTextContent("pepa");
    expect(ages[0]).toHaveTextContent("18");
    expect(ages[1]).toHaveTextContent("19");
    expect(genders[0]).toHaveTextContent("male");
    expect(genders[1]).toHaveTextContent("female");
    expect(icons[0]).toHaveTextContent("close");
    expect(icons[1]).toHaveTextContent("favorite_border");
    expect(icons[2]).toHaveTextContent("close");
    expect(icons[3]).toHaveTextContent("favorite_border");

    await act(async () => {
      fireEvent.click(icons[0]);
    });

    const newNameTitle = screen.getAllByRole("heading");
    const newImages = screen.getAllByRole("img");
    const newAges = screen.getAllByTestId("age");
    const newGenders = screen.getAllByTestId("gender");
    const newIcons = screen.getAllByTestId("Icon");

    expect(newImages.length).toBe(1);
    expect(newNameTitle[0]).toHaveTextContent("pepa");
    expect(newAges[0]).toHaveTextContent("19");
    expect(newGenders[0]).toHaveTextContent("female");
    expect(newIcons[0]).toHaveTextContent("close");
    expect(newIcons[1]).toHaveTextContent("favorite_border");
  });
});
