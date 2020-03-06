import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Icon.module.css";

const cx = bind(styles);

interface Props {
    size: "xs" | "s" | "m" | "l" | "xl" | "xxl";
    library: "material-icons" | "fa";
    type: string;
}

export const Icon: React.FunctionComponent<Props> = ({
    size,
    library,
    type
}) => {
    if (library === "material-icons")
        return <i className={cx(library, size)}>{type}</i>;
    if (library === "fa") return <i className={cx(library, type, size)}></i>;
    else return <></>;
};
