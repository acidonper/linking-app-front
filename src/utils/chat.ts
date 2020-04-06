import socketIOClient from "socket.io-client";

export const connectChat = () => {
  const socket = socketIOClient.connect("http://127.0.0.1:5002/tech");
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
  message: string
) => {
  socket.emit("message", { msg: message, room: room });
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

export const disconnectChat = () => {
  const socket = socketIOClient.connect("http://127.0.0.1:5002/tech");
  return socket;
};
