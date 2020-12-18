// const mongoose = require("mongoose");

//TODO 잘못된 접근 대응하기
import { Game } from "./gameLogic";
import { User, JoinData, DrawData } from "./data";
import socket_io, { Server } from "socket.io";

// var userListByRoom = new Map();
var RoomPool: Map<string, Room> = new Map();

class Room {
  constructor(roomID: string, hostUser: User) {
    this.roomID = roomID;
    this.hostUser = hostUser;
    this.game = new Game(roomID);
  }
  private roomID: string;
  private hostUser: User;
  private userList: User[] = [];

  private game: Game;

  removeUser(user: User): void {
    let tempList = new Array();
    this.userList.forEach((u) => {
      tempList.push(u);
    });

    let idx = 0;
    for (let i = 0; i < this.userList.length; i++) {
      if (tempList[i] == user) {
        idx = i;
        break;
      }
    }
    tempList.splice(idx, 1);

    this.userList = [];
    tempList.forEach((u) => {
      this.userList.push(u);
    });
  }
  getUserByName(name: String): User {
    let foundUser: User;
    this.userList.forEach((user) => {
      if (user.getName() == name) {
        foundUser = user;
      }
    });
    return foundUser;
  }
  onDrawCmd(drawData: DrawData): void {
    let io: socket_io.Server = SocketHandler.getInstance().getIo();

    io.sockets.in(this.roomID).emit("draw cmd", drawData);
    console.log("draw cmd: " + drawData);
  }
  onDisconnect(user: User): void {
    console.log("user disconnected");

    if (this.userList.length == 1) {
      //마지막 한명이 나가면 방폭
      RoomPool.delete(this.roomID);
      console.log("Delete Room#", this.roomID);
    } else {
      this.game.userDisconnect(user);

      let io: socket_io.Server = SocketHandler.getInstance().getIo();

      this.removeUser(user);

      if (this.hostUser == user) {
        //호스트 유저가 나간거였으면 다른사람 호스트 지목
        this.hostUser = this.userList[0];
        let hostChangedMsg = {
          type: "host-changed",
          data: this.hostUser.getName(),
        };
        io.sockets.in(this.roomID).emit("sys-msg", hostChangedMsg);
      }

      //나갔으니까 다시 리스트 전달
      let users = this.userList.map((u) => u.getName());
      let userListData = {
        host: this.hostUser.getName(),
        users: users,
        participants: this.game.getParticipants().map((u) => u.getName()),
      };
      io.sockets.in(this.roomID).emit("user-list", userListData);
    }
  }
  onStart(user: User): void {
    if (user == this.hostUser && !this.game.inGame()) {
      this.game.setGame(this.userList, 2, 10);

      //게임 시작하니까 리스트 전달
      let io: socket_io.Server = SocketHandler.getInstance().getIo();
      let users = this.userList.map((u) => u.getName());
      let userListData = {
        host: this.hostUser.getName(),
        users: users,
        participants: this.game.getParticipants().map((u) => u.getName()),
      };
      io.sockets.in(this.roomID).emit("user-list", userListData);

      this.game.start();
    }
  }
  onGameMsg(user: User, msg: any): void {
    this.game.MsgHandler(user, msg);
  }
  onJoin(user: User): void {
    // 전달받은 클라이언트 정보를 저장
    // console.log(socket);
    let io: socket_io.Server = SocketHandler.getInstance().getIo();

    console.log("user" + user.getName() + " has joined");
    this.userList.push(user);

    let users = this.userList.map((u) => u.getName());
    let userListData = {
      host: this.hostUser.getName(),
      users: users,
      participants: null,
    };

    userListData.participants = this.game
      .getParticipants()
      .map((u) => u.getName());

    //현재 리스트 전달
    io.sockets.in(this.roomID).emit("user-list", userListData);
  }
}
export class SocketHandler {
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
  private handler(socket: socket_io.Socket): void {
    let room: Room;
    let thisUser: User;

    console.log(socket.id);
    socket.on("join", (joinData: any) => {
      let RoomID = joinData.roomID;
      thisUser = new User(joinData.user.name, socket, RoomID);

      let r = RoomPool.get(RoomID);
      if (r) {
        room = r;
      } else {
        // 내가 방장
        room = new Room(RoomID, thisUser);
        RoomPool.set(RoomID, room);
      }

      socket.join(RoomID);

      room.onJoin(thisUser);
    });

    socket.on("disconnect", () => {
      room.onDisconnect(thisUser);
    });

    socket.on("game-cmd", (msg: String) => {
      if (msg == "start") {
        console.log("game start.");
        room.onStart(thisUser);
      }
    });
    socket.on("game-msg", (msg) => {
      room.onGameMsg(thisUser, msg);
    });
    // 클라이언트로부터의 메시지가 수신되면
    socket.on("draw cmd", (drawData: DrawData) => {
      room.onGameMsg(thisUser, drawData);
    });
  }
}
