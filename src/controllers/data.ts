import socket_io, { Server } from "socket.io";

export class User {
  constructor(name: String, socket: socket_io.Socket, roomID: string) {
    this.name = name;
    this.socket = socket;
    this.roomID = roomID;
  }
  private roomID: string;
  private name: String;
  private socket: socket_io.Socket;
  public setRoomID(roomID: string): void {
    this.roomID = roomID;
  }
  public getRoomID(): string {
    return this.roomID;
  }
  public getSocket(): socket_io.Socket {
    return this.socket;
  }
  public getName(): String {
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
