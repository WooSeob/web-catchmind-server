"use strict";
// const mongoose = require("mongoose");
Object.defineProperty(exports, "__esModule", { value: true });
// export class SocketHandler {
//   public static currentConnected: number = 1;
//   private static instance: SocketHandler;
//   private io: socket_io.Server;
//   private constructor(io: socket_io.Server) {
//     this.io = io;
//     this.io.on("connection", this.handler);
//   }
//   public getIo(): socket_io.Server {
//     return this.io;
//   }
//   static createInstance(io: socket_io.Server) {
//     this.instance = new SocketHandler(io);
//   }
//   static getInstance() {
//     if (SocketHandler.instance) {
//       return SocketHandler.instance;
//     } else {
//       console.log("<< SocketHandler 인스턴스가 없습니다 >>");
//       return null;
//     }
//   }
//   private handler(socket: socket_io.Socket): void {
//     Logger.log("connect. now " + ++SocketHandler.currentConnected);
//     let roomController: RoomController;
//     let thisUser: User;
//     var handshake = socket.handshake;
//     Logger.log("New Connection from ", handshake.address);
//     socket.on("lobby-msg", (msg) => {
//       if (msg.type == "createRoom") {
//         let createdRoom = RoomPool.getInstance().createRoom(msg.data);
//         let roomCreated = {
//           type: "createRoom",
//           data: createdRoom.getRoomID(),
//         };
//         socket.emit("lobby-msg", roomCreated);
//       } else if (msg.type == "searchRoom") {
//         let matchedRoom = RoomPool.getInstance().matchMaking(msg.data);
//         let roomMatched = {
//           type: "searchRoom",
//           data: matchedRoom.getRoomID(),
//         };
//         socket.emit("lobby-msg", roomMatched);
//       }
//     });
//     socket.on("join", (joinData: any) => {});
//     socket.on("game-cmd", (msg) => {});
//     socket.on("game-msg", (msg) => {});
//     // 클라이언트로부터의 메시지가 수신되면
//     socket.on("draw cmd", (drawData: DrawData) => {});
//     socket.on("chat-msg", (msg) => {});
//     socket.on("searchOpt", (opt: boolean) => {});
//   }
// }
