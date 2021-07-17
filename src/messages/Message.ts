import { Server } from "socket.io";

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
}
