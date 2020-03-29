import React, { useState } from "react";
import { bind } from "../../utils/bind";
import styles from "./Header.module.css";
import { Button } from "../../core/components/button/Button";
import { Logo } from "../../core/components/logo/Logo";
import { Login } from "../login/Login";
import { Logout } from "../logout/Logout";
import { User } from "../../domain/User";
import { Signup } from "../signup/Signup";
import { apiSignup } from "../../infrastructure/profile/signup";
import { apiLogin, apiLogout } from "../../infrastructure/auth/login";

const cx = bind(styles);

interface Props {
    type: "welcome" | "regular";
}

export const Header: React.FunctionComponent<Props> = ({ type }) => {
    const [signup, setSignup] = useState(false);
    const [signin, setSignin] = useState(false);

    const showSignup = () => {
        setSignup(!signup);
    };

    const showSignin = () => {
        setSignin(!signin);
    };

    const submitSignup = async (inputUser: User) => {
        const newuser = await apiSignup(inputUser);
        if (typeof newuser !== "string") {
            return newuser;
        } else {
            return newuser;
        }
    };

    const submitSignin = async (inputText: string, inputPass: string) => {
        const token = await apiLogin(inputText, inputPass);
        return token;
    };

    const submitLogout = () => {
        apiLogout();
    };

    if (type === "welcome") {
        return (
            <>
                <header className={cx(type)}>
                    <div className={cx("welcome__logo")}>
                        <Logo size="xl"></Logo>
                    </div>
                    <div className={cx("welcome__center")}>
                        <div className={cx("welcome__center__text")}>
                            <h1>PICK</h1>
                            <h1>CHAT</h1>
                            <h1>LIVE</h1>
                        </div>
                        <div>
                            <Button
                                theme="regular"
                                text="Signup"
                                onClick={showSignup}
                            ></Button>
                        </div>
                    </div>
                    <div className={cx("welcome__login")}>
                        <Button
                            theme="header"
                            text="Login"
                            onClick={showSignin}
                        ></Button>
                    </div>
                </header>

                {signin ? (
                    <div className={cx("popup")}>
                        <div className={cx("popup__form")}>
                            <Login
                                title="Linking App Login"
                                text="Login"
                                redirectPath="/home"
                                close={showSignin}
                                submit={submitSignin}
                            ></Login>
                        </div>
                    </div>
                ) : null}

                {signup ? (
                    <div className={cx("popup")}>
                        <div className={cx("popup__form")}>
                            <Signup
                                title="Linking App Registration"
                                text="Register"
                                close={showSignup}
                                submit={submitSignup}
                            ></Signup>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
    if (type === "regular") {
        return (
            <>
                <header className={cx(type)}>
                    <div className={cx("regular__logo")}>
                        <Logo size="m"></Logo>
                        <h1>Linking</h1>
                    </div>
                    <div className={cx("regular__logout")}>
                        <Logout
                            theme="header"
                            text="Logout"
                            redirectPath="/welcome"
                            onSubmit={submitLogout}
                        ></Logout>
                    </div>
                </header>
            </>
        );
    }
    return <></>;
};
