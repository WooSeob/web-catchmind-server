import { Server } from "socket.io";
import { Event } from "../messages/Message";
import { Msg } from "./Message";

export class DrawMessage {
  private readonly server: Server;
  private readonly EventType: string;

  constructor(server: Server) {
    this.server = server;
    this.EventType = Event.getInstance().types.DRAW_CMD;
  }

  public draw() {
    this.sendDrawCmd({
      type: event_draw_types.DRAW,
      data: {},
    });
  }
  public penUp() {
    this.sendDrawCmd({
      type: event_draw_types.PEN_UP,
      data: {},
    });
  }
  public changeMode() {
    this.sendDrawCmd({
      type: event_draw_types.MODE_CHANGE,
      data: {},
    });
  }
  public changeWidth() {
    this.sendDrawCmd({
      type: event_draw_types.WIDTH_CHANGE,
      data: {},
    });
  }
  public changeColor() {
    this.sendDrawCmd({
      type: event_draw_types.COLOR_CHANGE,
      data: {},
    });
  }
  public clearCanvas() {
    this.sendDrawCmd({
      type: event_draw_types.CANVAS_CLEAR,
      data: {},
    });
  }
  private sendDrawCmd(cmd: DrawMsg) {
    this.server.emit(this.EventType, cmd);
  }
}

export const event_draw_types = {
  DRAW: "draw",
  PEN_UP: "pen_up",
  MODE_CHANGE: "mode change",
  WIDTH_CHANGE: "width change",
  COLOR_CHANGE: "color change",
  CANVAS_CLEAR: "canvas clear",
} as const;
export type event_draw_types =
  typeof event_draw_types[keyof typeof event_draw_types];

export interface draw {
  NormX: number;
  NormY: number;
}

export interface penUp {}

export interface changeMode {
  mode: string;
}

export interface changeWidth {
  width: number;
}

export interface changeColor {
  color: string;
}

export interface clearCanvas {}

type DataTypes =
  | draw
  | penUp
  | changeMode
  | changeWidth
  | changeColor
  | clearCanvas;

export interface DrawMsg extends Msg {
  data: DataTypes;
}
