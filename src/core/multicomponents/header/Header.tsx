import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Header.module.css";
import { Button } from "../../components/button/Button";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";

const cx = bind(styles);

interface Props {
    type: "welcome" | "regular";
}

export const Header: React.FunctionComponent<Props> = ({ type }) => {
    if (type === "welcome") {
        return (
            <>
                <header className={cx(type)}>
                    <div className={cx("welcome__logo")}>
                        <Logo size="xxl"></Logo>
                    </div>
                    <div className={cx("welcome__center")}>
                        <div className={cx("welcome__center__text")}>
                            <h1>PICK</h1>
                            <h1>CHAT</h1>
                            <h1>LIVE</h1>
                        </div>
                        <div>
                            <Button theme="regular" text="Signup"></Button>
                        </div>
                    </div>
                    <div className={cx("welcome__login")}>
                        <Button theme="header" text="Login"></Button>
                    </div>
                </header>
            </>
        );
    }
    if (type === "regular") {
        return (
            <>
                <header className={cx(type)}>
                    <div className={cx("regular__logo")}>
                        <Logo size="m"></Logo>
                    </div>
                    <div className={cx("regular__profile")}>
                        <Icon
                            size="m"
                            library="material-icons"
                            type="people"
                        ></Icon>
                    </div>
                    <div className={cx("regular__logout")}>
                        <Button theme="header" text="Logout"></Button>
                    </div>
                </header>
            </>
        );
    }
    return <></>;
};
