import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Photos.module.css";
import { Icon } from "../../core/components/icon/Icon";
import {
    apiGetPhotos,
    apiDeletePhoto
} from "../../infrastructure/profile/photos";

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

    const submitAddPhoto = () => {
        alert("VAMOSSSSSSS");
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
                    <Icon
                        size="l"
                        library="material-icons"
                        type="add_a_photo"
                        onClick={() => submitAddPhoto()}
                    ></Icon>
                </div>
            </div>
        </>
    );
};
