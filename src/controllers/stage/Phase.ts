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
    this.sHandler = SocketHandler.getInstance()
    this.io = this.sHandler.getIo();
  }
  Do(): Promise<Phase> {
    this.timer();
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
  timer(): void {
    this.RemainTimeTimer = setInterval(() => {
      let timerMsg = {
        type: "timer",
        data: --this.Timeout,
      };
      this.io.sockets.in(this.roomID).emit("game-msg", timerMsg);
    }, 1000);
  }

  suspendAllTask(nextPhase: Phase | Map<String, number>): void {
    clearTimeout(this.RemainTimeTimer);
    clearTimeout(this.TransitionTimer);
    this.mResolve(nextPhase);
  }

  protected Timeout: number = 3;
  private mResolve;
  protected RemainTimeTimer: NodeJS.Timeout;
  protected TransitionTimer: NodeJS.Timeout;
  protected roomID: string;
  protected io: socket_io.Server;
  protected sHandler: SocketHandler;
}
