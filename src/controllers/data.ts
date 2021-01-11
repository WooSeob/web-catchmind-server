import socket_io, { Server } from "socket.io";
import { Game } from "./gameLogic";
import { SocketHandler } from "./main";
import { GameMsg, MSG_KEY } from "./Message";

export class User {
  constructor(name: string, socket: socket_io.Socket, roomID: string) {
    this.name = name;
    // this.socket = socket;
    this.roomID = roomID;
    this.score = new Score();
    this.isParticipant = false;
  }
  isParticipant: boolean;
  score: Score;
  socket: socket_io.Socket;
  private roomID: string;
  private name: string;
  // private socket: socket_io.Socket;
  public setParticipant() {
    this.score.initialize();
    this.isParticipant = true;
  }
  public exitFromGame() {
    this.score.initialize();
    this.isParticipant = false;
  }
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

export class RestoreMsgSenderCmd implements Command {
  private game: Game;
  private socket;
  constructor(game: Game, socket) {
    this.game = game;
    this.socket = socket;
  }

  private restoreState() {
    this.socket.emit("game-sync", this.game.getState().Type);
  }
  private restoreStateData() {
    this.socket.emit("game-msg", this.game.getState().getMsg());
  }
  private restoreParticipants() {
    // 현재 참여자들 전송
    // let users = new Array();
    // for (let user of this.game.getParticipants()) {
    //   users.push({
    //     name: user.getName(),
    //     score: user.score,
    //   });
    // }
    // let curUsersMsg: GameMsg = {
    //   key: MSG_KEY.RESTORE_PUSERS,
    //   value: users,
    // };
    // this.socket.emit("sys-msg", curUsersMsg);
  }

  public excute() {
    // this.restoreParticipants();
    this.restoreState();
    this.restoreStateData();
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
