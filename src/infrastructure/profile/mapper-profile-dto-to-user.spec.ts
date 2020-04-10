import { user, profileDto } from "../../utils/test";
import { User } from "../../domain/User";
import { User as ProfileDto } from "./profile-dto";
import { ProfileDtoToUserMapper } from "./mapper-profile-dto-to-user";

describe("Infrastructure -> Test profile Dto to user mapper", () => {
  it("should give an User from a profile Dto", () => {
    const userProfileDto: ProfileDto = profileDto;
    const newUser = new ProfileDtoToUserMapper();

    const userUser: User = newUser.map(userProfileDto);

    expect(userUser).toStrictEqual(user);
  });
});
