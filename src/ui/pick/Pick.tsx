import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Pick.module.css";
import { Card } from "../../domain/Card";
import { apiGetSuggestions } from "../../infraestructure/suggestion/suggestions";

const cx = bind(styles);

interface Props {}

export const Pick: React.FunctionComponent<Props> = children => {
    let initCards: Card[] = [{}] as any;

    const [cards, setCards] = useState(initCards);

    const loadSuggestions = async () => {
        const token: string = localStorage.getItem("token") + "";
        const username: string = localStorage.getItem("username") + "";
        const suggestions = await apiGetSuggestions(token, username);
        if (Array.isArray(suggestions)) {
            setCards(suggestions);
        } else {
            alert("Error: Operation could not be completed. Please try again");
        }
    };

    useEffect(() => {
        loadSuggestions();
    }, []);

    if (cards.length > 1) {
        return (
            <>
                <div className={cx("container")}>
                    {cards.map(card => (
                        <div
                            className={cx("container__card")}
                            key={card.username}
                        >
                            <img src={card.photos[0]} alt={card.username} />
                            <div className={cx("container__card__data")}>
                                <p>{card.username}</p>
                                <p>{card.infoAge}</p>
                                <p>{card.infoGender}</p>
                                <p>{card.infoEducation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        return <></>;
    }
};
