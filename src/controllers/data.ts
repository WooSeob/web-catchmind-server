import socket_io, { Server } from "socket.io";
import { SocketHandler } from "./main";
import { GameMsg } from "./Message";

export class User {
  constructor(name: string, socket: socket_io.Socket, roomID: string) {
    this.name = name;
    // this.socket = socket;
    this.roomID = roomID;
  }
  isParticipant: boolean = false;
  score: Score = null;
  private roomID: string;
  private name: string;
  // private socket: socket_io.Socket;
  public setRoomID(roomID: string): void {
    this.roomID = roomID;
  }
  public getRoomID(): string {
    return this.roomID;
  }
  // public getSocket(): socket_io.Socket {
  //   return this.socket;
  // }
  public getName(): string {
    return this.name;
  }
}

// ~가 맞췄습니다 (id, 점수)
export interface Hit {
  user: string;
  score: number;
}

export interface Command {
  excute(): void;
}

export class NoCommand implements Command {
  excute(): void {}
}

export class MsgSenderCommand implements Command {
  private roomID: string;
  private Msg: GameMsg;
  constructor(roomID: string, msg: GameMsg) {
    this.roomID = roomID;
    this.Msg = msg;
  }
  excute(): void {
    // console.log("MsgSenderCommand excuted");
    SocketHandler.getInstance().sendGameMsg(this.roomID, this.Msg);
  }
}
export interface JoinData {
  roomID: string;
  user: User;
}
export interface DrawData {
  X: Number;
  Y: Number;
}

export const WORD_POOL: String[] = [
  "쿤디판다",
  "스윙스",
  "래원",
  "돈까스",
  "머쉬베놈",
  "과로사",
  "저스디스",
  "스카이민혁",
];

export class Score {
  constructor() {
    this.initialize();
  }
  public initialize() {
    this.score = 0;
    this.correct = false;
    this.turn = false;
  }
  public matched(score: number) {
    this.correct = true;
    this.score += score;
  }
  public turnClear() {
    this.correct = false;
  }
  public getScore(): number {
    return this.score;
  }
  public isCorrect(): boolean {
    return this.correct;
  }
  public isTurn(): boolean {
    return this.turn;
  }
  private score: number;
  private correct: boolean;
  private turn: boolean;
}
