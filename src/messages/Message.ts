import { ChatMsgFactory, event_chat_types } from "./ChatMsg";
import { DrawMsgFactory, event_draw_types } from "./DrawCmd";
import { CmdMsgFactory, event_game_cmd_types } from "./GameCmd";
import { DataMsgFactory, event_game_data_types } from "./GameData";
import { event_sys_types, SysMsgFactory } from "./SysMsg";

export const StateTypes = {
  ready: "ready",
  prepare: "prepare",
  guess: "guess",
  result: "result",
} as const;
export type StateTypes = typeof StateTypes[keyof typeof StateTypes];

const EventTypes = {
  SYS_MSG: "sys-msg",
  GAME_CMD: "game-cmd",
  GAME_MSG: "game-msg",
  CHAT_MSG: "chat-msg",
  DRAW_CMD: "draw cmd",
} as const;
type EventTypes = typeof EventTypes[keyof typeof EventTypes];

export interface Msg {
  type: string;
}

export class Event {
  private static instance: Event;
  private constructor() {}
  static getInstance(): Event {
    if (!this.instance) {
      this.instance = new Event();
    }
    return this.instance;
  }

  readonly types = EventTypes;

  readonly SYS = {
    name: EventTypes.SYS_MSG,
    types: event_sys_types,
    msg: new SysMsgFactory(),
  };
  readonly GAME_CMD = {
    name: EventTypes.GAME_CMD,
    types: event_game_cmd_types,
    msg: new CmdMsgFactory(),
  };
  readonly GAME_DATA = {
    name: EventTypes.GAME_MSG,
    types: event_game_data_types,
    msg: new DataMsgFactory(),
  };

  readonly CHAT = {
    name: EventTypes.CHAT_MSG,
    types: event_chat_types,
    msg: new ChatMsgFactory(),
  };
  readonly DRAW = {
    name: EventTypes.DRAW_CMD,
    types: event_draw_types,
    msg: new DrawMsgFactory(),
  };
}

// interface MessageType {
//   name: string;
//   types:
//     | event_sys_types
//     | event_game_cmd_types
//     | event_game_data_types
//     | event_chat_types
//     | event_draw_types;
// }

//   static readonly SysMsg: MessageType = {
//     event: Type.events.SYS_MSG,
//     types: {
//       HOST_CHANGED: "host-changed",
//       USER_WELCOME: "user-welcome",
//       USER_JOIN: "user-join",
//       USER_LEAVE: "user-leave",
//       ROOM_NOT_FOUND: "room-not-found",
//     },
//   };
//   static readonly GameCmd: MessageType = {
//     event: Type.events.GAME_CMD,
//     types: {
//       ready: "ready",
//       prepare: "prepare",
//       guess: "guess",
//       result: "result",
//       START: "start",
//     },
//   };
//   static readonly GameMsg: MessageType = {
//     event: Type.events.GAME_MSG,
//     types: {
//       START: "start",
//       NEW_TURN: "new_turn",
//       //guess
//       COMMITTED_WORD: "committed_word",
//       USER_HIT: "user_hit",
//       //result
//       TURN_RESULT: "turn_result",
//       TURN_USER_LEFT: "turn_user_left",
//       ONLY_ONE_PLAYER: "only_one_player",
//       //ready
//       GAME_RESULT: "game_result",
//       //COMMON
//       TIMER: "timer",
//       RESTORE_PUSERS: "restore_pusers",
//     },
//   };
//   static readonly ChatMsg: MessageType = {
//     event: Type.events.CHAT_MSG,
//     types: {
//       CHAT: "chat",
//     },
//   };
//   static readonly DrawCmd: MessageType = {
//     event: Type.events.DRAW_CMD,
//     types: {
//       DRAW: "draw",
//       PEN_UP: "pen_up",
//       MODE_CHANGE: "mode change",
//       WIDTH_CHANGE: "width change",
//       COLOR_CHANGE: "color change",
//       CANVAS_CLEAR: "canvas clear",
//     },
//   };

// interface SysMsgType extends MessageType {
//   types: event_sys_types;
// }

// interface CmdMsgType extends MessageType {
//   types: event_game_cmd_types;
// }

// interface DataMsgType extends MessageType {
//   types: event_game_data_types;
// }

// interface ChatMsgType extends MessageType {
//   types: event_chat_types;
// }

// interface DrawMsgType extends MessageType {
//   types: event_draw_types;
// }
// SYS_MSG: "sys-msg",
//   GAME_CMD: "game-cmd",
//   GAME_MSG: "game-msg",
//   CHAT_MSG: "chat-msg",
//   DRAW_CMD: "draw cmd",

// const event_sys_types = {
//   HOST_CHANGED: "host-changed",
//   USER_WELCOME: "user-welcome",
//   USER_JOIN: "user-join",
//   USER_LEAVE: "user-leave",
//   ROOM_NOT_FOUND: "room-not-found",
// } as const;
// type event_sys_types = typeof event_sys_types[keyof typeof event_sys_types];

// abstract class aEvent {
//   SYS: SysMsgType | CmdMsgType;
//   GAME_CMD: CmdMsgType;
//   GAME_DATA: DataMsgType;
//   CHAT: ChatMsgType;
//   DRAW: DrawMsgType;
// }
