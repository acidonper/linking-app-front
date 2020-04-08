import React from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputText.module.css";

const cx = bind(styles);

interface Props {
    type: "text" | "email";
    value: string | number;
    label: string;
    onChange(data: string | number): void;
    required?: boolean;
    state?: string;
    fixed?: string
}

export const InputText: React.FunctionComponent<Props> = ({
    type,
    value,
    label,
    onChange,
    required,
    state
}) => {
    return (
        <>
            {state ? (
                <input
                    type={type}
                    placeholder={label}
                    className={cx("input")}
                    value={value}
                    onChange={event => onChange(event.target.value)}
                    required={required}
                    disabled
                />
            ) : (
                <input
                    type={type}
                    placeholder={label}
                    className={cx("input")}
                    value={value}
                    onChange={event => onChange(event.target.value)}
                    required={required}
                />
            )}
        </>
    );
};
