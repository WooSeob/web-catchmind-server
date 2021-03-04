import { State } from "./State";
import { Hit, User } from "../data";
import { GameMsg, MSG_KEY, StateType } from "../Message";

export class Guessing extends State {
  // 1. 모든 플레이어가 맞췄을때
  // 2. Timeout 되었을때
  public readonly Type: StateType = StateType.guess;
  private score: Map<string, number> = new Map();
  private word: String;

  public setWord(word: String) {
    this.word = word;
  }
  onActivated() {
    //확정된 제시어 전송
    let commitMsg: GameMsg = {
      key: MSG_KEY.COMMITTED_WORD,
      value: this.word,
    };
    this.initMsg = commitMsg;
    this.sHandler.sendGameMsg(this.roomID, commitMsg);
    this.timer();
  }

  notifyTimer() {
    // console.log("Guessing Notified By Timer");
    // Case 2. Timeout 될 때
    // Result 스테이트로 변경

    this.clearTimer();
    this.game.setState(this.game.getResultState());
    this.game.transitionByTimeOut();
  }

  TurnDo(user: User, msg: any): void {
    this.io.sockets.in(this.roomID).emit("draw cmd", msg);
  }

  NotTurnDo(user: User, msg: any): void {
    let PLUS_SCORE: number = 100;
    //TODO 똥냄새?
    if (this.word == msg && !user.score.isCorrect() && !this.score.get(user.getRoomID())) {
      this.score.set(user.getName(), PLUS_SCORE);
      user.score.matched(PLUS_SCORE);

      console.log(user.getName() + "가 맞췄습니다.");

      let hit: Hit = {
        user: user.getName(),
        score: PLUS_SCORE,
      };
      let hitMsg: GameMsg = {
        key: MSG_KEY.USER_HIT,
        value: hit,
      };
      this.sHandler.sendGameMsg(this.roomID, hitMsg);

      //TODO 모든 유저가 맞췄을떄 바로 트랜지션 추가할것
    }
  }
}
