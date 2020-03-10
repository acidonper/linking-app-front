import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Signin.module.css";
import { Button } from "../../components/button/Button";
import { InputText } from "../../components/input/inputtext/InputText";
import { InputPass } from "../../components/input/inputpassword/InputPass";

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
    return (
        <div className={cx("popup")}>
            <div className={cx("popup__form")}>
                <h2>{title}</h2>
                <form className={cx("popup__form__container")}>
                    <InputText value="Username" />
                    <InputPass value="Password" />
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
