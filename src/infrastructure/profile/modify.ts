import axios from "axios";
import { User } from "../../domain/User";
import { User as UserProfile } from "./profile-dto";
import { UserToProfileDtoMapper } from "./mapper-user-to-profile-dto";

export const apiModify = async (token: string, userModified: User) => {
  const url = process.env.REACT_APP_LINKING_APP_BACK_URL + "/api/users/profile";

  const createAxios = axios.create({
    timeout: 3000,
    headers: { Authorization: "Bearer " + token },
  });

  const data = new UserToProfileDtoMapper();

  const datadto: UserProfile = data.map(userModified);

  try {
    const response = await createAxios.post(url, datadto);
    return response.data.message;
  } catch (error) {
    return error;
  }
};
