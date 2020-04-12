import React from "react";
import { bind } from "../../../../utils/bind";
import styles from "./InputFile.module.css";

const cx = bind(styles);

interface Props {
  label: string;
  onChange(data: FileList | null): void;
  content: any;
}

export const InputFile: React.FunctionComponent<Props> = ({
  label,
  onChange,
  content,
}) => {
  return (
    <>
      <input
        type="file"
        className={cx("input")}
        onChange={(event) => onChange(event.target.files)}
        id={label}
        name={label}
        accept="image/png, image/jpeg"
      />
      <label htmlFor={label} aria-labelledby={label}>
        {content}
      </label>
    </>
  );
};
