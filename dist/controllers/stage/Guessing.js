"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guessing = void 0;
const Phase_1 = require("./Phase");
const Resulting_1 = require("./Resulting");
class Guessing extends Phase_1.State {
    constructor(roomID, word) {
        super();
        this.score = new Map();
        this.roomID = roomID;
        this.word = word;
        this.Timeout = 7;
    }
    Transition(resolve) {
        super.Transition(resolve);
        // 1. 모든 플레이어가 맞췄을때
        // 2. Timeout 되었을때
        setTimeout(() => {
            console.log("guessing 종료.");
            console.log("- guess result -");
            let msg = {
                type: "transition",
                state: "result",
                data: this.score,
            };
            this.io.sockets.in(this.roomID).emit("game-cmd", msg);
            console.log(this.score);
            this.suspendAllTask(new Resulting_1.Resulting(this.roomID, this.score));
        }, this.Timeout * 1000);
    }
    TurnDo(user, msg) {
        this.io.sockets.in(this.roomID).emit("draw cmd", msg);
    }
    NotTurnDo(user, msg) {
        let PLUS_SCORE = 100;
        if (this.word == msg && !this.score.get(user.getRoomID())) {
            this.score.set(user.getName(), PLUS_SCORE);
            console.log(user.getName() + "가 맞췄습니다.");
            let msg = {
                type: "system",
                data: user.getName() + "가 맞췄습니다.",
            };
            this.io.sockets.in(this.roomID).emit("game-msg", msg);
        }
    }
    stopPhase() {
        super.stopPhase();
        let msg = {
            type: "transition",
            state: "result",
            data: this.score,
        };
        this.io.sockets.in(this.roomID).emit("game-cmd", msg);
        this.suspendAllTask(new Resulting_1.Resulting(this.roomID, this.score));
    }
}
exports.Guessing = Guessing;
