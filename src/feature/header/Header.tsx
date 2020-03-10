import React, { useState } from "react";
import { bind } from "../../utils/bind";
import styles from "./Header.module.css";
import { Button } from "../../core/components/button/Button";
import { Logo } from "../../core/components/logo/Logo";
import { Icon } from "../../core/components/icon/Icon";
import { Signup } from "../../core/multicomponents/signup/Signup";
import { Signin } from "../../core/multicomponents/signin/Signin";

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
                    <Signin
                        title="Linking App Login"
                        text="Login"
                        closeSignin={showSignin}
                    ></Signin>
                ) : null}

                {signup ? (
                    <Signup
                        title="Linking App Registration"
                        text="Register"
                        closeSignup={showSignup}
                    ></Signup>
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
