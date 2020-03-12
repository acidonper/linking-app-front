import React from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputText.module.css";

const cx = bind(styles);

interface Props {
    value: string;
    label: string;
    onChange(data: string): void;
}

export const InputText: React.FunctionComponent<Props> = ({
    value,
    label,
    onChange
}) => {
    return (
        <input
            placeholder={label}
            className={cx("input")}
            value={value}
            onChange={event => onChange(event.target.value)}
        />
    );
};
