import React from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputRadio.module.css";

const cx = bind(styles);

interface Props {
    value: string;
    label: string;
    checked: boolean;
    onChange(data: string): void;
}

export const InputRadio: React.FunctionComponent<Props> = ({
    value,
    label,
    onChange,
    checked
}) => {
    return (
        <>
            {label}
            <input
                type="radio"
                className={cx("input")}
                value={value}
                onChange={event => onChange(event.target.value)}
                checked={checked}
            />
        </>
    );
};
