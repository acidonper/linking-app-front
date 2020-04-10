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
  fixed?: string;
}

export const InputText: React.FunctionComponent<Props> = ({
  type,
  value,
  label,
  onChange,
  required,
  state,
}) => {
  return (
    <>
      {state ? (
        <>
          {required ? (
            <input
              type={type}
              id={label}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              required
              disabled
              data-testid="Text"
            />
          ) : (
            <input
              type={type}
              id={label}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              disabled
              data-testid="Text"
            />
          )}
        </>
      ) : (
        <>
          {required ? (
            <input
              type={type}
              id={label}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              required
              data-testid="Text"
            />
          ) : (
            <input
              type={type}
              id={label}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              data-testid="Text"
            />
          )}
        </>
      )}
    </>
  );
};
