import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Chat.module.css";
import { Route, Link, useRouteMatch } from "react-router-dom";
import { connectChat } from "../../utils/chat";
import { Conversation } from "../conversation/Conversation";
import { Card } from "../../domain/Card";
import { apiGetMatches } from "../../infrastructure/suggestion/matches";

const cx = bind(styles);

const newSocket: SocketIOClient.Socket = connectChat();

interface Props {}

export const Chat: React.FunctionComponent<Props> = ({}) => {
  const [activeUsers, setActiveUsers] = useState(["Pepe", "Manolo", "Jose"]);

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
          <div className={cx("container__messages")}>
            {cards.map((card, index) => (
              <div key={index}>
                <Route path={`${url}/${card.username}`}>
                  <Conversation socket={newSocket} room={card.username} />
                </Route>
                <h1></h1>
              </div>
            ))}
          </div>
          <div className={cx("container__conversations")}>
            {cards.map((card, index) => (
              <div key={index}>
                <Link to={`${url}/${card.username}`}>{card.username}</Link>
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
