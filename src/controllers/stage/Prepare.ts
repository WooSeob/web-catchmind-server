import { State } from "./Phase";
import { User } from "../data";
import { Guessing } from "./Guessing";
import { WORD_POOL } from "../data";
import { Resulting } from "./Resulting";

export class Prepare extends State {
  constructor(roomID: string) {
    super();
    this.roomID = roomID;
  }
  // 1. 플레이어가 선택을 했을 때.
  // 2. TimeOut 되었을때. -> 랜덤으로 그냥 하나 선택함.
  // 3. 해당 턴 플레이어가 나갔을떄
  Transition(resolve): void {
    super.Transition(resolve);

    let randIdx = Math.floor(Math.random() * 6);
    this.words = new Array();
    this.words.push(WORD_POOL[randIdx]);
    this.words.push(WORD_POOL[randIdx + 1]);
    this.words.push(WORD_POOL[randIdx + 2]);

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

      let msg = {
        type: "transition",
        state: "guess",
        data: this.selectedWord,
      };
      this.io.sockets.in(this.roomID).emit("game-cmd", msg);
      resolve(new Guessing(this.roomID, this.selectedWord));
    }, this.Timeout * 1000);
  }
  TurnDo(user: User, msg: any) {
    //1
    //에러트래핑
    super.stopPhase();
    this.selectedWord = this.words[msg];

    let echoMsg = {
      type: "transition",
      state: "guess",
      data: this.selectedWord,
    };
    this.io.sockets.in(this.roomID).emit("game-cmd", echoMsg);
    this.mResolve(new Guessing(this.roomID, this.selectedWord));
  }

  public stopPhase(): void {
    // 3
    super.stopPhase();

    let nullScore: Map<String, number> = new Map();
    let msg = {
      type: "transition",
      state: "result",
      data: nullScore,
    };
    this.io.sockets.in(this.roomID).emit("game-cmd", msg);
    this.mResolve(new Resulting(this.roomID, nullScore));
  }

  private selectedWord;
  private words;
  private Timeout: number = 5;
}
