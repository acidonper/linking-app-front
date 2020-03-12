import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Icon.module.css";

const cx = bind(styles);

interface Props {
    size: "xs" | "s" | "m" | "l" | "xl" | "xxl";
    library: "material-icons" | "fa";
    type: string;
    onClick?(): void;
}

export const Icon: React.FunctionComponent<Props> = ({
    size,
    library,
    type,
    onClick
}) => {
    if (library === "material-icons")
        return (
            <i onClick={onClick} className={cx(library, size)}>
                {type}
            </i>
        );
    if (library === "fa")
        return <i onClick={onClick} className={cx(library, type, size)}></i>;
    else return <></>;
};
