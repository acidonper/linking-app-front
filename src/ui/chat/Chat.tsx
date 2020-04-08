import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Chat.module.css";
import { Route, Link, useRouteMatch } from "react-router-dom";
import { Conversation } from "../conversation/Conversation";
import { Card } from "../../domain/Card";
import { apiGetMatches } from "../../infrastructure/suggestion/matches";

const cx = bind(styles);

interface Props {
  socket: SocketIOClient.Socket;
}

export const Chat: React.FunctionComponent<Props> = ({ socket }) => {
  let { url } = useRouteMatch();

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

  if (cards.length >= 1 && cards[0].username) {
    return (
      <>
        <div className={cx("container")}>
          <div className={cx("container__conversations")}>
            {cards.map((card, index) => (
              <div className={cx("container__conversations__user")} key={index}>
                <div className={cx("container__conversations__user__image")}>
                  <img src={card.photos[0]} alt={card.username} />
                </div>
                <div className={cx("container__conversations__user__link")}>
                  <Link to={`${url}/${card.username}`}>{card.username}</Link>
                  <p>Clik to say hello...</p>
                </div>
              </div>
            ))}
          </div>
          <div className={cx("container__messages")}>
            {cards.map((card, index) => (
              <div key={index}>
                <Route path={`${url}/${card.username}`}>
                  <Conversation
                    socket={socket}
                    matchUsername={card.username}
                    matchPhoto={card.photos[0]}
                  />
                </Route>
                <h1></h1>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={cx("message")}>
          <h1 className={cx("message__title")}>Matches is coming soon!</h1>
          <h1>Give Live a Chance!</h1>
          <h1>Go to Pick...</h1>
        </div>
      </>
    );
  }
};
