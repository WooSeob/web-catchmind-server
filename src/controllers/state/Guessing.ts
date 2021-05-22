import { State } from "./State";
import { User } from "../../models/data";
import { StateTypes } from "../../messages/Message";
import { DataMsg } from "../../messages/GameData";
import { DrawMsg } from "../../messages/DrawCmd";

export class Guessing extends State {
  // 1. 모든 플레이어가 맞췄을때
  // 2. Timeout 되었을때
  public readonly Type: StateTypes = StateTypes.guess;

  private score: Map<string, number> = new Map();
  private word: string;

  public setWord(word: string) {
    this.word = word;
  }
  onActivated() {
    //확정된 제시어 전송
    this.initMsg = this.event.GAME_DATA.msg.COMMITTED_WORD({
      word: this.word,
    });
    this.room.sendGameMsg(this.initMsg);

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

  TurnDo(user: User, msg: DrawMsg): void {
    this.room.sendDrawCmd(msg);
  }

  NotTurnDo(user: User, msg: any): void {
    let PLUS_SCORE: number = 100;
    //TODO 똥냄새?
    if (
      this.word == msg &&
      !user.score.isCorrect() &&
      !this.score.get(user.getRoomID())
    ) {
      this.score.set(user.getName(), PLUS_SCORE);
      user.score.matched(PLUS_SCORE);

      console.log(user.getName() + "가 맞췄습니다.");

      let hitMsg: DataMsg = this.event.GAME_DATA.msg.USER_HIT({
        user: user.getName(),
        score: PLUS_SCORE,
      });
      this.room.sendGameMsg(hitMsg);

      //TODO 모든 유저가 맞췄을떄 바로 트랜지션 추가할것
    }
  }
}
