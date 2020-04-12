import React from "react";
import { Settings } from "./Settings";
import { render, fireEvent } from "@testing-library/react";

describe("Test React Multicomponent Settings", () => {
  it("should have a Settings component with a full form", () => {
    const { getAllByRole } = render(<Settings />);

    const buttons = getAllByRole("button");
    const profileAccess = getAllByRole("textbox");
    const profileInformation = getAllByRole("combobox");
    const agesOptions = getAllByRole("spinbutton");

    expect(buttons[0]).toHaveTextContent("Save Changes");
    expect(profileAccess.length).toBe(4);
    expect(profileInformation.length).toBe(13);
    expect(agesOptions.length).toBe(2);
  });

  it("should have a Settings component with a full form filled", async () => {
    const { getByLabelText, getByTestId } = render(<Settings />);

    const form = getByTestId("form");
    const firstName = getByLabelText("First Name");
    const lastName = getByLabelText("Last Name");
    const city = getByLabelText("City");
    const gender = getByLabelText("Gender");
    const education = getByLabelText("Education");
    const physicalCondition = getByLabelText("Physical Condition");
    const activity = getByLabelText("Activity");
    const lifestyle = getByLabelText("Lifestyle");
    const kidsLover = getByLabelText("Kids Lover");
    const petsLover = getByLabelText("Pets Lover");
    const culturalInterest = getByLabelText("Cultural Interest");
    const sportCadence = getByLabelText("Sport Cadence");
    const travelCadence = getByLabelText("Travel Cadence");
    const owlOrSkyLark = getByLabelText("Owl Or SkyLark");
    const sexualPreferences = getByLabelText("Sexual Preferences");

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
    const mockFn = jest.fn();
    const { getAllByRole, getByTestId } = render(<Settings />);

    const form = getByTestId("form");
    form.onsubmit = mockFn;
    const buttons = getAllByRole("button");

    fireEvent.click(buttons[0]);

    expect(mockFn).toBeCalledTimes(1);
  });
});
