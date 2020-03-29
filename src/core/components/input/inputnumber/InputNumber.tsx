import React from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputNumber.module.css";

const cx = bind(styles);

interface Props {
    value: number;
    label: string;
    onChange(data: string | number): void;
    required?: boolean;
    min: number;
    max: number;
}

export const InputNumber: React.FunctionComponent<Props> = ({
    value,
    label,
    onChange,
    required,
    min,
    max
}) => {
    return (
        <input
            type="number"
            placeholder={label}
            className={cx("input")}
            value={value}
            onChange={event => onChange(event.target.value)}
            required={required}
            min={min}
            max={max}
            id={label}
        />
    );
};
