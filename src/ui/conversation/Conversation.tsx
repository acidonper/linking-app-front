import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Conversation.module.css";
import { joinChat, messageChat } from "../../infrastructure/chat/chat";
import { InputText } from "../../core/components/input/inputtext/InputText";
import { Button } from "../../core/components/button/Button";

const cx = bind(styles);

interface Props {
  socket: SocketIOClient.Socket;
  matchUsername: string;
  matchPhoto: string;
}

export const Conversation: React.FunctionComponent<Props> = ({
  socket,
  matchUsername,
  matchPhoto,
}) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([""]);
  const [privateRoom, setPrivateRoom] = useState(matchUsername);

  const myUsername: string = localStorage.getItem("username") + "";

  useEffect(() => {
    const timer = setTimeout(() => {
      socket.on("message", (msg: string) => {
        const newMessages = [...chatMessages];
        newMessages.push(msg);
        setChatMessages(newMessages);
      });
    }, 500);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    let newRoom;
    if (myUsername > matchUsername) {
      newRoom = myUsername + matchUsername;
      setPrivateRoom(newRoom);
    } else {
      newRoom = matchUsername + myUsername;
      setPrivateRoom(newRoom);
    }
    joinChat(socket, newRoom, myUsername);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const myMessage = `${myUsername}: ${message}`;
    messageChat(socket, privateRoom, myMessage, myUsername);
    setMessage("");
    return false;
  };

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("container__title")}>
          <div className={cx("container__title__image")}>
            <img src={matchPhoto} alt={matchUsername} />
          </div>
          <h1>{matchUsername}</h1>
        </div>
        <div className={cx("container__messages")}>
          <ul>
            {chatMessages.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <div className={cx("container__messages__dummy")} id="dummy"></div>
        </div>
        <div className={cx("container__send")}>
          <form onSubmit={handleSubmit}>
            <InputText
              onChange={(data: string) => setMessage(data)}
              label="Message"
              value={message}
              required={true}
              type="text"
            />
            <Button submit theme="header" text="Send"></Button>
          </form>
        </div>
      </div>
    </>
  );
};
