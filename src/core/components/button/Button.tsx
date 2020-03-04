import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Button.module.css";

const cx = bind(styles);

interface Props extends React.HTMLProps<HTMLButtonElement> {
    theme?: "header" | "regular";
}

export const Button: React.FunctionComponent<Props> = ({ theme }) => {
    return <button className={cx(theme)}>Un boton</button>;
};
