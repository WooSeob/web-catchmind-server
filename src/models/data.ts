import socket_io, { Server, Socket } from "socket.io";
import { GameService } from "../services/GameService";
import { Event } from "../messages/Message";

import { Logger } from "../util";
import { IWord, IWordDoc, Word } from "./db";
import { RoomModel } from "./RoomModel";
import { GameModel } from "./GameModel";

export class User {
  constructor(name: string, socketID: string, roomID: string) {
    this.name = name;
    this.socketID = socketID;
    this.roomID = roomID;
    this.score = new Score();
    this.isParticipant = false;
  }
  isParticipant: boolean;
  score: Score;
  socketID: string;
  private roomID: string;
  //TODO user interface와 class를 분리해서 name을 private로 다시 바꿀것
  public name: string;
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

export interface Command {
  excute(): void;
}

export class NoCommand implements Command {
  excute(): void {}
}

export class MsgSenderCommand implements Command {
  private roomID: string;

  // private Msg: DataMsg;
  constructor(roomID: string) {
    this.roomID = roomID;
    // this.Msg = msg;
  }
  excute(): void {
    // console.log("MsgSenderCommand excuted");
    // RoomPool.getInstance().getRoomByID(this.roomID).sendGameMsg(this.Msg);
  }
}

export class RestoreMsgSenderCmd implements Command {
  private gameModel: GameModel;
  private socket;
  constructor(gameModel: GameModel, socket) {
    this.gameModel = gameModel;
    this.socket = socket;
  }

  private restoreState() {
    this.socket.emit("game-sync", this.gameModel.getState().Type);
  }
  private restoreStateData() {
    // this.socket.emit("game-msg", this.gameModel.getState().getMsg());
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

export class WelcomeMsgSender implements Command {
  private socket: Socket;
  private roomModel: RoomModel;

  constructor(roomModel: RoomModel, socket: Socket) {
    this.socket = socket;
    this.roomModel = roomModel;
  }
  excute() {
    // let SysEvent = Event.getInstance().SYS;
    // this.socket.emit(
    //   SysEvent.name,
    //   SysEvent.msg.USER_WELCOME(this.roomModel.getUsersInfo())
    // );
  }
}

export class RoomNotFoundMsgSender implements Command {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }
  excute() {
    let event = Event.getInstance();
    // this.socket.emit(event.types.SYS_MSG, event.SYS.msg.ROOM_NOT_FOUND({}));
  }
}

export interface JoinData {
  roomID: string;
  user: {
    score: {
      score: number;
      correct: boolean;
      turn: boolean;
    };
    name: string;
    isParticipant: boolean;
  };
}
export interface DrawData {
  X: Number;
  Y: Number;
}

export class WordPool {
  private static words: string[] = [
    "스윙스",
    "래원",
    "돈까스",
    "머쉬베놈",
    "과로사",
    "저스디스",
    "스카이민혁",
    "어몽어스",
    "이영지",
    "꼬부기",
    "양반",
    "퇴학",
    "우즈베키스탄",
    "용의자",
    "제철소",
    "우거지국",
    "해수면",
    "강아지",
    "소방관",
    "백수",
    "잡종",
    "한경대",
    "개인기",
    "비봉관",
    "카레이서",
    "초음파",
    "피카추",
    "치어리더",
    "수달",
    "그네뛰기",
    "달마이라마",
    "베토벤",
    "짱구",
    "징징이",
    "스폰지밥",
    "연장전",
    "호두나무",
    "양초",
    "카카오나무",
    "태양",
    "엿장수",
    "검문소",
    "둘리",
    "고길동",
    "백지",
  ];

  static addWord(word: string) {
    Logger.log(this.words);
    WordPool.words.push(word);

    if (!Word) {
      console.log("mongoose connection null");
      return;
    }
    Word.findOne({ word: word }, (err, found: IWordDoc) => {
      if (err) {
        console.log(err);
        return;
      }
      if (found) {
        found.count = found.count + 1;
        found.save();
      } else {
        Word.create({
          word: word,
          count: 1,
        });
      }
    });
  }

  static getWordPool(): string[] {
    return WordPool.words;
  }

  static getPoolLength(): number {
    return WordPool.length;
  }

  static getThreeWordsByRandom(): string[] {
    let pool_dup = WordPool.words.slice();
    Logger.log(pool_dup);
    let selected: string[] = [];

    for (let i = 0; i < 3; i++) {
      let randIdx = Math.floor(Math.random() * pool_dup.length);
      let e = pool_dup.splice(randIdx, 1);
      selected.push(e[0]);
    }
    return selected;
  }
}
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
