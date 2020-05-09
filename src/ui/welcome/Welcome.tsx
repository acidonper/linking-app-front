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
          <h3>
            "Linking App is an experimental dating application created from an
            education or training point of view"
          </h3>
          <p>
            In contrast to other dating applications, Linking App tries to focus
            on implementing a stringent matching algorithm and limiting the
            maximum number of users' concurrent conversations.
          </p>
          <p>
            Why should the maximum number of users' concurrent conversations be
            limited?
          </p>
          <p>
            In my honest opinion, We have tons of possibilities (supply and
            demand) in this digital world. There are many single people which
            are looking for a new opportunity to meet a new person. When you
            have too many open opportunities, it is so difficult to focus on
            someone and be able to discover this amazing person.
          </p>
          <p>
            For this reason, I really think that it is a good starting point to
            give Linking App's users the possibility of having a real
            opportunity to meet their matches.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
