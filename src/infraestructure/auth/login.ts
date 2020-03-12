import axios from "axios";

export const apiLogin = async (username: string, passsword: string) => {
    // const url = `http://{process.env.SERVER_PORT}:{process.env.SERVER_PORT}/api/auth/login`;

    const url = "http://localhost:5000/api/auth/login";
    const data = {
        username: username,
        password: passsword
    };

    try {
        const response = await axios.post(url, data);
        return response.data.message.token;
    } catch (error) {
        return error;
    }
};
