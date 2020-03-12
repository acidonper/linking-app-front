import React, { useState } from "react";
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
    const [inputText, setInputText] = useState("");
    const [inputPass, setInputPass] = useState("");

    return (
        <div className={cx("popup")}>
            <div className={cx("popup__form")}>
                <h2>{title}</h2>
                <form className={cx("popup__form__container")}>
                    <InputText
                        onChange={data => setInputText(data)}
                        label="First Name"
                        value={inputText}
                    />
                    <InputText
                        onChange={data => setInputText(data)}
                        label="Last Name"
                        value={inputText}
                    />
                    <InputText
                        onChange={data => setInputText(data)}
                        label="Username"
                        value={inputText}
                    />
                    <InputText
                        onChange={data => setInputText(data)}
                        label="Email"
                        value={inputText}
                    />
                    <InputPass
                        onChange={data => setInputPass(data)}
                        label="Password"
                        value={inputPass}
                    />
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
