import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Pick.module.css";
import { Card } from "../../domain/Card";
import { apiGetSuggestions } from "../../infrastructure/suggestion/suggestions";
import { apiAddBeloved } from "../../infrastructure/suggestion/beloved";
import { Icon } from "../../core/components/icon/Icon";

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

    const submitDiscardSuggestion = (index: number) => {
        const newCards = [...cards];
        newCards.splice(index, 1);
        setCards(newCards);
    };

    const submitBeloved = async (suggestion: string, index: number) => {
        const token: string = localStorage.getItem("token") + "";
        const username: string = localStorage.getItem("username") + "";
        const belovedAdded = await apiAddBeloved(token, username, suggestion);
        if (typeof belovedAdded === "string") {
            const newCards = [...cards];
            newCards.splice(index, 1);
            setCards(newCards);
        } else {
            alert("Error: Operation could not be completed. Please try again");
        }
    };

    if (cards.length >= 1 && cards[0].username) {
        return (
            <>
                <div className={cx("container")}>
                    {cards.map((card, index) => (
                        <div
                            className={cx("container__card")}
                            key={card.username}
                        >
                            <img src={card.photos[0]} alt={card.username} />
                            <div className={cx("container__card__data")}>
                                <div
                                    className={cx(
                                        "container__card__data__main"
                                    )}
                                >
                                    <h1>{card.username}</h1>
                                    <p>{card.infoAge}</p>
                                </div>
                                <div
                                    className={cx(
                                        "container__card__data__others"
                                    )}
                                >
                                    <p>{card.infoGender}</p>
                                </div>
                                <div
                                    className={cx(
                                        "container__card__data__options"
                                    )}
                                >
                                    <Icon
                                        size="m"
                                        library="material-icons"
                                        type="close"
                                        onClick={() =>
                                            submitDiscardSuggestion(index)
                                        }
                                    ></Icon>
                                    <Icon
                                        size="m"
                                        library="material-icons"
                                        type="favorite_border"
                                        onClick={() =>
                                            submitBeloved(card.username, index)
                                        }
                                    ></Icon>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={cx("message")}>
                    <h1 className={cx("message__title")}>
                        Suggestions to pick are coming soon!
                    </h1>
                    <h1>Give Live a Chance or ...</h1>
                    <h1>... modify your preferences!</h1>
                </div>
            </>
        );
    }
};
