import axios from "axios";
import { apiAddBeloved } from "./beloved";
import { profileDto, userCard } from "../../utils/test";

jest.mock("axios");
axios.create = jest.fn(() => axios);

describe("Infrastructure -> Test beloved library", () => {
  it("should add beloved", async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve("OK"));
    const apiAddBelovedMock = await apiAddBeloved("token", "pepe", "pepa");

    expect(apiAddBelovedMock).toBe("OK");
  });
});
