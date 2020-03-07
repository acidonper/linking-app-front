import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Button.module.css";

const cx = bind(styles);

interface Props extends React.HTMLProps<HTMLButtonElement> {
    theme: "header" | "regular";
    text: string;
    submit?: boolean;
}

export const Button: React.FunctionComponent<Props> = ({
    children,
    theme,
    text,
    submit,
    ...rest
}) => {
    return (
        <button
            className={cx(theme)}
            {...rest}
            type={submit ? "submit" : "button"}
        >
            {text}
        </button>
    );
};
