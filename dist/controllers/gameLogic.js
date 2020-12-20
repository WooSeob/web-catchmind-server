"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const data_1 = require("./data");
const main_1 = require("./main");
const Prepare_1 = require("./stage/Prepare");
const util_1 = require("./util");
const Guessing_1 = require("./stage/Guessing");
const Resulting_1 = require("./stage/Resulting");
const Message_1 = require("./Message");
class Turn {
    constructor(turn, roomID, remainTIme) {
        this.turn = turn;
        this.roomID = roomID;
        this.remainTime = remainTIme;
    }
    whosTurn() {
        return this.turn;
    }
    MsgHandler(user, msg) {
        if (this.turn == user) {
            this.currentPhase.TurnDo(user, msg);
        }
        else {
            this.currentPhase.NotTurnDo(user, msg);
        }
    }
    startPhase() {
        this.currentPhase = new Prepare_1.Prepare(this.roomID);
        console.log(this.turn.getName() + "의 턴입니다");
        let TurnFinished = new Promise((resolve, reject) => {
            try {
                this.transitionPhase(resolve);
            }
            catch (error) {
                reject(Error(error));
            }
        });
        return TurnFinished;
    }
    transitionPhase(resolve) {
        this.currentPhase.Do().then((nextPhase) => {
            if (nextPhase instanceof Guessing_1.Guessing || nextPhase instanceof Resulting_1.Resulting) {
                this.currentPhase = nextPhase;
                this.transitionPhase(resolve);
            }
            else {
                //한 턴 종료
                let result = nextPhase;
                resolve(result);
            }
        });
    }
    stopPhase() {
        this.currentPhase.stopPhase();
    }
}
class Game {
    constructor(roomID) {
        this.currentRound = 1;
        this.participants = new util_1.PlayerQueue();
        this.isInGame = false;
        this.isGameReady = false;
        this.roomID = roomID;
    }
    inGame() {
        return this.isInGame;
    }
    setGame(users, round, timePerTurn) {
        if (!this.isInGame) {
            this.participants = new util_1.PlayerQueue();
            users.forEach((user) => {
                user.isParticipant = true;
                user.score = new data_1.Score();
                this.participants.addHead(user);
            });
            this.EndRound = round;
            this.timePerTurn = timePerTurn;
            this.currentRound = 1;
            this.isGameReady = true;
        }
    }
    getParticipants() {
        return this.participants.getAllList();
    }
    start() {
        if (!this.isInGame && this.isGameReady) {
            //게임 스타트 메시지
            main_1.SocketHandler.getInstance().sendGameCMD(this.roomID, new Message_1.Cmd_GameStart(this.participants.getAllList().map((u) => u.getName())));
            this.isGameReady = false;
            this.isInGame = true;
            let first = this.participants.getHead();
            //첫 라운드 시작 브로드캐스팅
            main_1.SocketHandler.getInstance().sendGameCMD(this.roomID, new Message_1.Cmd_Round(this.currentRound));
            this.turn = new Turn(first, this.roomID, this.timePerTurn);
            this.transitionTrun();
        }
    }
    transitionTrun() {
        // 턴 변경 브로드캐스팅
        main_1.SocketHandler.getInstance().sendGameCMD(this.roomID, new Message_1.Cmd_Turn(this.turn.whosTurn().getName()));
        //prepare 시작 브로드캐스팅
        main_1.SocketHandler.getInstance().sendGameCMD(this.roomID, new Message_1.Cmd_Transition(Message_1.PhaseType.prepare, null));
        this.turn.startPhase().then((result) => {
            //한턴 끝나면
            console.log("턴 종료.");
            result.forEach(function (score, name) {
                this.participants.getUserByName(name).score.turnClear();
            }.bind(this));
            let nextPlayer = this.nextTurn();
            if (nextPlayer) {
                this.turn = new Turn(nextPlayer, this.roomID, this.timePerTurn);
                this.transitionTrun();
            }
            else {
                //게임 모두 종료
                console.log("game is over!!!");
                this.isInGame = false;
            }
        });
    }
    nextTurn() {
        let next = this.participants.nextTurn();
        if (this.participants.isHead()) {
            //한칸 옮겼더니 다시 헤드로
            //한 라운드가 끝나면
            this.currentRound++;
            if (this.currentRound > this.EndRound) {
                //게임 오버 메시지 브로드캐스팅
                main_1.SocketHandler.getInstance().sendGameCMD(this.roomID, new Message_1.Cmd_GameOver(1));
                return null; // 모든 라운드 끝
            }
            else {
                // 다음 라운드로
                main_1.SocketHandler.getInstance().sendGameCMD(this.roomID, new Message_1.Cmd_Round(this.currentRound));
                console.log("round#" + this.currentRound);
                return next;
            }
        }
        else {
            //라운드 안끝나면 턴 이동
            return next;
        }
    }
    MsgHandler(user, msg) {
        console.log("Message from - " + user.getName() + " : " + msg);
        this.turn.MsgHandler(user, msg);
    }
    userDisconnect(user) {
        if (this.isInGame) {
            let isTurnPlayerLeft = this.participants.removePlayer(user);
            if (isTurnPlayerLeft) {
                console.log("턴유저가 나감");
                // 턴유저 나간거 브로드캐스트
                main_1.SocketHandler.getInstance().sendGameCMD(this.roomID, new Message_1.Cmd_TurnLeft(user.getName()));
                this.turn.stopPhase();
            }
        }
    }
}
exports.Game = Game;
