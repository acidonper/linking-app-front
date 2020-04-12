import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Photos.module.css";
import { Icon } from "../../core/components/icon/Icon";
import {
  apiGetPhotos,
  apiDeletePhoto,
  apiUploadPhoto,
} from "../../infrastructure/profile/photos";
import { InputFile } from "../../core/components/input/inputfile/InputFile";

const cx = bind(styles);

interface Props {}

export const Photos: React.FunctionComponent<Props> = ({}) => {
  const [userPhotos, setUserPhotos] = useState([""]);

  const syncUserProfileSettings = async () => {
    const token: string = localStorage.getItem("token") + "";
    const userProfileSettings = await apiGetPhotos(token);
    setUserPhotos(userProfileSettings);
  };

  useEffect(() => {
    syncUserProfileSettings();
  }, []);

  const submitDiscardPhoto = async (index: number, photo: string) => {
    const token: string = localStorage.getItem("token") + "";
    const response = await apiDeletePhoto(token, photo);
    if (Array.isArray(response)) {
      setTimeout(() => {
        alert("OK: Photo selected has been removed!!");
        setUserPhotos(response);
      }, 300);
    } else {
      alert("Error: Operation could not be completed. Please try again");
    }
  };

  const submitAddPhoto = (photoFile: FileList | null) => {
    if (photoFile != null) {
      const fileReader = new FileReader();

      fileReader.onload = async (event) => {
        const content = fileReader.result;
        const token: string = localStorage.getItem("token") + "";
        const response = await apiUploadPhoto(token, content);

        if (Array.isArray(response)) {
          setTimeout(() => {
            alert("OK: A new photo has been added!!");
            setUserPhotos(response);
          }, 300);
        } else {
          alert("Error: Operation could not be completed. Please try again");
        }
      };
      fileReader.readAsDataURL(photoFile[0]);
    } else {
      alert("Error: File is not found. Please try again");
    }
  };

  if (userPhotos.length >= 1) {
    return (
      <>
        <div className={cx("container")}>
          {userPhotos.map((photo, index) => (
            <img
              src={photo}
              alt={photo}
              onClick={() => submitDiscardPhoto(index, photo)}
            />
          ))}
          <div className={cx("container__card")}>
            <InputFile
              label="inputfile"
              onChange={(data: FileList | null) => {
                submitAddPhoto(data);
              }}
              content={
                <Icon
                  size="l"
                  library="material-icons"
                  type="add_a_photo"
                  onClick={() => {}}
                ></Icon>
              }
            ></InputFile>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Please, try again in few minutes...</h1>
      </>
    );
  }
};
