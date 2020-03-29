import React, { useState, useEffect } from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputSelect.module.css";

const cx = bind(styles);

interface Props {
    name: string;
    labels: string[];
    onChange(data: string | boolean): void;
    defaultValue?: string;
}

export const InputSelect: React.FunctionComponent<Props> = ({
    name,
    labels,
    onChange,
    defaultValue
}) => {
    const [inputLabels, setInputLabels] = useState(labels);

    useEffect(() => {
        if (defaultValue) {
            const newLabels = labels.filter(item => item !== defaultValue);
            setInputLabels(newLabels);
        }
    }, []);

    return (
        <div className={cx("select")}>
            <p>{name}</p>
            <select
                id={name}
                name={name}
                onChange={event => onChange(event.target.value)}
            >
                {inputLabels.map(label => (
                    <option id={label} value={label}>
                        {label}
                    </option>
                ))}

                {defaultValue ? (
                    <option id={defaultValue} value={defaultValue} selected>
                        {defaultValue}
                    </option>
                ) : null}
            </select>
        </div>
    );
};
