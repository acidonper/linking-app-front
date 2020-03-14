import React, { useState } from "react";
import { bind } from "../../utils/bind";
import styles from "./Base.module.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Sidebar } from "../sidebar/Sidebar";

const cx = bind(styles);

interface Props {}

export const Base: React.FunctionComponent<Props> = () => {
    const [display, setDisplay] = useState("pick");

    const changeBaseDisplay = (baseDisplay: string): void => {
        setDisplay(baseDisplay);
    };

    return (
        <>
            <Header type="regular"></Header>
            <div className={cx("base")}>
                <div className={cx("sidebar")}>
                    <Sidebar onclick={changeBaseDisplay} />
                </div>
                <div className={cx("content")}>
                    {display === "pick" && <h1>pick</h1>}
                    {display === "live" && <h1>live</h1>}
                    {display === "chat" && <h1>live</h1>}
                    <h2>adsasd</h2>
                    <h1>adsasd</h1>
                    <h1>adsasd</h1>
                    <h1>adsasd</h1>
                    <h1>adsasd</h1>
                    <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                    <h1>adsasd</h1> <h1>adsasd</h1> <h1>adsasd</h1>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
