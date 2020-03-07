import React, { useState } from "react";
import { bind } from "../../../utils/bind";
import styles from "./Signup.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";

const cx = bind(styles);

interface Props {}

export const Signup: React.FunctionComponent<Props> = () => {
    return (
        <>
            <form
            // onSubmit={event => {
            //     event.preventDefault();
            //     onCreate(inputText);
            // }}
            >
                <InputText value="First Name" />
                <InputText value="Last Name" />
                <InputText value="Username" />
                <InputText value="Email" />
                <InputPass value="Password" />
                <div className={cx("welcome__login")}>
                    <Button submit theme="header" text="Login"></Button>
                </div>
            </form>
        </>
    );
};
