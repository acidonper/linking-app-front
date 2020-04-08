import axios from "axios";
import { User } from "../../domain/User";
import { User as UserProfile } from "./profile-dto";
import { UserToProfileDtoMapper } from "./mapper-user-to-profile-dto";

export const apiSignup = async (user: User) => {
  const url =
    process.env.REACT_APP_LINKING_APP_BACK_URL + "/api/users/register";

  user.photos = [""];
  user.role = "user";

  const data = new UserToProfileDtoMapper();

  const datadto: UserProfile = data.map(user);

  try {
    const response = await axios.post(url, datadto);
    return response.data.message;
  } catch (error) {
    return error;
  }
};
