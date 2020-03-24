import React from "react";
import { Route, Switch } from "react-router-dom";
import { bind } from "../../utils/bind";
import styles from "./Home.module.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Sidebar } from "../sidebar/Sidebar";
import { Pick } from "../pick/Pick";
import { Live } from "../live/Live";

const cx = bind(styles);

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
    return (
        <>
            <Header type="regular"></Header>
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
                            <h1>Chat</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
