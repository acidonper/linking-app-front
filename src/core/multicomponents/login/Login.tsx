import React, { useState } from "react";
import { bind } from "../../../utils/bind";
import styles from "./Login.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";
import { apiLogin } from "../../../infraestructure/auth/login";

const cx = bind(styles);

interface Props {
    title: string;
    text: string;
    close(): void;
    submit(user: string, pass: string): void;
}

export const Login: React.FunctionComponent<Props> = ({
    title,
    text,
    close,
    submit
}) => {
    const [inputText, setInputText] = useState("");
    const [inputPass, setInputPass] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await submit(inputText, inputPass);
        if (typeof response !== "string") {
            alert("Error: Login invalid. Please try again");
        } else {
            localStorage.setItem("token", String(response));
            alert("Token: " + response);
        }
    };

    return (
        <>
            <h2>{title}</h2>
            <form className={cx("container")} onSubmit={handleSubmit}>
                <InputText
                    onChange={(data: string) => setInputText(data)}
                    label="Username"
                    value={inputText}
                    required={true}
                    type="text"
                />
                <InputPass
                    onChange={data => setInputPass(data)}
                    label="Password"
                    value={inputPass}
                    required={true}
                    security={false}
                />
                <div className={cx("container__button")}>
                    <Button submit theme="form" text={text}></Button>
                    <Button theme="form" text="Close" onClick={close}></Button>
                </div>
            </form>
        </>
    );
};
