import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Footer.module.css";
import { Icon } from "../../components/icon/Icon";

const cx = bind(styles);

interface Props {}

export const Footer: React.FunctionComponent<Props> = () => {
    return (
        <>
            <footer className={cx("footer")}>
                <div className={cx("footer__brand")}>
                    <h3>Linking</h3>
                </div>
                <div className={cx("footer__sections")}>
                    <a href="#">
                        <h4>CHANGELOG</h4>
                    </a>
                    <a href="#">
                        <h4>DOCUMENTATION</h4>
                    </a>
                    <a href="#">
                        <h4>PRIVACY</h4>
                    </a>
                    <a href="#">
                        <h4>TERMS</h4>
                    </a>
                    <a href="#">
                        <h4>LICENSE</h4>
                    </a>
                    <a href="#">
                        <h4>CONTACT</h4>
                    </a>
                </div>
                <div className={cx("footer__socialmedia")}>
                    <a href="#">
                        <Icon
                            size="m"
                            library="fa"
                            type="fa-twitter-square"
                        ></Icon>
                    </a>
                    <a href="#">
                        <Icon size="m" library="fa" type="fa-instagram"></Icon>
                    </a>
                    <a href="#">
                        <Icon
                            size="m"
                            library="fa"
                            type="fa-facebook-square"
                        ></Icon>
                    </a>
                    <a href="#">
                        <Icon size="m" library="fa" type="fa-youtube"></Icon>
                    </a>
                </div>
            </footer>
        </>
    );
};
