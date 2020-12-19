"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = exports.WORD_POOL = exports.User = void 0;
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
}
exports.Score = Score;
