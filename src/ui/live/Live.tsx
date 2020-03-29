import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Live.module.css";
import { Card } from "../../domain/Card";
import { apiGetMatches } from "../../infrastructure/suggestion/matches";
import { apiUnmatch } from "../../infrastructure/suggestion/unmatch";
import { Icon } from "../../core/components/icon/Icon";

const cx = bind(styles);

interface Props {}

export const Live: React.FunctionComponent<Props> = children => {
    let initCards: Card[] = [{}] as any;

    const [cards, setCards] = useState(initCards);

    const loadMatches = async () => {
        const token: string = localStorage.getItem("token") + "";
        const username: string = localStorage.getItem("username") + "";
        const matches = await apiGetMatches(token, username);
        if (Array.isArray(matches)) {
            setCards(matches);
        } else {
            alert("Error: Operation could not be completed. Please try again");
        }
    };

    useEffect(() => {
        loadMatches();
    }, []);

    const submitDiscardMatch = async (suggestion: string, index: number) => {
        const token: string = localStorage.getItem("token") + "";
        const username: string = localStorage.getItem("username") + "";
        const suggestionUnmatch = await apiUnmatch(token, username, suggestion);
        if (typeof suggestionUnmatch === "string") {
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
                                    <div
                                        className={cx(
                                            "container__card__data__others__Icon"
                                        )}
                                    >
                                        <Icon
                                            size="m"
                                            library="material-icons"
                                            type="favorite"
                                        ></Icon>
                                    </div>
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
                                            submitDiscardMatch(
                                                card.username,
                                                index
                                            )
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
                        Matches is coming soon!
                    </h1>
                    <h1>Give Live a Chance!</h1>
                    <h1>Go to Pick...</h1>
                </div>
            </>
        );
    }
};
