import React, { useState } from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputPass.module.css";
import { Icon } from "../../icon/Icon";

const cx = bind(styles);

interface Props {
    value: string;
}

export const InputPass: React.FunctionComponent<Props> = ({ value }) => {
    const [inputPass, setInputPass] = useState("");
    const [viewPass, setViewPass] = useState(true);

    const displayPass = () => {
        setViewPass(!viewPass);
    };

    return (
        <>
            <input
                type={viewPass ? "password" : "text"}
                placeholder={value}
                className={cx("input")}
                value={inputPass}
                onChange={event => setInputPass(event.target.value)}
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
