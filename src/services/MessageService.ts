import { Server } from "socket.io";
import { SystemMessage } from "../messages/SystemMessage";
import { CommandMessage } from "../messages/CommandMessage";
import { DataMessage } from "../messages/DataMessage";
import { ChatMessage } from "../messages/ChatMessage";
import { DrawMessage } from "../messages/DrawMesssage";

export class MessageService {
  public readonly systemMessage: SystemMessage;
  public readonly commandMessage: CommandMessage;
  public readonly dataMessage: DataMessage;
  public readonly chatMessage: ChatMessage;
  public readonly drawMessage: DrawMessage;

  constructor(server: Server) {
    this.systemMessage = new SystemMessage(server);
    this.commandMessage = new CommandMessage(server);
    this.dataMessage = new DataMessage(server);
    this.chatMessage = new ChatMessage(server);
    this.drawMessage = new DrawMessage(server);
  }
}
