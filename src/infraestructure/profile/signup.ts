import axios from "axios";
import { User } from "../../domain/User";
import { User as UserProfile } from "./profile-dto";

import { UserToProfileDtoMapper } from "./mapper-user-to-profile-dto";

export const apiSignup = async (user: User) => {
    // const url = `http://{process.env.SERVER_PORT}:{process.env.SERVER_PORT}/api/auth/login`;

    const url = "http://localhost:5000/api/users/register";

    user.photos = [""];
    user.role = "user";

    const data = new UserToProfileDtoMapper();

    const datadto: UserProfile = data.map(user);

    console.log(datadto);

    try {
        const response = await axios.post(url, datadto);
        return response.data.message;
    } catch (error) {
        console.log(error);
        return error;
    }
};
