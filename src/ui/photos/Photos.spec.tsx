import React from "react";
import { Photos } from "./Photos";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { screen, fireEvent } from "@testing-library/dom";
import * as photosLib from "../../infrastructure/profile/photos";

describe("Test React Multicomponent Photos", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should have a Photo component without content", () => {
    const { getAllByRole } = render(<Photos />);

    const photosEmptyComments = getAllByRole("img");

    expect(photosEmptyComments.length).toBe(1);
  });

  it("should have a Photo component with a couple of photo cards", async () => {
    window.alert = () => {};
    jest
      .spyOn(photosLib, "apiGetPhotos")
      .mockImplementation(() =>
        Promise.resolve(["http://photo01.com", "http://photo02.com"])
      );
    jest.spyOn(Storage.prototype, "getItem");

    await act(async () => {
      ReactDOM.render(<Photos />, container);
    });

    const images = screen.getAllByRole("img");

    expect(images.length).toBe(2);
  });
});
