"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = exports.WORD_POOL = exports.MsgSenderCommand = exports.NoCommand = exports.User = void 0;
const main_1 = require("./main");
class User {
    constructor(name, socket, roomID) {
        this.isParticipant = false;
        this.score = null;
        this.name = name;
        // this.socket = socket;
        this.roomID = roomID;
    }
    // private socket: socket_io.Socket;
    setRoomID(roomID) {
        this.roomID = roomID;
    }
    getRoomID() {
        return this.roomID;
    }
    // public getSocket(): socket_io.Socket {
    //   return this.socket;
    // }
    getName() {
        return this.name;
    }
}
exports.User = User;
class NoCommand {
    excute() { }
}
exports.NoCommand = NoCommand;
class MsgSenderCommand {
    constructor(roomID, msg) {
        this.roomID = roomID;
        this.Msg = msg;
    }
    excute() {
        // console.log("MsgSenderCommand excuted");
        main_1.SocketHandler.getInstance().sendGameMsg(this.roomID, this.Msg);
    }
}
exports.MsgSenderCommand = MsgSenderCommand;
exports.WORD_POOL = [
    "쿤디판다",
    "스윙스",
    "래원",
    "돈까스",
    "머쉬베놈",
    "과로사",
    "저스디스",
    "스카이민혁",
];
class Score {
    constructor() {
        this.initialize();
    }
    initialize() {
        this.score = 0;
        this.correct = false;
        this.turn = false;
    }
    matched(score) {
        this.correct = true;
        this.score += score;
    }
    turnClear() {
        this.correct = false;
    }
    getScore() {
        return this.score;
    }
    isCorrect() {
        return this.correct;
    }
    isTurn() {
        return this.turn;
    }
}
exports.Score = Score;
