import axios from "axios";
import { User } from "../../domain/User";
import { user } from "../../utils/test";
import { apiModify } from "./modify";

jest.mock("axios");
axios.create = jest.fn(() => axios);

describe("Infrastructure -> Test modify library", () => {
  it("should send a user's profile modification request to the backend", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTkwODliZGNmOWRhZTI5NjBlNDIxNWEiLCJleHAiOjE1ODY1MzEwMzI4NTcsInVzZXJuYW1lIjoiQXNpZXJDaWRvbiJ9.mFYSH3TLj_DPpmy7H35AF5AyK4GTMulP4AxgxT0-JcY";
    const testUser: User = user;
    const response = {
      data: {
        message: "User Pepe modified",
      },
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    const modify = await apiModify(token, testUser);

    expect(modify).toBe("User Pepe modified");
  });
});
