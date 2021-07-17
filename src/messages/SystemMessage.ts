import { Server } from "socket.io";
import { Event, Msg } from "../messages/Message";
import { User } from "../models/data";
import { RoomModel } from "../models/RoomModel";

export class SystemMessage {
  private readonly server: Server;
  private readonly EventType: string;

  constructor(server: Server) {
    this.server = server;
    this.EventType = Event.getInstance().types.SYS_MSG;
  }

  public changedHost(hostName: string) {
    this.sendSysMsg({
      type: event_sys_types.HOST_CHANGED,
      data: {
        newHostName: hostName,
      },
    });
  }

  public welcomeUser(room: RoomModel) {
    this.sendSysMsg({
      type: event_sys_types.USER_WELCOME,
      data: {
        host: room.getHostName(),
        users: room.getUserList(),
      },
    });
  }

  public joinUser(user: User) {
    this.sendSysMsg({
      type: event_sys_types.USER_JOIN,
      data: {
        name: user.getName(),
      },
    });
  }

  public leaveUser(user: User) {
    this.sendSysMsg({
      type: event_sys_types.USER_LEAVE,
      data: {
        name: user.getName(),
      },
    });
  }
  public notFoundRoom() {
    this.sendSysMsg({
      type: event_sys_types.ROOM_NOT_FOUND,
      data: {},
    });
  }

  private sendSysMsg(sys_Message: SysMsg) {
    this.server.emit(this.EventType, sys_Message);
    // Logger.log(EventTypes.SYS_MSG, ">", this.roomID, sys_Message);
  }
}

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

export const event_sys_types = {
  HOST_CHANGED: "host-changed",
  USER_WELCOME: "user-welcome",
  USER_JOIN: "user-join",
  USER_LEAVE: "user-leave",
  ROOM_NOT_FOUND: "room-not-found",
} as const;
export type event_sys_types =
  typeof event_sys_types[keyof typeof event_sys_types];
