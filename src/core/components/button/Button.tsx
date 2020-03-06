import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Button.module.css";

const cx = bind(styles);

interface Props extends React.HTMLProps<HTMLButtonElement> {
    theme: "header" | "regular";
    text: string;
}

export const Button: React.FunctionComponent<Props> = ({ theme, text }) => {
    return <button className={cx(theme)}>{text}</button>;
};
