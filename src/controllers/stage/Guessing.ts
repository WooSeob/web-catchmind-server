import { State } from "./Phase";
import { User } from "../data";
import { Resulting } from "./Resulting";

export class Guessing extends State {
  constructor(roomID: string, word: String) {
    super();
    this.roomID = roomID;
    this.word = word;
  }
  private score: Map<String, number> = new Map();
  private word: String;
  private Timeout: number = 7;

  Transition(resolve): void {
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
      resolve(new Resulting(this.roomID, this.score));
    }, this.Timeout * 1000);
  }
  TurnDo(user: User, msg: any): void {
    this.io.sockets.in(this.roomID).emit("draw cmd", msg);
  }
  NotTurnDo(user: User, msg: any): void {
    let PLUS_SCORE: number = 100;
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
  stopPhase(): void {
    super.stopPhase();

    let msg = {
      type: "transition",
      state: "result",
      data: this.score,
    };
    this.io.sockets.in(this.roomID).emit("game-cmd", msg);
    this.mResolve(new Resulting(this.roomID, this.score));
  }
}
