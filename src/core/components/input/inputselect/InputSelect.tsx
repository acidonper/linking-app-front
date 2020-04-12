import React, { useState, useEffect } from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputSelect.module.css";

const cx = bind(styles);

interface Props {
  name: string;
  labels: string[];
  onChange(data: string | boolean): void;
  defaultValue?: string;
}

export const InputSelect: React.FunctionComponent<Props> = ({
  name,
  labels,
  onChange,
  defaultValue,
}) => {
  const [inputLabels, setInputLabels] = useState(labels);

  useEffect(() => {
    if (defaultValue) {
      const newLabels = labels.filter((item) => item !== defaultValue);
      setInputLabels(newLabels);
    }
  }, []);

  return (
    <div className={cx("select")}>
      <label htmlFor={name} aria-labelledby={name}>
        {name}
      </label>
      {defaultValue ? (
        <select
          id={name}
          name={name}
          value={defaultValue}
          onChange={(event) => onChange(event.target.value)}
          required
        >
          {inputLabels.map((label) => (
            <option id={label} value={label} key={label}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <select
          id={name}
          name={name}
          onChange={(event) => onChange(event.target.value)}
          value={defaultValue}
          required
        >
          <option id="---" value="" key="---">
            ---
          </option>
          {inputLabels.map((label) => (
            <option id={label} value={label} key={label}>
              {label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
