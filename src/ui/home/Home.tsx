import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { bind } from "../../utils/bind";
import styles from "./Home.module.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Sidebar } from "../sidebar/Sidebar";
import { Pick } from "../pick/Pick";
import { Live } from "../live/Live";
import { Settings } from "../settings/Settings";
import { Photos } from "../photos/Photos";
import { Chat } from "../chat/Chat";
import { connectChat } from "../../infrastructure/chat/chat";

const cx = bind(styles);

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const initSocket: SocketIOClient.Socket = {} as any;
  const [socket, setSocket] = useState(initSocket);

  useEffect(() => {
    const username: string = localStorage.getItem("username") + "";
    setSocket(connectChat(username));
  }, []);

  return (
    <>
      <Header socket={socket}></Header>
      <div className={cx("home")}>
        <div className={cx("sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("content")}>
          <Switch>
            <Route path="/home/pick" exact>
              <Pick></Pick>
            </Route>
            <Route path="/home/live">
              <Live></Live>
            </Route>
            <Route path="/home/chat">
              <Chat socket={socket}></Chat>
            </Route>
            <Route path="/home/profile">
              <Settings></Settings>
            </Route>
            <Route path="/home/photos">
              <Photos></Photos>
            </Route>
          </Switch>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
