import React, { useState, useEffect } from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputSelectBoolean.module.css";

const cx = bind(styles);

interface Props {
    name: string;
    onChange(data: string | boolean): void;
    defaultValue: boolean;
}

export const InputSelectBoolean: React.FunctionComponent<Props> = ({
    name,
    onChange,
    defaultValue
}) => {
    const HandleOnChange = (value: string) => {
        if (value === "true") {
            onChange(true);
        } else {
            onChange(false);
        }
    };

    return (
        <div className={cx("select")}>
            <p>{name}</p>
            <select
                id={name}
                name={name}
                onChange={event => HandleOnChange(event.target.value)}
            >
                {defaultValue ? (
                    <>
                        <option id="true" value="true" selected>
                            true
                        </option>
                        <option id="false" value="false">
                            false
                        </option>
                    </>
                ) : (
                    <>
                        <option id="true" value="true">
                            true
                        </option>
                        <option id="false" value="false" selected>
                            false
                        </option>
                    </>
                )}
            </select>
        </div>
    );
};
