import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { bind } from "../../utils/bind";
import styles from "./Sidebar.module.css";
import { Icon } from "../../core/components/icon/Icon";

const cx = bind(styles);

export const Sidebar: React.FunctionComponent<{}> = children => {
    let { url } = useRouteMatch();

    return (
        <>
            <div className={cx("sidebar")}>
                <div className={cx("sidebar__item")}>
                    <Icon
                        size="s"
                        library="material-icons"
                        type="image_search"
                    ></Icon>
                    <Link to={`${url}/pick`}>Pick</Link>
                </div>
                <div className={cx("sidebar__item")}>
                    <Icon
                        size="s"
                        library="material-icons"
                        type="done_all"
                    ></Icon>
                    <Link to={`${url}/live`}>Live</Link>
                </div>
                <div className={cx("sidebar__item")}>
                    <Icon
                        size="s"
                        library="material-icons"
                        type="chat_bubble_outline"
                    ></Icon>
                    <Link to={`${url}/chat`}>Chat</Link>
                </div>
            </div>
        </>
    );
};
