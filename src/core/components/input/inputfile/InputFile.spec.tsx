import React from "react";
import { InputFile } from "./InputFile";
import { render, fireEvent } from "@testing-library/react";

describe("Test InputFile React Component", () => {
  it("should have an input with type file", () => {
    const mockFn = jest.fn();

    const { getByLabelText } = render(
      <InputFile label="inputfileid" onChange={mockFn} content="Select File" />
    );

    const inputFile = getByLabelText("Select File");
    fireEvent.change(inputFile);

    expect(inputFile).toHaveAttribute("type", "file");
    expect(inputFile).toHaveAttribute("id", "inputfileid");
    expect(inputFile).toHaveAttribute("name", "inputfileid");
    expect(inputFile).toHaveAttribute("accept", "image/png, image/jpeg");
  });

  it("should attach a new file to input", async () => {
    const fakeFile = new File(["asd"], "fake.png", { type: "image/png" });
    let content: File = fakeFile;
    const onChangeInputFile = (data: FileList): void => {
      content = data[0];
    };
    const { getByLabelText, getByAltText } = render(
      <InputFile
        label="inputfileid"
        onChange={onChangeInputFile}
        content="Select File"
      />
    );

    const inputFile = getByLabelText("Select File");
    const file = new File(["asd"], "chucknorris.png", { type: "image/png" });
    fireEvent.change(inputFile, { target: { files: [file] } });

    expect(content.name).toBe("chucknorris.png");
  });
});
