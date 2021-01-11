import { Command, User } from "../data";
import socket_io, { Server } from "socket.io";
import { SocketHandler } from "../main";
import { Game } from "../gameLogic";
import { GameMsg, MSG_KEY, StateType } from "../Message";

export abstract class State {
  protected game: Game;
  public Timeout: number = 5;
  protected RemainTime: number;
  protected RemainTimeTimer: NodeJS.Timeout = null;
  protected roomID: string;
  protected io: socket_io.Server;
  protected sHandler: SocketHandler;
  protected initMsg: GameMsg;
  public readonly Type: StateType;

  constructor(game: Game) {
    this.sHandler = SocketHandler.getInstance();
    this.io = this.sHandler.getIo();
    this.game = game;
    this.roomID = game.getRoomID();
    this.initMsg = {
      key: null,
      value: null,
    };
  }

  abstract onActivated(): void;
  abstract TurnDo(user: User, msg: any): void;
  abstract NotTurnDo(user: User, msg: any): void;
  abstract notifyTimer(): void;

  getMsg(): GameMsg {
    return this.initMsg;
  }
  setTimeOut(time: number) {
    this.Timeout = time;
  }

  timer(): void {
    //TODO 넘어갈때 타이머 꺼야된다!!!
    this.RemainTime = this.Timeout;
    this.RemainTimeTimer = setInterval(() => {
      let timerMsg: GameMsg = {
        key: MSG_KEY.TIMER,
        value: --this.RemainTime,
      };
      SocketHandler.getInstance().sendGameMsg(this.roomID, timerMsg);
    }, 1000);
  }

  clearTimer() {
    if (this.RemainTimeTimer) {
      clearInterval(this.RemainTimeTimer);
    }
  }

  onInterupt(action: Command): void {
    action.excute();
  }
}
