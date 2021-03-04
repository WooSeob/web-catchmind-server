import { User, DrawData, WordPool } from "../controllers/data";
import { Game } from "../controllers/gameLogic";
import { Room } from "../models/Room";
import socket_io, { Server } from "socket.io";
import { SocketHandler } from "../controllers/main";
import { Logger } from "./util";
export class RoomPool {
  private Pool: Map<string, Room>;

  static instance: RoomPool;

  private constructor() {
    this.Pool = new Map();
  }

  public static getInstance() {
    if (!RoomPool.instance) {
      RoomPool.instance = new RoomPool();
    }
    return RoomPool.instance;
  }

  public createRoom(hostName: string): Room {
    let roomID: string = (
      Math.floor(Math.random() * (9999 - 1000)) + 1000
    ).toString();

    while (this.Pool.has(roomID)) {
      roomID = (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString();
    }

    let newRoom: Room = Room.craeteRoomInstance(roomID, hostName);
    this.Pool.set(roomID, newRoom);
    return newRoom;
  }

  public matchMaking(reqUserName: string): Room {
    if (this.Pool.size > 0) {
      let matched: Room = null;

      let rooms: Room[] = Array.from(this.Pool.values());
      rooms.sort((a, b) => {
        if (a.getUserList().length > b.getUserList().length) {
          return 1;
        } else if (a.getUserList().length < b.getUserList().length) {
          return -1;
        } else {
          return 0;
        }
      });

      for (let room of rooms) {
        if (room.isSearchable()) {
          matched = room;
          break;
        }
      }

      if (matched) {
        return matched;
      } else {
        return this.createRoom(reqUserName);
      }
    } else {
      return this.createRoom(reqUserName);
    }
  }

  public getRoomByID(roomID: string): Room {
    return this.Pool.get(roomID);
  }

  public deleteRoomByID(roomID: string): boolean {
    return this.Pool.delete(roomID);
  }
}
export class RoomController {
  constructor(room: Room) {
    this.room = room;
    this.game = this.room.getGame();
  }

  private room: Room;
  private game: Game;

  setRoomSearchOpt(b: boolean) {
    this.room.setSearchable(b);
  }
  onDrawCmd(drawData: DrawData): void {
    let io: socket_io.Server = SocketHandler.getInstance().getIo();

    io.sockets.in(this.room.getRoomID()).emit("draw cmd", drawData);
    // console.log("draw cmd: " + drawData);
  }
  onDisconnect(user: User): void {
    // console.log("user disconnected ", user.getName());

    if (this.room.getUserList().length == 1) {
      //마지막 한명이 나가면 방폭
      RoomPool.getInstance().deleteRoomByID(this.room.getRoomID());
      Logger.log("Delete Room#", this.room.getRoomID());
    } else {
      this.room.getGame().userDisconnect(user);

      let io: socket_io.Server = SocketHandler.getInstance().getIo();

      this.room.removeUser(user);

      if (this.room.getHostName() == user.getName()) {
        //호스트 유저가 나간거였으면 다른사람 호스트 지목
        this.room.setHostToZeroIDX();
      }

      let userLeaveData = {
        type: "user-leave",
        data: user.getName(),
      };
      io.sockets.in(this.room.getRoomID()).emit("sys-msg", userLeaveData);
    }
  }
  onStart(user: User, gameSet: any): void {
    if (user.getName() == this.room.getHostName() && !this.game.inGame()) {
      // Logger.log("onStart,", gameSet);
      this.game.setGame(
        this.room.getUserList(),
        gameSet.round,
        gameSet.timeout
      );

      //게임 시작하니까 리스트 전달
      let io: socket_io.Server = SocketHandler.getInstance().getIo();
      let userListData = {
        host: this.room.getHostName(),
        users: this.room.getUserList().map((u) => u.getName()),
        participants: this.game.getParticipants().map((u) => u.getName()),
      };
      io.sockets.in(this.room.getRoomID()).emit("user-list", userListData);

      this.game.start();
    }
  }
  onGameMsg(user: User, msg: any): void {
    if (user.isParticipant) {
      this.game.MsgHandler(user, msg);
    }
  }
  onJoin(user: User): void {
    // 전달받은 클라이언트 정보를 저장
    // console.log(socket);
    let io: socket_io.Server = SocketHandler.getInstance().getIo();

    // console.log(user.getName(), " has joined");
    this.room.addUser(user);

    //새로운 유저 전달
    let userJoinData = {
      type: "user-join",
      data: user.getName(),
    };
    io.sockets.in(this.room.getRoomID()).emit("sys-msg", userJoinData);
  }

  onChat(user: User, msg: string): void {
    if (msg != "") {
      let io: socket_io.Server = SocketHandler.getInstance().getIo();
      let broadcastMsg = {
        from: user.getName(),
        data: msg,
      };

      io.sockets.in(this.room.getRoomID()).emit("chat-msg", broadcastMsg);

      if (msg.startsWith("/")) {
        // console.log("command detect");
        // Logger.log("command detected", user, msg)
        let command = msg.split(" ")[0];
        let target = msg.split(" ")[1];
        if (command == "/add") {
          // console.log("command detect");
          WordPool.addWord(target);
        } else if (command == "/kick") {
          this.room.getUserList().forEach((user) => {
            if (user.getName() == target) {
              // console.log("kick msg send");
              // console.log(user);
              io.sockets.sockets
                .get(user.socketID)
                .emit("sys-msg", { type: "kick" });
            }
          });
        }
      }
    }
  }
}
