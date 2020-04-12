import React, { useState } from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputPass.module.css";
import { Icon } from "../../icon/Icon";

const cx = bind(styles);

interface Props {
  value: string;
  label: string;
  onChange(data: string): void;
  required?: boolean;
  security?: boolean;
}

export const InputPass: React.FunctionComponent<Props> = ({
  value,
  label,
  onChange,
  required,
  security,
}) => {
  const [viewPass, setViewPass] = useState(true);

  const displayPass = () => {
    setViewPass(!viewPass);
  };

  return (
    <>
      <label htmlFor={label} aria-labelledby={label}>
        {label}
      </label>
      {security ? (
        <>
          {required ? (
            <input
              type={viewPass ? "password" : "text"}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              data-testid="Password"
              name={label}
              id={label}
            />
          ) : (
            <input
              type={viewPass ? "password" : "text"}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              data-testid="Password"
              name={label}
              id={label}
            />
          )}
        </>
      ) : (
        <>
          {required ? (
            <input
              type={viewPass ? "password" : "text"}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              required
              data-testid="Password"
              id={label}
              name={label}
            />
          ) : (
            <input
              type={viewPass ? "password" : "text"}
              placeholder={label}
              className={cx("input")}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              data-testid="Password"
              id={label}
              name={label}
            />
          )}
        </>
      )}
      <a className={cx("link")} onClick={displayPass}>
        <Icon size="s" library="material-icons" type="remove_red_eye"></Icon>
      </a>
    </>
  );
};
