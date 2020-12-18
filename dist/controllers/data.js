"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORD_POOL = exports.User = void 0;
class User {
    constructor(name, socket, roomID) {
        this.name = name;
        this.socket = socket;
        this.roomID = roomID;
    }
    setRoomID(roomID) {
        this.roomID = roomID;
    }
    getRoomID() {
        return this.roomID;
    }
    getSocket() {
        return this.socket;
    }
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
