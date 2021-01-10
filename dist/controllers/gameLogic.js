"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const data_1 = require("./data");
const main_1 = require("./main");
const Ready_1 = require("./state/Ready");
const Prepare_1 = require("./state/Prepare");
const util_1 = require("./util");
const Guessing_1 = require("./state/Guessing");
const Resulting_1 = require("./state/Resulting");
const Message_1 = require("./Message");
class Game {
    constructor(roomID) {
        this.currentRound = 1;
        this.participants = new util_1.PlayerQueue();
        this.isInGame = false;
        this.isGameReady = false;
        this.roomID = roomID;
        this.ready = new Ready_1.Ready(this);
        this.prepare = new Prepare_1.Prepare(this);
        this.guess = new Guessing_1.Guessing(this);
        this.result = new Resulting_1.Resulting(this);
        this.state = this.ready;
    }
    log(msg, etc = "") {
        console.log("Game : ", msg, etc);
    }
    increaseRound() {
        this.currentRound++;
    }
    isGameEnd() {
        console.log(this.EndRound);
        console.log(this.currentRound);
        return this.EndRound < this.currentRound;
    }
    getState() {
        return this.state;
    }
    getReadyState() {
        return this.ready;
    }
    getPrepareState() {
        return this.prepare;
    }
    getGuessState() {
        return this.guess;
    }
    getResultState() {
        return this.result;
    }
    getTurnName() {
        return this.turn.getName();
    }
    getCurrentRound() {
        return this.currentRound;
    }
    clearTransitionTimer() {
        clearTimeout(this.TransitionTimer);
    }
    setState(state, hook = new data_1.NoCommand()) {
        this.log("Transition ", state.Type);
        this.state.clearTimer();
        this.state = state;
        main_1.SocketHandler.getInstance().sendGameSync(this.roomID, this.state.Type);
        hook.excute();
        this.state.onActivated();
    }
    getRoomID() {
        return this.roomID;
    }
    inGame() {
        return this.isInGame;
    }
    setGame(users, round, timePerTurn) {
        if (!this.isInGame) {
            this.participants = new util_1.PlayerQueue();
            for (let user of users) {
                user.isParticipant = true;
                user.score = new data_1.Score();
                this.participants.addHead(user);
            }
            this.EndRound = round;
            this.currentRound = 1;
            this.guess.setTimeOut(timePerTurn);
            this.isGameReady = true;
        }
    }
    getParticipants() {
        return this.participants.getAllList();
    }
    clearGame() {
        //게임 모두 종료
        this.log("game is over!!!");
        this.isInGame = false;
        this.currentRound = 1;
        this.isGameReady = false;
        //TODO 매번 새로만들지 않고 리셋하는걸로 바꾸기
        this.participants = new util_1.PlayerQueue();
        //게임 오버 메시지
        let gameResult = [];
        this.getParticipants().map((user) => {
            let hitData = {
                user: user.getName(),
                score: user.score.getScore(),
            };
            gameResult.push(hitData);
        });
        let finishMsg = {
            key: Message_1.MSG_KEY.GAME_RESULT,
            value: gameResult,
        };
        let finishMsgSender = new data_1.MsgSenderCommand(this.roomID, finishMsg);
        this.setState(this.getReadyState(), finishMsgSender);
    }
    start() {
        if (!this.isInGame && this.isGameReady) {
            this.isGameReady = false;
            this.isInGame = true;
            this.turn = this.participants.getHead();
            //게임 스타트 메시지
            let startMsg = {
                key: Message_1.MSG_KEY.START,
                value: this.participants.getAllList().map((u) => u.getName()),
            };
            let startMsgSender = new data_1.MsgSenderCommand(this.roomID, startMsg);
            // 스테이트 전환
            this.setState(this.prepare, startMsgSender);
            // 트랜지션 타이머 시작
            this.transitionByTimeOut();
        }
    }
    transitionByTimeOut() {
        this.TransitionTimer = setTimeout(() => {
            this.state.notifyTimer();
        }, this.state.Timeout * 1000);
    }
    selectNextTurn() {
        this.turn = this.participants.nextTurn();
    }
    isRoundFinished() {
        return this.participants.isHead();
    }
    MsgHandler(user, msg) {
        console.log("Message from - " + user.getName() + " : " + msg);
        if (user.getName() === this.turn.getName()) {
            this.state.TurnDo(user, msg);
        }
        else {
            this.state.NotTurnDo(user, msg);
        }
    }
    userDisconnect(user) {
        if (this.isInGame) {
            let isTurnPlayerLeft = this.participants.removePlayer(user);
            if (isTurnPlayerLeft) {
                console.log("Turn 유저가 나감");
                // Result State로 이동
                this.setState(this.result);
                // 턴유저 나간거 브로드캐스트
                let taljuMsg = {
                    key: Message_1.MSG_KEY.TURN_USER_LEFT,
                    value: user.getName(),
                };
                main_1.SocketHandler.getInstance().sendGameMsg(this.roomID, taljuMsg);
            }
        }
    }
}
exports.Game = Game;
