import { Server } from "socket.io";
import { Logger } from "../util";
import { Room } from "./Room";

export class RoomPool {
  private Pool: Map<string, Room>;

  public static server: Server;
  static instance: RoomPool;

  private constructor() {
    this.Pool = new Map();
  }

  public static setServer(IOserver: Server) {
    Room.io = IOserver;
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
    Logger.log("room", newRoom, "created");
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
