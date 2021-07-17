import { Server } from "socket.io";
import { Event, Msg } from "../messages/Message";
import { User } from "../models/data";

export class ChatMessage {
  private readonly server: Server;
  private readonly EventType: string;

  constructor(server: Server) {
    this.server = server;
    this.EventType = Event.getInstance().types.CHAT_MSG;
  }

  public chat(from: User, body: string) {
    this.sendChatMsg({
      type: event_chat_types.CHAT,
      data: {
        from: from,
        body: body,
      },
    });
  }
  private sendChatMsg(msg: ChatMsg) {
    this.server.emit(this.EventType, msg);
  }
}

export const event_chat_types = {
  CHAT: "chat",
} as const;
export type event_chat_types =
  typeof event_chat_types[keyof typeof event_chat_types];

export interface chat {
  from: User;
  body: string;
}

type DataTypes = chat;

export interface ChatMsg extends Msg {
  data: DataTypes;
}
