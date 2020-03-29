import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { bind } from "../../utils/bind";
import styles from "./Login.module.css";
import { Button } from "../../core/components/button/Button";
import { InputText } from "../../core/components/input/inputtext/InputText";
import { InputPass } from "../../core/components/input/inputpassword/InputPass";

const cx = bind(styles);

interface Props {
    title: string;
    text: string;
    redirectPath: string;
    close(): void;
    submit(user: string, pass: string): void;
}

export const Login: React.FunctionComponent<Props> = ({
    children,
    title,
    text,
    close,
    submit,
    redirectPath
}) => {
    let history = useHistory();

    const [inputText, setInputText] = useState("");
    const [inputPass, setInputPass] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await submit(inputText, inputPass);
        if (typeof response !== "string") {
            alert("Error: Login invalid. Please try again");
        } else {
            localStorage.setItem("username", String(inputText));
            localStorage.setItem("token", String(response));
            setTimeout(() => {
                history.push(redirectPath);
            }, 400);
        }
    };

    return (
        <>
            <div className={cx("title")}>{title}</div>
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
