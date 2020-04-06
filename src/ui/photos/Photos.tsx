import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Photos.module.css";
import { Icon } from "../../core/components/icon/Icon";
import {
    apiGetPhotos,
    apiDeletePhoto,
    apiUploadPhoto
} from "../../infrastructure/profile/photos";
import { InputFile } from "../../core/components/input/inputfile/InputFile";

const cx = bind(styles);

interface Props {}

export const Photos: React.FunctionComponent<Props> = ({}) => {
    // let photos: string[] = {} as any;
    let photos: string[] = ["1", "2"];

    const [userPhotos, setUserPhotos] = useState(photos);

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

    const submitAddPhoto = async (photoFile: string) => {
        console.log(photoFile);

        const photoData = new FormData();
        photoData.append("photo", photoFile, "pepe.jpg");

        const token: string = localStorage.getItem("token") + "";
        const response = await apiUploadPhoto(token, photoData);

        if (Array.isArray(response)) {
            setTimeout(() => {
                alert("OK: A new photo has been added!!");
                setUserPhotos(response);
            }, 300);
        } else {
            alert("Error: Operation could not be completed. Please try again");
        }
    };

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
                        onChange={(data: string) => {
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
};
