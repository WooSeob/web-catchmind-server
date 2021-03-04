"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = exports.WordPool = exports.RestoreMsgSenderCmd = exports.MsgSenderCommand = exports.NoCommand = exports.User = void 0;
const main_1 = require("./main");
const util_1 = require("./util");
const db_1 = require("../models/db");
class User {
    constructor(name, socketID, roomID) {
        this.name = name;
        this.socketID = socketID;
        this.roomID = roomID;
        this.score = new Score();
        this.isParticipant = false;
    }
    // private socket: socket_io.Socket;
    setParticipant() {
        this.score.initialize();
        this.isParticipant = true;
    }
    exitFromGame() {
        this.score.initialize();
        this.isParticipant = false;
    }
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
class RestoreMsgSenderCmd {
    constructor(game, socket) {
        this.game = game;
        this.socket = socket;
    }
    restoreState() {
        this.socket.emit("game-sync", this.game.getState().Type);
    }
    restoreStateData() {
        this.socket.emit("game-msg", this.game.getState().getMsg());
    }
    restoreParticipants() {
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
    excute() {
        // this.restoreParticipants();
        this.restoreState();
        this.restoreStateData();
    }
}
exports.RestoreMsgSenderCmd = RestoreMsgSenderCmd;
class WordPool {
    static addWord(word) {
        util_1.Logger.log(this.words);
        WordPool.words.push(word);
        if (!db_1.Word) {
            console.log("mongoose connection null");
            return;
        }
        db_1.Word.findOne({ "word": word }, (err, found) => {
            if (err) {
                console.log(err);
                return;
            }
            if (found) {
                found.count = found.count + 1;
                found.save();
            }
            else {
                db_1.Word.create({
                    word: word,
                    count: 1
                });
            }
        });
    }
    static getWordPool() {
        return WordPool.words;
    }
    static getPoolLength() {
        return WordPool.length;
    }
    static getThreeWordsByRandom() {
        let pool_dup = WordPool.words.slice();
        util_1.Logger.log(pool_dup);
        let selected = [];
        for (let i = 0; i < 3; i++) {
            let randIdx = Math.floor(Math.random() * pool_dup.length);
            let e = pool_dup.splice(randIdx, 1);
            selected.push(e[0]);
        }
        return selected;
    }
}
exports.WordPool = WordPool;
WordPool.words = [
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
