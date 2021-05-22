import { Msg } from "./Message";

export const event_game_data_types = {
  START: "start",
  NEW_TURN: "new_turn",
  //guess
  COMMITTED_WORD: "committed_word",
  USER_HIT: "user_hit",
  //result
  TURN_RESULT: "turn_result",
  TURN_USER_LEFT: "turn_user_left",
  ONLY_ONE_PLAYER: "only_one_player",
  //ready
  GAME_RESULT: "game_result",
  //COMMON
  TIMER: "timer",
  // RESTORE_PUSERS: "restore_pusers",
} as const;
export type event_game_data_types =
  typeof event_game_data_types[keyof typeof event_game_data_types];

export interface start {
  users: string[];
}
export interface newTurn {
  words: string[];
  turn: string;
  round: number;
}

export interface commitedWord {
  word: string;
}

export interface userHit {
  user: string;
  score: number;
}

export interface turnResult {
  result: userHit[];
}

export interface turnUserLeft {
  user: string;
}

export interface onlyOnePlayer {}

export interface gameResult {
  result: userHit[];
}

export interface timer {
  remainTime: number;
}

type DataTypes =
  | start
  | newTurn
  | commitedWord
  | userHit
  | turnResult
  | turnUserLeft
  | onlyOnePlayer
  | gameResult
  | timer;

export interface DataMsg extends Msg {
  data: DataTypes;
}

export class DataMsgFactory {
  START(data: start): DataMsg {
    return {
      type: event_game_data_types.START,
      data: data,
    };
  }
  NEW_TURN(data: newTurn): DataMsg {
    return {
      type: event_game_data_types.NEW_TURN,
      data: data,
    };
  }
  COMMITTED_WORD(data: commitedWord): DataMsg {
    return {
      type: event_game_data_types.COMMITTED_WORD,
      data: data,
    };
  }
  USER_HIT(data: userHit): DataMsg {
    return {
      type: event_game_data_types.USER_HIT,
      data: data,
    };
  }
  TURN_RESULT(data: turnResult): DataMsg {
    return {
      type: event_game_data_types.TURN_RESULT,
      data: data,
    };
  }
  TURN_USER_LEFT(data: turnUserLeft): DataMsg {
    return {
      type: event_game_data_types.TURN_USER_LEFT,
      data: data,
    };
  }
  ONLY_ONE_PLAYER(data: onlyOnePlayer): DataMsg {
    return {
      type: event_game_data_types.ONLY_ONE_PLAYER,
      data: data,
    };
  }
  GAME_RESULT(data: gameResult): DataMsg {
    return {
      type: event_game_data_types.GAME_RESULT,
      data: data,
    };
  }
  TIMER(data: timer): DataMsg {
    return {
      type: event_game_data_types.TIMER,
      data: data,
    };
  }
}
