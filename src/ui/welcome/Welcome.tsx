import React from "react";
import { bind } from "../../utils/bind";
import styles from "./Welcome.module.css";
import { Frontal } from "../frontal/Frontal";
import { Footer } from "../footer/Footer";

const cx = bind(styles);

export const Welcome: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Frontal></Frontal>
      <div className={cx("content")}>
        <div role="WelcomePageMainText" className={cx("content__center")}>
          <h1>Welcome Linking App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            elementum est. Maecenas ut tincidunt orci, vitae tristique neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            elementum est. Maecenas ut tincidunt orci, vitae tristique neque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            elementum est. Maecenas ut tincidunt orci, vitae tristique neque
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            elementum est. Maecenas ut tincidunt orci, vitae tristique neque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            elementum est. Maecenas ut tincidunt orci, vitae tristique neque
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            elementum est. Maecenas ut tincidunt orci, vitae tristique neque.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
