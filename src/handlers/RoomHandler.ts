import { Socket } from "socket.io";
import { RoomController } from "../controllers/RoomController";
import { Event } from "../messages/Message";

export class RoomHandler {
  private static readonly PREFIX = "ROOM.";

  public static set(socket: Socket) {
    let roomCtlr: RoomController = new RoomController(socket);
    let EventTypes = Event.getInstance().types;

    socket.on(RoomHandler.PREFIX + "join", roomCtlr.onJoin.bind(roomCtlr));
    socket.on("disconnect", roomCtlr.onDisconnect.bind(roomCtlr));
    socket.on(
      RoomHandler.PREFIX + EventTypes.GAME_CMD,
      roomCtlr.onGameCmd.bind(roomCtlr)
    );
    socket.on(
      RoomHandler.PREFIX + EventTypes.GAME_MSG,
      roomCtlr.onGameMsg.bind(roomCtlr)
    );
    socket.on(
      RoomHandler.PREFIX + EventTypes.DRAW_CMD,
      roomCtlr.onDrawCmd.bind(roomCtlr)
    );
    socket.on(
      RoomHandler.PREFIX + EventTypes.CHAT_MSG,
      roomCtlr.onChatMsg.bind(roomCtlr)
    );
    //TODO 똥
    socket.on(
      RoomHandler.PREFIX + EventTypes.SYS_MSG,
      roomCtlr.onSearchOpt.bind(roomCtlr)
    );
  }
}
