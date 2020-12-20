"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prepare = void 0;
const Phase_1 = require("./Phase");
const Guessing_1 = require("./Guessing");
const data_1 = require("../data");
const Resulting_1 = require("./Resulting");
const Message_1 = require("../Message");
class Prepare extends Phase_1.State {
    constructor(roomID) {
        super();
        this.roomID = roomID;
        this.Timeout = 5;
    }
    // 1. 플레이어가 선택을 했을 때.
    // 2. TimeOut 되었을때. -> 랜덤으로 그냥 하나 선택함.
    // 3. 해당 턴 플레이어가 나갔을떄
    Transition(resolve) {
        super.Transition(resolve);
        let randIdx = Math.floor(Math.random() * 6);
        this.words = new Array();
        this.words.push(data_1.WORD_POOL[randIdx]);
        this.words.push(data_1.WORD_POOL[randIdx + 1]);
        this.words.push(data_1.WORD_POOL[randIdx + 2]);
        let prepareMsg = {
            type: "words",
            data: this.words,
        };
        this.io.sockets.in(this.roomID).emit("game-msg", prepareMsg);
        // 2
        this.TransitionTimer = setTimeout(() => {
            console.log("prepare 종료.");
            let randIdx = Math.floor(Math.random() * 3);
            this.selectedWord = this.words[randIdx];
            //확정된 제시어 전송
            this.sHandler.sendGameCMD(this.roomID, new Message_1.Cmd_Transition(Message_1.PhaseType.guess, this.selectedWord));
            this.suspendAllTask(new Guessing_1.Guessing(this.roomID, this.selectedWord));
        }, this.Timeout * 1000);
    }
    TurnDo(user, msg) {
        //1
        //에러트래핑
        super.stopPhase();
        console.log(msg);
        this.selectedWord = this.words[msg];
        console.log("selected is " + this.selectedWord);
        //확정된 제시어 에코 전송
        this.sHandler.sendGameCMD(this.roomID, new Message_1.Cmd_Transition(Message_1.PhaseType.guess, this.selectedWord));
        this.suspendAllTask(new Guessing_1.Guessing(this.roomID, this.selectedWord));
    }
    stopPhase() {
        // 3. 해당 턴 플레이어가 Prepare 단계에서 퇴장했을때.
        super.stopPhase();
        let nullScore = new Map();
        // 턴종료. null score 전송
        this.sHandler.sendGameCMD(this.roomID, new Message_1.Cmd_Transition(Message_1.PhaseType.result, nullScore));
        this.suspendAllTask(new Resulting_1.Resulting(this.roomID, nullScore));
    }
}
exports.Prepare = Prepare;
