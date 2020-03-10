import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Profile.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";

const cx = bind(styles);

interface Props {
    title: string;
    text: string;
    closeProfile(): void;
}

export const Profile: React.FunctionComponent<Props> = ({
    title,
    text,
    closeProfile
}) => {
    return (
        <div className={cx("popup")}>
            <div className={cx("popup__form")}>
                <h2>{title}</h2>
                <form className={cx("popup__form__container")}>
                    <InputText value="First Name" />
                    <InputText value="Last Name" />
                    <InputText value="Username" />
                    <InputText value="Email" />
                    <InputPass value="Password" />
                    <div className={cx("popup__form__container__button")}>
                        <Button submit theme="form" text={text}></Button>
                        <Button
                            theme="form"
                            text="Close"
                            onClick={closeProfile}
                        ></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
