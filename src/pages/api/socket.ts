import { Server } from "Socket.IO";

export default function handler(req: any, res: any) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      socket.on("input-change", (msg) => {
        console.log(msg);
      });
    });
    res.socket.server.io = io;
  }
  res.end();
}
