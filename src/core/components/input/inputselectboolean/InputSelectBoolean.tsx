import React from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputSelectBoolean.module.css";

const cx = bind(styles);

interface Props {
  name: string;
  onChange(data: string | boolean): void;
  defaultValue?: boolean;
}

export const InputSelectBoolean: React.FunctionComponent<Props> = ({
  name,
  onChange,
  defaultValue,
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
      <label htmlFor={name} aria-labelledby={name}>
        {name}
      </label>
      {defaultValue !== undefined ? (
        <select
          id={name}
          name={name}
          onChange={(event) => HandleOnChange(event.target.value)}
          value={defaultValue.toString()}
          required
        >
          <option id="true" value="true">
            true
          </option>
          <option id="false" value="false">
            false
          </option>
        </select>
      ) : (
        <select
          id={name}
          name={name}
          onChange={(event) => HandleOnChange(event.target.value)}
          required
        >
          <option id="---" value="">
            ---
          </option>
          <option id="true" value="true">
            true
          </option>
          <option id="false" value="false">
            false
          </option>
        </select>
      )}
    </div>
  );
};
