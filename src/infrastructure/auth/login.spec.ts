import { apiLogin, isAuthenticated, apiLogout } from "./login";
import axios from "axios";

jest.mock("axios");

describe("Infrastructure -> Test Login library", () => {
  it("should send a login request to the backend", async () => {
    const user = "user";
    const pass = "pass";
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTkwODliZGNmOWRhZTI5NjBlNDIxNWEiLCJleHAiOjE1ODY1MzEwMzI4NTcsInVzZXJuYW1lIjoiQXNpZXJDaWRvbiJ9.mFYSH3TLj_DPpmy7H35AF5AyK4GTMulP4AxgxT0-JcY";
    const response = {
      data: {
        message: {
          token:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTkwODliZGNmOWRhZTI5NjBlNDIxNWEiLCJleHAiOjE1ODY1MzEwMzI4NTcsInVzZXJuYW1lIjoiQXNpZXJDaWRvbiJ9.mFYSH3TLj_DPpmy7H35AF5AyK4GTMulP4AxgxT0-JcY",
        },
      },
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    const login = await apiLogin(user, pass);

    expect(login).toBe(token);
  });

  it("should return authentication status", () => {
    const authenticated = true;

    const response = isAuthenticated();

    expect(response).toBe(authenticated);
  });

  it("should logout", () => {
    const authenticated = false;

    apiLogout();
    const response = isAuthenticated();

    expect(response).toBe(authenticated);
  });
});
