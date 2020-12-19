"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resulting = void 0;
const Phase_1 = require("./Phase");
class Resulting extends Phase_1.State {
    constructor(roomID, score) {
        super();
        this.roomID = roomID;
        this.score = score;
        this.Timeout = 3;
    }
    // 1. 모든 플레이어가 OK를 눌렀을 때
    // 2. Timeout 되었을때
    Transition(resolve) {
        super.Transition(resolve);
        let sendData = new Array();
        for (let name of this.score.keys()) {
            sendData.push({ name: name, score: this.score.get(name) });
        }
        let msg = {
            type: "system",
            data: sendData,
        };
        this.io.sockets.in(this.roomID).emit("game-msg", msg);
        setTimeout(() => {
            console.log("resulting 종료.");
            this.suspendAllTask(this.score);
        }, this.Timeout * 1000);
    }
}
exports.Resulting = Resulting;
