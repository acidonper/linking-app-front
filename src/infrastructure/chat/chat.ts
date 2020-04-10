import socketIOClient from "socket.io-client";

export const connectChat = (username: string) => {
  const url: string = process.env.REACT_APP_LINKING_APP_CHAT_URL + "";

  const socket = socketIOClient.connect(url, {
    query: `username=${username}`,
    timeout: 300000,
  });
  return socket;
};

export const joinChat = (
  socket: SocketIOClient.Socket,
  room: string,
  username: string
) => {
  socket.emit("join", { room: room, username: username });
  return true;
};

export const messageChat = (
  socket: SocketIOClient.Socket,
  room: string,
  message: string,
  username: string
) => {
  socket.emit("message", { msg: message, room: room, username: username });
  return true;
};

export const leaveChat = (
  socket: SocketIOClient.Socket,
  room: string,
  username: string
) => {
  socket.emit("leave", { room: room, username: username });
  return true;
};

export const disconnectChat = (socket: SocketIOClient.Socket) => {
  socket.close();
  return true;
};
