enum Sys_Type {
  HOST_CHANGED,
  USER_WELCOME,
  USER_JOIN,
  USER_LEAVE,
}
enum Msg_Type {
  WORDS,
  SYSTEM,
  TIMER,
}
export interface Msg_Message {
  type: Msg_Type;
  data: any;
}
export interface Sys_Message {
  type: Sys_Type;
  data: any;
}
// export interface Cmd_Message{
//     type: Cmd_Type;
//     data: any;
// }

export enum PhaseType {
  ready = "ready",
  prepare = "prepare",
  guess = "guess",
  result = "result",
}

enum Cmd_Type {
  TRANSITION,
  TURN,
  TURN_LEFT,
  ROUND,
  GAME_OVER,
  GAME_START,
}

export abstract class Cmd_Message {
  inflate(CmdLike: any): Cmd_Message {
    this.type = CmdLike.type;
    this.data = CmdLike.data;
    return this;
  }
  type: Cmd_Type;
  data: any;
}
export class Cmd_Transition extends Cmd_Message {
  type: Cmd_Type = Cmd_Type.TRANSITION;
  state: PhaseType;
  data: Map<string, number> | string;
  constructor(state: PhaseType, data: Map<string, number> | string) {
    super();
    this.state = state;
    this.data = data;
  }
  inflate(CmdLike: any): Cmd_Message {
    super.inflate(CmdLike);
    this.state = CmdLike.state;
    return this;
  }
}

export class Cmd_Turn extends Cmd_Message {
  type: Cmd_Type = Cmd_Type.TURN;
  data: string; //이번 턴 유저이름
  constructor(data: string) {
    super();
    this.data = data;
  }
}

export class Cmd_TurnLeft extends Cmd_Message {
  type: Cmd_Type = Cmd_Type.TURN_LEFT;
  data: string; //나간 턴 유저 이름
  constructor(data: string) {
    super();
    this.data = data;
  }
}

export class Cmd_Round extends Cmd_Message {
  type: Cmd_Type = Cmd_Type.ROUND;
  data: number;
  constructor(data: number) {
    super();
    this.data = data;
  }
}

export class Cmd_GameOver extends Cmd_Message {
  type: Cmd_Type = Cmd_Type.GAME_OVER;
  data: number; //???
  constructor(data: number) {
    super();
    this.data = data;
  }
}

export class Cmd_GameStart extends Cmd_Message {
  type: Cmd_Type = Cmd_Type.GAME_START;
  data: string[]; // 참여자 이름 배열
  constructor(data: string[]) {
    super();
    this.data = data;
  }
}

export enum StateType {
  ready = "ready",
  prepare = "prepare",
  guess = "guess",
  result = "result",
}

export interface GameMsg {
  key: MSG_KEY;
  value: any;
}

export enum MSG_KEY {
  //prepare
  START = "start",
  NEW_TURN = "new_turn",
  //guess
  COMMITTED_WORD = "committed_word",
  USER_HIT = "user_hit",
  //result
  TURN_RESULT = "turn_result",
  TURN_USER_LEFT = "turn_user_left",
  //ready
  GAME_RESULT = "game_result",
  //COMMON
  TIMER = "timer",
}
