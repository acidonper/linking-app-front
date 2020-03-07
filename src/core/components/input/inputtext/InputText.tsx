import React, { useState } from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputText.module.css";

const cx = bind(styles);

interface Props {
    value: string;
}

export const InputText: React.FunctionComponent<Props> = ({ value }) => {
    const [inputText, setInputText] = useState("");

    return (
        <input
            placeholder={value}
            className={cx("input")}
            value={inputText}
            onChange={event => setInputText(event.target.value)}
        />
    );
};
