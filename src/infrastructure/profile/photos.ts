import axios from "axios";

const url = process.env.REACT_APP_LINKING_APP_URL + "/api/users/photos";

export const apiGetPhotos = async (token: string): Promise<string[]> => {
  const createAxios = axios.create({
    timeout: 3000,
    headers: { Authorization: "Bearer " + token },
  });

  try {
    const response = await createAxios.get(url);
    const responsePhotos = response.data;
    return responsePhotos.userPhotos.photos;
  } catch (error) {
    return error;
  }
};

export const apiDeletePhoto = async (
  token: string,
  photo: string
): Promise<string[]> => {
  const createAxios = axios.create({
    timeout: 3000,
    headers: { Authorization: "Bearer " + token },
  });

  const data = {
    photo: photo,
  };

  try {
    const response = await createAxios.delete(url, { data });
    const responsePhotos = response.data;
    return responsePhotos.userPhotos.photos;
  } catch (error) {
    return error;
  }
};

export const apiUploadPhoto = async (
  token: string,
  photo: string | ArrayBuffer | null
): Promise<string[]> => {
  const createAxios = axios.create({
    timeout: 3000,
    headers: { Authorization: "Bearer " + token },
  });

  try {
    const response = await createAxios.post(url, { photo });
    const responsePhotos = response.data;
    return responsePhotos.userPhotos.photos;
  } catch (error) {
    return error;
  }
};
