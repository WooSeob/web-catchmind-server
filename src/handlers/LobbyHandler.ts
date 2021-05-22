import { Socket } from "socket.io";
import { LobbyController } from "../controllers/LobbyController";

export class LobbyHandler {
  private static readonly PREFIX = "LOBBY.";

  public static set(socket: Socket) {
    let lobbyCtlr: LobbyController = new LobbyController(socket);
    socket.on(LobbyHandler.PREFIX + "join", lobbyCtlr.onJoin.bind(lobbyCtlr));
    socket.on(
      LobbyHandler.PREFIX + "disconnect",
      lobbyCtlr.onDisconnect.bind(lobbyCtlr)
    );
    socket.on(
      LobbyHandler.PREFIX + "create-room",
      lobbyCtlr.onCreateRoom.bind(lobbyCtlr)
    );
    socket.on(
      LobbyHandler.PREFIX + "search-room",
      lobbyCtlr.onSearchRoom.bind(lobbyCtlr)
    );
  }
}
