import React from "react";
import { bind } from "../../../utils/bind";
import styles from "./Logo.module.css";

const cx = bind(styles);

interface Props {
    size?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
}

export const Logo: React.FunctionComponent<Props> = ({ size }) => {
    return <i className={cx(size, "material-icons")}>close</i>;
};
