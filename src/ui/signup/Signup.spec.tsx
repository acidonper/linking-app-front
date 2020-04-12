import React from "react";
import { Signup } from "./Signup";
import { render, fireEvent } from "@testing-library/react";
import { signupUser } from "../../utils/test";

describe("Test React Multicomponent Signup", () => {
  it("should have a signup component with a full form", () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    const mockFn = jest.fn();
    const { getAllByRole, getByText, getByLabelText } = render(
      <Signup
        title="testingSignupTitle"
        text="testingSignupButton"
        close={mockFn}
        submit={mockFn}
      />
    );
    const title = getByText("testingSignupTitle");
    const buttons = getAllByRole("button");
    const profileAccess = getAllByRole("textbox");
    const profileInformation = getAllByRole("combobox");
    const agesOptions = getAllByRole("spinbutton");
    const pass = getByLabelText("Password");
    const passViewer = getByText("remove_red_eye");

    expect(title).toBe;
    expect(buttons[0]).toHaveTextContent("testingSignupButton");
    expect(buttons[1]).toHaveTextContent("Close");
    expect(profileAccess.length).toBe(4);
    expect(profileInformation.length).toBe(13);
    expect(agesOptions.length).toBe(3);
    expect(pass).toBe;
    expect(passViewer).toBe;
    window.alert = jsdomAlert;
  });

  it("should have a signup component with a full form filled", async () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    const mockFn = jest.fn();
    const { getByLabelText, getByTestId } = render(
      <Signup
        title="testingSignupTitle"
        text="testingSignupButton"
        close={mockFn}
        submit={mockFn}
      />
    );

    const form = getByTestId("form");
    const firstName = getByLabelText("First Name");
    const lastName = getByLabelText("Last Name");
    const username = getByLabelText("Username");
    const email = getByLabelText("Email");
    const password = getByLabelText("Password");
    const gender = getByLabelText("Gender");
    const education = getByLabelText("Education");
    const physicalCondition = getByLabelText("Physical Condition");
    const activity = getByLabelText("Activity");
    const lifestyle = getByLabelText("Lifestyle");
    const city = getByLabelText("City");
    const kidsLover = getByLabelText("Kids Lover");
    const petsLover = getByLabelText("Pets Lover");
    const culturalInterest = getByLabelText("Cultural Interest");
    const sportCadence = getByLabelText("Sport Cadence");
    const travelCadence = getByLabelText("Travel Cadence");
    const owlOrSkyLark = getByLabelText("Owl Or SkyLark");
    const sexualPreferences = getByLabelText("Sexual Preferences");

    fireEvent.change(firstName, { target: { value: "test" } });
    fireEvent.change(lastName, { target: { value: "01" } });
    fireEvent.change(username, { target: { value: "test01" } });
    fireEvent.change(email, { target: { value: "test01@example.com" } });
    fireEvent.change(password, { target: { value: "test01password" } });
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
    expect(form).toHaveFormValues({ Username: "test01" });
    expect(form).toHaveFormValues({ Email: "test01@example.com" });
    expect(form).toHaveFormValues({ Password: "test01password" });
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
    window.alert = jsdomAlert;
  });

  it("should submit a signup component with a full form filled", async () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    const mockFn = jest.fn();
    const { getByLabelText, getByTestId, getAllByRole } = render(
      <Signup
        title="testingSignupTitle"
        text="testingSignupButton"
        close={mockFn}
        submit={mockFn}
      />
    );

    const firstName = getByLabelText("First Name");
    const lastName = getByLabelText("Last Name");
    const username = getByLabelText("Username");
    const email = getByLabelText("Email");
    const password = getByLabelText("Password");
    const gender = getByLabelText("Gender");
    const education = getByLabelText("Education");
    const physicalCondition = getByLabelText("Physical Condition");
    const activity = getByLabelText("Activity");
    const lifestyle = getByLabelText("Lifestyle");
    const city = getByLabelText("City");
    const kidsLover = getByLabelText("Kids Lover");
    const petsLover = getByLabelText("Pets Lover");
    const culturalInterest = getByLabelText("Cultural Interest");
    const sportCadence = getByLabelText("Sport Cadence");
    const travelCadence = getByLabelText("Travel Cadence");
    const owlOrSkyLark = getByLabelText("Owl Or SkyLark");
    const sexualPreferences = getByLabelText("Sexual Preferences");
    const buttons = getAllByRole("button");

    fireEvent.change(firstName, { target: { value: "test" } });
    fireEvent.change(lastName, { target: { value: "01" } });
    fireEvent.change(username, { target: { value: "test01" } });
    fireEvent.change(email, { target: { value: "test01@example.com" } });
    fireEvent.change(password, { target: { value: "test01password" } });
    fireEvent.change(gender, { target: { value: "male" } });
    fireEvent.change(education, { target: { value: "elementary" } });
    fireEvent.change(physicalCondition, { target: { value: "thin" } });
    fireEvent.change(activity, { target: { value: "homeLover" } });
    fireEvent.change(lifestyle, { target: { value: "working" } });
    fireEvent.change(city, { target: { value: "Madrid" } });
    fireEvent.change(kidsLover, { target: { value: true } });
    fireEvent.change(petsLover, { target: { value: false } });
    fireEvent.change(culturalInterest, { target: { value: "low" } });
    fireEvent.change(sportCadence, { target: { value: "low" } });
    fireEvent.change(travelCadence, { target: { value: "low" } });
    fireEvent.change(owlOrSkyLark, { target: { value: "owl" } });
    fireEvent.change(sexualPreferences, { target: { value: "both" } });
    fireEvent.click(buttons[0]);

    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith(signupUser);
    window.alert = jsdomAlert;
  });
});
