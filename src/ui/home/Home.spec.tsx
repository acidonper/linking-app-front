import React from "react";
import { Home } from "./Home";
import { render } from "@testing-library/react";
import * as chatLib from "../../infrastructure/chat/chat";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.doMock("../header/Header", () => {
  "<div>Header</div>";
});
jest.mock("../sidebar/Sidebar", () => {
  "<div>Sidebar</div>";
});
jest.mock("../pick/Pick", () => {
  "<div>Pick</div>";
});
jest.mock("../live/Live", () => {
  "<div>Live</div>";
});
jest.mock("../chat/Chat", () => {
  "<div>Chat</div>";
});
jest.mock("../settings/Settings", () => {
  "<div>Settings</div>";
});
jest.mock("../photos/Photos", () => {
  "<div>Photos</div>";
});
jest.mock("../footer/Footer", () => {
  "<div>Footer</div>";
});

const initSocket: SocketIOClient.Socket = {} as any;
jest.spyOn(chatLib, "connectChat").mockImplementation(() => {
  const initSocket: SocketIOClient.Socket = {} as any;
  return initSocket;
});

jest.spyOn(Storage.prototype, "getItem");

describe("Test React Multicomponent Home", () => {
  it("should have a Home component", () => {
    const { getAllByRole } = render(<Home />);

    const titles = getAllByRole("heading");

    expect(titles.length).toBe(3);
  });

  // it("should display signup form pressing Singup button", () => {
  //   jest
  //     .spyOn(signupLib, "apiSignup")
  //     .mockImplementation(() => Promise.resolve("user pepe created"));
  //   const { getAllByRole, getAllByText } = render(<Home />);

  //   const bottons = getAllByRole("button");

  //   fireEvent.click(bottons[0]);
  //   const divSignup = getAllByText("Linking App Registration");

  //   expect(divSignup.length).toBe(1);
  // });

  // it("should display login form pressing Login button", () => {
  //   jest
  //     .spyOn(authLib, "apiLogin")
  //     .mockImplementation(() => Promise.resolve({ token: "token" }));
  //   const { getAllByRole, getAllByText } = render(<Home />);

  //   const bottons = getAllByRole("button");

  //   fireEvent.click(bottons[1]);
  //   const divLogin = getAllByText("Linking App Login");

  //   expect(divLogin.length).toBe(1);
  // });
});
