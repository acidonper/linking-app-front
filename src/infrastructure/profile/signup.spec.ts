import axios from "axios";
import { apiSignup } from "./signup";
import { user } from "../../utils/test";

jest.mock("axios");
axios.create = jest.fn(() => axios);

describe("Infrastructure -> Test Signup library", () => {
  it("should create a new user", async () => {
    const response = {
      data: {
        message: "User Pepe registered",
      },
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    const addUser = await apiSignup(user);

    expect(addUser).toBe("User Pepe registered");
  });
});
