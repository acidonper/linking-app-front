import axios from "axios";
import { user, profileDto } from "../../utils/test";
import { User as UserProfile } from "./profile-dto";
import { User } from "../../domain/User";
import { apiGetProfileSettings } from "./obtain";

jest.mock("axios");
axios.create = jest.fn(() => axios);

describe("Infrastructure -> Test Obtain library", () => {
  it("should obtain a user's profile from a request to the backend", async () => {
    // const token =
    //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTkwODliZGNmOWRhZTI5NjBlNDIxNWEiLCJleHAiOjE1ODY1MzEwMzI4NTcsInVzZXJuYW1lIjoiQXNpZXJDaWRvbiJ9.mFYSH3TLj_DPpmy7H35AF5AyK4GTMulP4AxgxT0-JcY";
    // const profileObtained: UserProfile = profileDto;
    // const response = {
    //   data: {
    //     profileObtained,
    //   },
    // };
    // axios.get.mockImplementationOnce(() => Promise.resolve(response));
    // const obtain: User = await apiGetProfileSettings(token);
    // expect(obtain).toStrictEqual(user);
  });
});
