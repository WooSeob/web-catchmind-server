import { RoomPool } from "../models/RoomPool";
import { Room } from "../models/Room";
import { Socket } from "socket.io";

export class LobbyController {
  private socket: Socket;
  public constructor(socket: Socket) {
    this.socket = socket;
  }

  public onCreateRoom(createReqMsg) {
    let roomPool: RoomPool = RoomPool.getInstance();
    let newRoom: Room = roomPool.createRoom(createReqMsg.uid);
    this.socket.emit("LOBBY.create-room", newRoom.getRoomID());
  }

  public onSearchRoom(searchReqMsg) {
    let roomPool: RoomPool = RoomPool.getInstance();
    let matchedRoom: Room = roomPool.matchMaking(searchReqMsg.uid);
    this.socket.emit("LOBBY.search-room", matchedRoom.getRoomID());
  }

  public onJoin(joinReqMsg) {}
  public onDisconnect() {}
}
