import { Msg } from "./Message";

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

export class CmdMsgFactory {
  STATE_CHANGED(data: stateChanged): CmdMsg {
    return {
      type: event_game_cmd_types.STATE_CHANGED,
      data: data,
    };
  }
  START_GAME(data: settingOpt): CmdMsg {
    return {
      type: event_game_cmd_types.START_GAME,
      data: data,
    };
  }
}
