import React, { useState } from "react";
import { bind } from "../../../utils/bind";
import styles from "./Signin.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";
import { apiLogin } from "../../../infraestructure/auth/login";

const cx = bind(styles);

interface Props {
    title: string;
    text: string;
    closeSignin(): void;
}

export const Signin: React.FunctionComponent<Props> = ({
    title,
    text,
    closeSignin
}) => {
    const [inputText, setInputText] = useState("");
    const [inputPass, setInputPass] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const token = await apiLogin(inputText, inputPass);
        localStorage.setItem("token", token);

        if (typeof token !== "string") {
            alert(token);
        } else {
            alert("token: " + token);
        }
    };

    return (
        <div className={cx("popup")}>
            <div className={cx("popup__form")}>
                <h2>{title}</h2>
                <form
                    className={cx("popup__form__container")}
                    onSubmit={handleSubmit}
                >
                    <InputText
                        onChange={data => setInputText(data)}
                        label="Username"
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
                            onClick={closeSignin}
                        ></Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
