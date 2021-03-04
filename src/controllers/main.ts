// const mongoose = require("mongoose");

//TODO 잘못된 접근 대응하기
import { Game } from "./gameLogic";
import { User, JoinData, DrawData, Score, RestoreMsgSenderCmd } from "./data";
import socket_io, { Server } from "socket.io";
import {
  Cmd_GameStart,
  Cmd_Message,
  GameMsg,
  MSG_KEY,
  Msg_Message,
  StateType,
  Sys_Message,
} from "./Message";
// var userListByRoom = new Map();
import { RoomController, RoomPool } from "./RoomController";
import { Logger } from "./util";
export class SocketHandler {
  public static currentConnected: number = 1; 
  private static instance: SocketHandler;
  private io: socket_io.Server;

  private constructor(io: socket_io.Server) {
    this.io = io;
    this.io.on("connection", this.handler);
  }
  public getIo(): socket_io.Server {
    return this.io;
  }
  static createInstance(io: socket_io.Server) {
    this.instance = new SocketHandler(io);
  }

  static getInstance() {
    if (SocketHandler.instance) {
      return SocketHandler.instance;
    } else {
      console.log("<< SocketHandler 인스턴스가 없습니다 >>");
      return null;
    }
  }

  sendGameSync(roomID: string, State: StateType) {
    this.io.sockets.in(roomID).emit("game-sync", State);
    Logger.log("game-sync >", roomID, State)
  }

  sendGameMsg(roomID: string, gameMsg: GameMsg) {
    this.io.sockets.in(roomID).emit("game-msg", gameMsg);
    if(gameMsg.key != MSG_KEY.TIMER){
      Logger.log("game-msg >", roomID, gameMsg)
    }
  }

  sendSysMsg(roomID: string, sys_Message: Sys_Message) {
    this.io.sockets.in(roomID).emit("sys-msg", sys_Message);
    Logger.log("sys-msg >", roomID, sys_Message)
  }

  private handler(socket: socket_io.Socket): void {
    Logger.log("connect. now " + (++SocketHandler.currentConnected))

    let roomController: RoomController;
    let thisUser: User;

    var handshake = socket.handshake;
    Logger.log("New Connection from ", handshake.address)

    socket.on("lobby-msg", (msg) => {
      if (msg.type == "createRoom") {
        let createdRoom = RoomPool.getInstance().createRoom(msg.data);
        let roomCreated = {
          type: "createRoom",
          data: createdRoom.getRoomID(),
        };
        socket.emit("lobby-msg", roomCreated);
      } else if (msg.type == "searchRoom") {
        let matchedRoom = RoomPool.getInstance().matchMaking(msg.data);
        let roomMatched = {
          type: "searchRoom",
          data: matchedRoom.getRoomID(),
        };
        socket.emit("lobby-msg", roomMatched);
      }
    });

    socket.on("join", (joinData: any) => {
      // 방 찾기 -> 기존 방의 아이디를 받음
      // 방 만들기 -> 새로 만들어도 좋은 아이디를 받음
      Logger.log("join", joinData, "from", socket.handshake.address)

      let RoomID = joinData.roomID;
      thisUser = new User(joinData.user.name, socket.id, RoomID);

      let room = RoomPool.getInstance().getRoomByID(RoomID);

      if (!room) {
        let roomNotFound = {
          type: "room-not-found",
          data: null,
        };
        socket.emit("sys-msg", roomNotFound);
        return;
      }

      socket.join(RoomID);

      roomController = new RoomController(room);
      roomController.onJoin(thisUser);

      let welcomeMsg = {
        type: "user-welcome",
        data: room.getUsersInfo(),
      };
      socket.emit("sys-msg", welcomeMsg);
      if (room.isInGame()) {
        new RestoreMsgSenderCmd(room.getGame(), socket).excute();
      }
    });

    socket.on("disconnect", () => {
      Logger.log("disconnect. now " + (--SocketHandler.currentConnected))
      if (roomController) {
        Logger.log("disconnect <", thisUser.getName(), socket.handshake.address)
        roomController.onDisconnect(thisUser);
      }
    });

    socket.on("game-cmd", (msg) => {
      if (roomController) {
        Logger.log("chat-cmd <", thisUser.getName(), msg, socket.handshake.address)
        if (msg.type == "start") {
          console.log("game start.");
          roomController.onStart(thisUser, msg.data);
        }
      }
    });
    socket.on("game-msg", (msg) => {
      if (roomController) {
        Logger.log("game-msg <", thisUser.getName(), msg, socket.handshake.address)
        roomController.onGameMsg(thisUser, msg);
      }
    });
    // 클라이언트로부터의 메시지가 수신되면
    socket.on("draw cmd", (drawData: DrawData) => {
      if (roomController) {
        roomController.onGameMsg(thisUser, drawData);
      }
    });

    socket.on("chat-msg", (msg) => {
      if (roomController) {
        Logger.log("chat-msg <", thisUser.getName(), msg, socket.handshake.address)
        roomController.onChat(thisUser, msg);
      }
    });

    socket.on("searchOpt", (opt: boolean)=>{
      if(roomController){
        Logger.log("searchOpt <", thisUser.getName(), opt, socket.handshake.address)
        roomController.setRoomSearchOpt(opt)
      }
    })
  }
}
