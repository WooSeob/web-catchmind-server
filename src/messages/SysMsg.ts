import { User } from "../models/data";
import { Msg } from "./Message";

export const event_sys_types = {
  HOST_CHANGED: "host-changed",
  USER_WELCOME: "user-welcome",
  USER_JOIN: "user-join",
  USER_LEAVE: "user-leave",
  ROOM_NOT_FOUND: "room-not-found",
} as const;
export type event_sys_types =
  typeof event_sys_types[keyof typeof event_sys_types];

export interface hostChanged {
  newHostName: string;
}

export interface userWelcome {
  host: string;
  users: User[];
}

export interface userJoin {
  name: string;
}

export interface userLeave {
  name: string;
}

export interface roomNotFound {}

type DataTypes =
  | hostChanged
  | userWelcome
  | userJoin
  | userLeave
  | roomNotFound;

export interface SysMsg extends Msg {
  data: DataTypes;
}

export class SysMsgFactory {
  HOST_CHANGED(data: hostChanged): SysMsg {
    return {
      type: event_sys_types.HOST_CHANGED,
      data: data,
    };
  }

  USER_WELCOME(data: userWelcome): SysMsg {
    return {
      type: event_sys_types.USER_WELCOME,
      data: data,
    };
  }

  USER_JOIN(data: userJoin): SysMsg {
    return {
      type: event_sys_types.USER_JOIN,
      data: data,
    };
  }

  USER_LEAVE(data: userLeave): SysMsg {
    return {
      type: event_sys_types.USER_LEAVE,
      data: data,
    };
  }

  ROOM_NOT_FOUND(data: roomNotFound): SysMsg {
    return {
      type: event_sys_types.ROOM_NOT_FOUND,
      data: data,
    };
  }
}

// interface ISysEvent {
//   HOST_CHANGED(data: DataTypes);
//   USER_WELCOME(data: DataTypes);
//   USER_JOIN(data: DataTypes);
//   USER_LEAVE(data: DataTypes);
//   ROOM_NOT_FOUND(data: DataTypes);
// }
