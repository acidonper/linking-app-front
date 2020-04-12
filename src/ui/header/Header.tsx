import React from "react";
import { bind } from "../../utils/bind";
import styles from "./Header.module.css";
import { Logo } from "../../core/components/logo/Logo";
import { Logout } from "../logout/Logout";
import { apiLogout } from "../../infrastructure/auth/login";

const cx = bind(styles);

interface Props {
  socket: SocketIOClient.Socket;
}

export const Header: React.FunctionComponent<Props> = ({ socket }) => {
  const submitLogout = () => {
    apiLogout();
  };

  return (
    <>
      <header className={cx("regular")}>
        <div className={cx("regular__logo")}>
          <Logo size="m"></Logo>
          <h1>Linking</h1>
        </div>
        <div className={cx("regular__logout")}>
          <Logout
            theme="header"
            text="Logout"
            redirectPath="/welcome"
            onSubmit={submitLogout}
            socket={socket}
          ></Logout>
        </div>
      </header>
    </>
  );

  return <></>;
};
