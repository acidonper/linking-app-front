import { user, profileDto } from "../../utils/test";
import { User } from "../../domain/User";
import { User as ProfileDto } from "./profile-dto";
import { UserToProfileDtoMapper } from "./mapper-user-to-profile-dto";

describe("Infrastructure -> Test user to profile Dto mapper", () => {
  it("should give a profile Dto from an user", () => {
    const newUser: User = user;

    const newProfileDto = new UserToProfileDtoMapper();

    const userProfile: ProfileDto = newProfileDto.map(newUser);

    expect(userProfile).toStrictEqual(profileDto);
  });
});
