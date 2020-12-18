"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const main_1 = require("../main");
class State {
    constructor() {
        this.io = main_1.SocketHandler.getInstance().getIo();
    }
    Do() {
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
}
exports.State = State;
