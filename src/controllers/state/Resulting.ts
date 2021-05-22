import { State } from "./State";
import { User } from "../../models/data";
import { Logger } from "../../util";
import { userHit } from "../../messages/GameData";
import { StateTypes } from "../../messages/Message";

export class Resulting extends State {
  public readonly Type: StateTypes = StateTypes.result;
  // 1. 모든 플레이어가 OK를 눌렀을 때
  // 2. Timeout 되었을때

  public TurnDo(user: User, msg: any): void {
    // NOTHING
  }
  public NotTurnDo(user: User, msg: any): void {
    // NOTHING
  }

  public onActivated() {
    // 결과 종합
    let turnResult: userHit[] = [];
    for (let user of this.game.getParticipants()) {
      let hitData: userHit = {
        user: user.getName(),
        score: user.score.getScore(),
      };
      turnResult.push(hitData);
    }

    // 해당 턴 결과 전송
    this.initMsg = this.event.GAME_DATA.msg.TURN_RESULT({
      result: turnResult,
    });

    this.room.sendGameMsg(this.initMsg);
    this.timer();
  }

  public notifyTimer() {
    // console.log("Resulting Notified By Timer");
    this.transition();
  }

  private transition() {
    this.game.selectNextTurn();

    if (this.game.isRoundFinished()) {
      Logger.log("unit Round finished");

      this.game.increaseRound();
      if (this.game.isGameEnd() || this.game.getParticipants().length < 2) {
        //게임 종료
        this.game.clearGame();
      } else {
        //다음 라운드로
        for (let user of this.game.getParticipants()) {
          user.score.turnClear();
        }

        this.game.setState(this.game.getPrepareState());
        this.game.transitionByTimeOut();
      }
    } else {
      //다음 턴으로
      for (let user of this.game.getParticipants()) {
        user.score.turnClear();
      }

      this.game.setState(this.game.getPrepareState());
      this.game.transitionByTimeOut();
    }
  }
}
