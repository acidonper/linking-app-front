import React from "react";
import { bind } from "../../utils/bind";
import styles from "./Sidebar.module.css";
import { Icon } from "../../core/components/icon/Icon";

const cx = bind(styles);

interface Props {
    onclick(item: string): void;
}

export const Sidebar: React.FunctionComponent<Props> = (children, onclick) => {
    return (
        <>
            <div>
                <div className={cx("sidebar__item")}>
                    <Icon
                        size="s"
                        library="material-icons"
                        type="image_search"
                    ></Icon>
                    <a>Pick</a>
                </div>
                <div
                    className={cx("sidebar__item")}
                    onClick={() => onclick("Live")}
                >
                    <Icon
                        size="s"
                        library="material-icons"
                        type="done_all"
                    ></Icon>
                    <a>Live</a>
                </div>
                <div
                    className={cx("sidebar__item")}
                    onClick={() => onclick("Chat")}
                >
                    <Icon
                        size="s"
                        library="material-icons"
                        type="chat_bubble_outline"
                    ></Icon>
                    <a>Chat</a>
                </div>
            </div>
        </>
    );
};
