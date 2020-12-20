import socket_io, { Server } from "socket.io";

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
    this.score = 0;
    this.correct = false;
    this.turn = false;
  }

  matched(score: number) {
    this.correct = true;
    this.score += score;
  }
  turnClear() {
    this.correct = false;
  }
  score: number;
  correct: boolean;
  turn: boolean;
}
