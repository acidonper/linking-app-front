import React from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputRadio.module.css";

const cx = bind(styles);

interface Props {
  name: string;
  labels: any[];
  onChange(data: string | boolean): void;
}

export const InputRadio: React.FunctionComponent<Props> = ({
  name,
  labels,
  onChange,
}) => {
  return (
    <div className={cx("radio")}>
      <label aria-labelledby={name}>{name}</label>
      <div className={cx("radio__form")}>
        {labels.map((label) => (
          <div className={cx("radio__form__item")} key={label}>
            <input
              name={name}
              id={name}
              type="radio"
              onChange={(event) => onChange(event.target.value)}
              required={true}
              value={label}
            />
            <p>{label.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
