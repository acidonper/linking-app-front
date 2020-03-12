import React, { useState } from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputPass.module.css";
import { Icon } from "../../icon/Icon";

const cx = bind(styles);

interface Props {
    value: string;
    label: string;
    onChange(data: string): void;
}

export const InputPass: React.FunctionComponent<Props> = ({
    value,
    label,
    onChange
}) => {
    const [viewPass, setViewPass] = useState(true);

    const displayPass = () => {
        setViewPass(!viewPass);
    };

    return (
        <>
            <input
                type={viewPass ? "password" : "text"}
                placeholder={label}
                className={cx("input")}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
            <a className={cx("link")} onClick={displayPass}>
                <Icon
                    size="s"
                    library="material-icons"
                    type="remove_red_eye"
                ></Icon>
            </a>
        </>
    );
};
