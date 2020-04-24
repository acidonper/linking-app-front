import React from "react";
import { Settings } from "./Settings";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import * as profileGetLib from "../../infrastructure/profile/obtain";
import * as profileModLib from "../../infrastructure/profile/modify";
import { user } from "../../utils/test";
import { screen, fireEvent } from "@testing-library/dom";

describe("Test React Multicomponent Settings", () => {
  let container: any;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should have a Settings component with a full form", async () => {
    window.alert = () => {};
    const fakeUser = user;
    const apiGetProfileMock = jest
      .spyOn(profileGetLib, "apiGetProfileSettings")
      .mockImplementationOnce(() => Promise.resolve(fakeUser));

    await act(async () => {
      ReactDOM.render(<Settings />, container);
    });

    const buttons = screen.getAllByRole("button");
    const profileAccess = screen.getAllByRole("textbox");
    const profileInformation = screen.getAllByRole("combobox");
    const agesOptions = screen.getAllByRole("spinbutton");

    expect(buttons[0]).toHaveTextContent("Save Changes");
    expect(profileAccess.length).toBe(4);
    expect(profileInformation.length).toBe(13);
    expect(agesOptions.length).toBe(2);
    expect(apiGetProfileMock).toBeCalledTimes(1);
  });

  it("should have a Settings component with a full form filled", async () => {
    window.alert = () => {};
    const fakeUser = user;
    jest
      .spyOn(profileGetLib, "apiGetProfileSettings")
      .mockImplementationOnce(() => Promise.resolve(fakeUser));

    await act(async () => {
      ReactDOM.render(<Settings />, container);
    });

    const form = screen.getByTestId("form");
    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const city = screen.getByLabelText("City");
    const gender = screen.getByLabelText("Gender");
    const education = screen.getByLabelText("Education");
    const physicalCondition = screen.getByLabelText("Physical Condition");
    const activity = screen.getByLabelText("Activity");
    const lifestyle = screen.getByLabelText("Lifestyle");
    const kidsLover = screen.getByLabelText("Kids Lover");
    const petsLover = screen.getByLabelText("Pets Lover");
    const culturalInterest = screen.getByLabelText("Cultural Interest");
    const sportCadence = screen.getByLabelText("Sport Cadence");
    const travelCadence = screen.getByLabelText("Travel Cadence");
    const owlOrSkyLark = screen.getByLabelText("Owl Or SkyLark");
    const sexualPreferences = screen.getByLabelText("Sexual Preferences");

    fireEvent.change(firstName, { target: { value: "test" } });
    fireEvent.change(lastName, { target: { value: "01" } });
    fireEvent.click(gender, { target: { value: "male" } });
    fireEvent.click(education, { target: { value: "elementary" } });
    fireEvent.click(physicalCondition, { target: { value: "thin" } });
    fireEvent.click(activity, { target: { value: "homeLover" } });
    fireEvent.click(lifestyle, { target: { value: "working" } });
    fireEvent.click(city, { target: { value: "Madrid" } });
    fireEvent.click(kidsLover, { target: { value: true } });
    fireEvent.click(petsLover, { target: { value: false } });
    fireEvent.click(culturalInterest, { target: { value: "low" } });
    fireEvent.click(sportCadence, { target: { value: "low" } });
    fireEvent.click(travelCadence, { target: { value: "low" } });
    fireEvent.click(owlOrSkyLark, { target: { value: "owl" } });
    fireEvent.click(sexualPreferences, { target: { value: "both" } });

    expect(form).toHaveFormValues({ "First Name": "test" });
    expect(form).toHaveFormValues({ "Last Name": "01" });
    expect(form).toHaveFormValues({ Gender: "male" });
    expect(form).toHaveFormValues({ Education: "elementary" });
    expect(form).toHaveFormValues({ "Physical Condition": "thin" });
    expect(form).toHaveFormValues({ Activity: "homeLover" });
    expect(form).toHaveFormValues({ Lifestyle: "working" });
    expect(form).toHaveFormValues({ City: "Madrid" });
    expect(form).toHaveFormValues({ "Kids Lover": "true" });
    expect(form).toHaveFormValues({ "Pets Lover": "false" });
    expect(form).toHaveFormValues({ "Cultural Interest": "low" });
    expect(form).toHaveFormValues({ "Travel Cadence": "low" });
    expect(form).toHaveFormValues({ "Owl Or SkyLark": "owl" });
    expect(form).toHaveFormValues({ "Sexual Preferences": "both" });
  });

  it("should submit a Settings component", async () => {
    window.alert = () => {};
    const fakeUser = user;
    jest
      .spyOn(profileGetLib, "apiGetProfileSettings")
      .mockImplementationOnce(() => Promise.resolve(fakeUser));

    const apiModifyMock = jest
      .spyOn(profileModLib, "apiModify")
      .mockImplementationOnce(() => Promise.resolve(fakeUser));

    await act(async () => {
      ReactDOM.render(<Settings />, container);
    });

    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[0]);

    expect(apiModifyMock).toBeCalledTimes(1);
  });
});
