import { RoomPool } from "../models/RoomPool";
import { RoomModel } from "../models/RoomModel";
import { Socket } from "socket.io";

export class LobbyService {
  private socket: Socket;
  public constructor(socket: Socket) {
    this.socket = socket;
  }

  public onCreateRoom(createReqMsg) {
    let roomPool: RoomPool = RoomPool.getInstance();
    let newRoomModel: RoomModel = roomPool.createRoom(createReqMsg.uid);
    this.socket.emit("LOBBY.create-room", newRoomModel.getRoomID());
  }

  public onSearchRoom(searchReqMsg) {
    let roomPool: RoomPool = RoomPool.getInstance();
    let matchedRoomModel: RoomModel = roomPool.matchMaking(searchReqMsg.uid);
    this.socket.emit("LOBBY.search-room", matchedRoomModel.getRoomID());
  }

  public onJoin(joinReqMsg) {}
  public onDisconnect() {}
}
