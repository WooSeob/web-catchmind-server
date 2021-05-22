import { User } from "../models/data";
import { Msg } from "./Message";

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

export class ChatMsgFactory {
  CHAT(data: chat): ChatMsg {
    return {
      type: event_chat_types.CHAT,
      data: data,
    };
  }
}
