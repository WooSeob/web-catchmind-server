"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const main_1 = require("../main");
class State {
    constructor() {
        this.Timeout = 3;
        this.io = main_1.SocketHandler.getInstance().getIo();
    }
    Do() {
        this.timer();
        let nextPhase = new Promise((resolve, reject) => {
            try {
                this.Transition(resolve);
            }
            catch (error) {
                reject(Error(error));
            }
        });
        return nextPhase;
    }
    stopPhase() {
        clearTimeout(this.TransitionTimer);
    }
    TurnDo(user, msg) { }
    NotTurnDo(user, msg) { }
    Transition(resolve) {
        this.mResolve = resolve;
    }
    timer() {
        this.RemainTimeTimer = setInterval(() => {
            let timerMsg = {
                type: "timer",
                data: --this.Timeout,
            };
            this.io.sockets.in(this.roomID).emit("game-msg", timerMsg);
        }, 1000);
    }
    suspendAllTask(nextPhase) {
        clearTimeout(this.RemainTimeTimer);
        clearTimeout(this.TransitionTimer);
        this.mResolve(nextPhase);
    }
}
exports.State = State;
