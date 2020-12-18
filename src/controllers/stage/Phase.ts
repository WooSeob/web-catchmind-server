import { User } from "../data";
import socket_io, { Server } from "socket.io";
import { SocketHandler } from "../main";

export interface Phase {
  Do(): Promise<Phase>;
  TurnDo(user: User, msg: any): void;
  NotTurnDo(user: User, msg: any): void;
  stopPhase(): void;
}

export abstract class State implements Phase {
  constructor() {
    this.io = SocketHandler.getInstance().getIo();
  }
  Do(): Promise<Phase> {
    let nextPhase = new Promise<Phase>((resolve, reject) => {
      try {
        this.Transition(resolve);
      } catch (error) {
        reject(Error(error));
      }
    });
    return nextPhase;
  }
  stopPhase(): void {
    clearTimeout(this.TransitionTimer);
  }
  TurnDo(user: User, msg: any): void {}
  NotTurnDo(user: User, msg: any): void {}
  Transition(resolve): void {
    this.mResolve = resolve;
  }

  protected mResolve;
  protected TransitionTimer: NodeJS.Timeout;
  protected roomID: string;
  protected io: socket_io.Server;
}
