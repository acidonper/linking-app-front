import React, { useState, useEffect } from "react";
import { bind } from "../../utils/bind";
import styles from "./Conversation.module.css";
import { joinChat, messageChat } from "../../utils/chat";
import { InputText } from "../../core/components/input/inputtext/InputText";

const cx = bind(styles);

interface Props {
  socket: SocketIOClient.Socket;
  room: string;
}

export const Conversation: React.FunctionComponent<Props> = ({
  socket,
  room,
}) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([""]);
  const [privateRoom, setPrivateRoom] = useState(room);

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
    if (myUsername > room) {
      newRoom = myUsername + room;
      setPrivateRoom(newRoom);
    } else {
      newRoom = room + myUsername;
      setPrivateRoom(newRoom);
    }
    joinChat(socket, newRoom, myUsername);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const myMessage = `${myUsername}: ${message}`;
    messageChat(socket, privateRoom, myMessage);
    setMessage("");
    return false;
  };

  return (
    <>
      <div className={cx("container")}>
        <h1>{privateRoom}</h1>
        <ul>
          {chatMessages.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <InputText
            onChange={(data: string) => setMessage(data)}
            label="Message"
            value={message}
            required={true}
            type="text"
          />
          <button type="submit">Sent it!</button>
        </form>
      </div>
    </>
  );
};
