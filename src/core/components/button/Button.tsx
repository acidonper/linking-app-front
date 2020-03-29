import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Button.module.css";

const cx = bind(styles);

interface Props {
    theme: "header" | "regular" | "form";
    text: string;
    onClick?(): void;
    submit?: boolean;
}

export const Button: React.FunctionComponent<Props> = ({
    theme,
    text,
    onClick,
    submit
}) => {
    return (
        <button
            className={cx(theme)}
            type={submit ? "submit" : "button"}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
