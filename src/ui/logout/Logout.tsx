import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../core/components/button/Button";
import { disconnectChat } from "../../infrastructure/chat/chat";

interface Props {
  theme: "header" | "form" | "regular";
  text: string;
  redirectPath: string;
  onSubmit(): void;
  socket: SocketIOClient.Socket;
}

export const Logout: React.FunctionComponent<Props> = ({
  text,
  theme,
  redirectPath,
  onSubmit,
  socket,
}) => {
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    onSubmit();
    disconnectChat(socket);
    setTimeout(() => {
      history.push(redirectPath);
    }, 300);
  };

  return <Button theme={theme} text={text} onClick={logout}></Button>;
};
