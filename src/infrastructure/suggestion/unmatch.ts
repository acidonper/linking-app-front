import axios from "axios";

export const apiUnmatch = async (
    token: string,
    username: string,
    suggestion: string
): Promise<string> => {
    const url =
        process.env.REACT_APP_LINKING_APP_URL +
        "/api/users/matches?id=" +
        username;

    const body = {
        suggestionID: suggestion
    };

    const createAxios = axios.create({
        timeout: 3000,
        headers: { Authorization: "Bearer " + token }
    });

    try {
        await createAxios.delete(url, { data: body });
        return "OK";
    } catch (error) {
        return error;
    }
};
