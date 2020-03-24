import axios from "axios";

let authenticated: boolean = false;

export const apiLogin = async (username: string, passsword: string) => {
    const url = process.env.REACT_APP_LINKING_APP_URL + "/api/auth/login";

    const data = {
        username: username,
        password: passsword
    };

    try {
        const response = await axios.post(url, data);
        authenticated = true;
        return response.data.message.token;
    } catch (error) {
        return error;
    }
};

export const apiLogout = (): void => {
    authenticated = false;
};

export const isAuthenticated = (): boolean => {
    return authenticated;
};
