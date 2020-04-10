import axios from "axios";
import { apiGetPhotos, apiDeletePhoto, apiUploadPhoto } from "./photos";

jest.mock("axios");
axios.create = jest.fn(() => axios);

describe("Infrastructure -> Test photos library", () => {
  it("should get user photos", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTkwODliZGNmOWRhZTI5NjBlNDIxNWEiLCJleHAiOjE1ODY1MzEwMzI4NTcsInVzZXJuYW1lIjoiQXNpZXJDaWRvbiJ9.mFYSH3TLj_DPpmy7H35AF5AyK4GTMulP4AxgxT0-JcY";
    const response = {
      data: {
        userPhotos: { photos: ["http://photo1.es", "http://photo2.es"] },
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    const getPhotos = await apiGetPhotos(token);

    expect(getPhotos).toStrictEqual(["http://photo1.es", "http://photo2.es"]);
  });

  it("should delete a user photo", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTkwODliZGNmOWRhZTI5NjBlNDIxNWEiLCJleHAiOjE1ODY1MzEwMzI4NTcsInVzZXJuYW1lIjoiQXNpZXJDaWRvbiJ9.mFYSH3TLj_DPpmy7H35AF5AyK4GTMulP4AxgxT0-JcY";
    const photo = "http://photo2.es";
    const response = {
      data: {
        userPhotos: { photos: ["http://photo1.es"] },
      },
    };

    axios.delete.mockImplementationOnce(() => Promise.resolve(response));
    const deletePhoto = await apiDeletePhoto(token);

    expect(deletePhoto).toStrictEqual(["http://photo1.es"]);
  });

  it("should add a user photo", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTkwODliZGNmOWRhZTI5NjBlNDIxNWEiLCJleHAiOjE1ODY1MzEwMzI4NTcsInVzZXJuYW1lIjoiQXNpZXJDaWRvbiJ9.mFYSH3TLj_DPpmy7H35AF5AyK4GTMulP4AxgxT0-JcY";
    const photo = "XXXXXX";
    const response = {
      data: {
        userPhotos: { photos: ["http://photo1.es", "http://photo2.es"] },
      },
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    const addPhoto = await apiUploadPhoto(token, photo);

    expect(addPhoto).toStrictEqual(["http://photo1.es", "http://photo2.es"]);
  });
});
