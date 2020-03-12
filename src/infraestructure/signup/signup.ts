import axios from "axios";
import { User } from "../../domain/User";

export const apiSignup = async (user: User) => {
    // const url = `http://{process.env.SERVER_PORT}:{process.env.SERVER_PORT}/api/auth/login`;

    const url = "http://localhost:5000/api/users/register";
    const data = user;

    try {
        const response = await axios.post(url, data);
        return response.data.message;
    } catch (error) {
        console.log(error);
        return error;
    }
};
