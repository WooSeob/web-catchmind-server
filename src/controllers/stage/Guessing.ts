import { State } from "./Phase";
import { User } from "../data";
import { Resulting } from "./Resulting";
import { Cmd_Transition, Cmd_TurnLeft, PhaseType } from "../Message"

export class Guessing extends State {
  constructor(roomID: string, word: String) {
    super();
    this.roomID = roomID;
    this.word = word;
    this.Timeout = 7;
  }
  private score: Map<string, number> = new Map();
  private word: String;

  Transition(resolve): void {
    super.Transition(resolve);
    // 1. 모든 플레이어가 맞췄을때
    // 2. Timeout 되었을때
    setTimeout(() => {
      console.log("guessing 종료.");
      console.log("- guess result -");

      this.sHandler.sendGameCMD(
        this.roomID, 
        new Cmd_Transition(PhaseType.result, this.score))

      console.log(this.score);
      this.suspendAllTask(new Resulting(this.roomID, this.score));
    }, this.Timeout * 1000);
  }
  TurnDo(user: User, msg: any): void {
    this.io.sockets.in(this.roomID).emit("draw cmd", msg);
  }
  NotTurnDo(user: User, msg: any): void {
    let PLUS_SCORE: number = 100;
    if (this.word == msg && !this.score.get(user.getRoomID())) {
      this.score.set(user.getName(), PLUS_SCORE);
      user.score.matched(PLUS_SCORE);

      console.log(user.getName() + "가 맞췄습니다.");

      let msg = {
        type: "system",
        data: {
          user: user.getName(),
          score: PLUS_SCORE,
        },
      };
      this.io.sockets.in(this.roomID).emit("game-msg", msg);

    }
  }
  stopPhase(): void {
    super.stopPhase();

    // 결과 점수 브로드캐스팅
    this.sHandler.sendGameCMD(
      this.roomID, 
      new Cmd_Transition(PhaseType.result, this.score))
    
    // 작업 종료
    this.suspendAllTask(new Resulting(this.roomID, this.score));
  }
}
