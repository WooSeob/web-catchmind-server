import { Command, User } from "../../models/data";
import socket_io, { Server } from "socket.io";
import { Game } from "../GameController";
import { Room } from "../../models/Room";
import { DataMsg } from "../../messages/GameData";
import { Event } from "../../messages/Message";

export abstract class State {
  protected game: Game;
  public Timeout: number = 5;
  protected RemainTime: number;
  protected RemainTimeTimer: NodeJS.Timeout = null;
  protected room: Room;
  protected io: socket_io.Server;
  protected initMsg: DataMsg;
  protected event: Event;
  public readonly Type: string;

  constructor(game: Game) {
    this.game = game;
    this.room = game.getRoom();
    this.event = Event.getInstance();
  }

  abstract onActivated(): void;
  abstract TurnDo(user: User, msg: any): void;
  abstract NotTurnDo(user: User, msg: any): void;
  abstract notifyTimer(): void;

  getMsg(): DataMsg {
    return this.initMsg;
  }

  setTimeOut(time: number) {
    this.Timeout = time;
  }

  timer(): void {
    //TODO 넘어갈때 타이머 꺼야된다!!!
    this.RemainTime = this.Timeout;
    this.RemainTimeTimer = setInterval(() => {
      let timerMsg: DataMsg = this.event.GAME_DATA.msg.TIMER({
        remainTime: --this.RemainTime,
      });

      this.room.sendGameMsg(timerMsg);
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
