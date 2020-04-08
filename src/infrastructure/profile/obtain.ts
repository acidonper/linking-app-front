import axios from "axios";
import { User } from "../../domain/User";
import { User as UserProfile } from "./profile-dto";
import { ProfileDtoToUserMapper } from "./mapper-profile-dto-to-user";

export const apiGetProfileSettings = async (token: string): Promise<User> => {
  const url = process.env.REACT_APP_LINKING_APP_BACK_URL + "/api/users/profile";

  const createAxios = axios.create({
    timeout: 3000,
    headers: { Authorization: "Bearer " + token },
  });

  try {
    const response = await createAxios.get(url);
    const responseUserProfileDto: UserProfile = response.data;
    const dataDto = new ProfileDtoToUserMapper();
    const userProfile: User = dataDto.map(responseUserProfileDto);
    return userProfile;
  } catch (error) {
    return error;
  }
};
