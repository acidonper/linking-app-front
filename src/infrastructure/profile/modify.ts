import axios from "axios";
import { User } from "../../domain/User";
import { User as UserProfile } from "./profile-dto";
import { UserToProfileDtoMapper } from "./mapper-user-to-profile-dto";

export const apiModify = async (user: User) => {
    //
    // TODO - Implenent and use profile modification backends and sent TOKEN
    //

    const url = process.env.REACT_APP_LINKING_APP_URL + "/api/users/register";

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
