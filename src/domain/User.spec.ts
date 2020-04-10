import { User } from "./User";
import { user } from "../utils/test";

describe("Test User Interface", () => {
  it("should instantiate a user", () => {
    let testUser: User;
    testUser = user;

    expect(testUser).toBe(user);
  });
});
