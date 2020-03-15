import React, { useState } from "react";
import { bind } from "../../utils/bind";
import styles from "./Base.module.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Sidebar } from "../sidebar/Sidebar";
import { Pick } from "../pick/Pick";

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
                    {display === "pick" && (
                        <>
                            <Pick></Pick>
                            <h1>pick</h1>
                        </>
                    )}
                    {display === "live" && <h1>live</h1>}
                    {display === "chat" && <h1>live</h1>}
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias ipsam, perferendis numquam soluta dolores
                        consequuntur totam iusto quam, aliquid in libero natus
                        necessitatibus tenetur beatae sed, rerum praesentium
                        veniam dolor?
                    </h2>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
