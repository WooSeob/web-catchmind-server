import { Server } from "socket.io";
import { Event, Msg } from "../messages/Message";

export class CommandMessage {
  private readonly server: Server;
  private readonly EventType: string;

  constructor(server: Server) {
    this.server = server;
    this.EventType = Event.getInstance().types.GAME_CMD;
  }

  public changeState(newState: string) {
    this.sendGameSync({
      type: event_game_cmd_types.STATE_CHANGED,
      data: {
        newState: newState,
      },
    });
  }

  public startGame(round: number, timeout: number) {
    this.sendGameSync({
      type: event_game_cmd_types.START_GAME,
      data: {
        round: round,
        timeout: timeout,
      },
    });
  }

  private sendGameSync(state: CmdMsg) {
    this.server.emit(this.EventType, state);
  }
}

export const event_game_cmd_types = {
  STATE_CHANGED: "state-changed",
  START_GAME: "start",
} as const;
export type event_game_cmd_types =
  typeof event_game_cmd_types[keyof typeof event_game_cmd_types];

// ready: "ready",
// prepare: "prepare",
// guess: "guess",
// result: "result",

export interface stateChanged {
  newState: string;
}

export interface settingOpt {
  round: number;
  timeout: number;
}

type DataTypes = stateChanged | settingOpt;

export interface CmdMsg extends Msg {
  data: DataTypes;
}
