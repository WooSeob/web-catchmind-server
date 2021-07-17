import { Server } from "socket.io";
import { Event, Msg } from "../messages/Message";
import { User } from "../models/data";

export class DataMessage {
  private readonly server: Server;
  private readonly EventType: string;

  constructor(server: Server) {
    this.server = server;
    this.EventType = Event.getInstance().types.GAME_MSG;
  }

  public start(users: User[]) {
    this.sendGameMsg({
      type: event_game_data_types.START,
      data: {},
    });
  }

  public newTurn(words: string[], turn: string, round: number) {
    this.sendGameMsg({
      type: event_game_data_types.NEW_TURN,
      data: {
        words: words,
        turn: turn,
        round: round,
      },
    });
  }

  public commitWord(word: string) {
    this.sendGameMsg({
      type: event_game_data_types.COMMITTED_WORD,
      data: {
        word: word,
      },
    });
  }

  public userHit() {
    this.sendGameMsg({
      type: event_game_data_types.USER_HIT,
      data: {},
    });
  }

  public turnResult() {
    this.sendGameMsg({
      type: event_game_data_types.TURN_RESULT,
      data: {},
    });
  }

  public turnUserLeft() {
    this.sendGameMsg({
      type: event_game_data_types.TURN_USER_LEFT,
      data: {},
    });
  }

  public onlyOnePlayer() {
    this.sendGameMsg({
      type: event_game_data_types.ONLY_ONE_PLAYER,
      data: {},
    });
  }

  public gameResult() {
    this.sendGameMsg({
      type: event_game_data_types.GAME_RESULT,
      data: {},
    });
  }

  public timer() {
    this.sendGameMsg({
      type: event_game_data_types.TIMER,
      data: {},
    });
  }

  private sendGameMsg(gameMsg: DataMsg) {
    this.server.emit(this.EventType, gameMsg);
    // if (gameMsg.type != event.GAME_DATA.types.TIMER) {
    //   Logger.log(EventTypes.GAME_MSG, ">", this.roomID, gameMsg);
    // }
  }
}

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
