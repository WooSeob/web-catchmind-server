import { Socket } from "socket.io";
import { LobbyService } from "../services/LobbyService";

export class LobbyHandler {
  private static readonly PREFIX = "LOBBY.";

  public static set(socket: Socket) {
    let lobbyCtlr: LobbyService = new LobbyService(socket);
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
