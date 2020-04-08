import axios from "axios";

export const apiAddBeloved = async (
  token: string,
  username: string,
  suggestion: string
): Promise<string> => {
  const url =
    process.env.REACT_APP_LINKING_APP_BACK_URL +
    "/api/users/beloveds/?id=" +
    username;

  const body = {
    suggestionID: suggestion,
  };

  const createAxios = axios.create({
    timeout: 3000,
    headers: { Authorization: "Bearer " + token },
  });

  try {
    await createAxios.post(url, body);
    return "OK";
  } catch (error) {
    return error;
  }
};
