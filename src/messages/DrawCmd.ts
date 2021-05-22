import { Msg } from "./Message";

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

export class DrawMsgFactory {
  DRAW(data: draw): DrawMsg {
    return {
      type: event_draw_types.DRAW,
      data: data,
    };
  }
  PEN_UP(data: penUp): DrawMsg {
    return {
      type: event_draw_types.PEN_UP,
      data: data,
    };
  }
  MODE_CHANGE(data: changeMode): DrawMsg {
    return {
      type: event_draw_types.MODE_CHANGE,
      data: data,
    };
  }
  WIDTH_CHANGE(data: changeWidth): DrawMsg {
    return {
      type: event_draw_types.WIDTH_CHANGE,
      data: data,
    };
  }
  COLOR_CHANGE(data: changeColor): DrawMsg {
    return {
      type: event_draw_types.COLOR_CHANGE,
      data: data,
    };
  }
  CANVAS_CLEAR(data: clearCanvas): DrawMsg {
    return {
      type: event_draw_types.CANVAS_CLEAR,
      data: data,
    };
  }
}
