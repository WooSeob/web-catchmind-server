import { State } from "./State";
import { Hit, User } from "../data";
import { GameMsg, MSG_KEY, StateType } from "../Message";

export class Resulting extends State {
  public readonly Type: StateType = StateType.result;
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
    let turnResult: Hit[] = [];
    this.game.getParticipants().map((user) => {
      let hitData: Hit = {
        user: user.getName(),
        score: user.score.getScore(),
      };
      turnResult.push(hitData);
    });

    // 해당 턴 결과 전송
    let turnResultMsg: GameMsg = {
      key: MSG_KEY.TURN_RESULT,
      value: turnResult,
    };
    this.sHandler.sendGameMsg(this.roomID, turnResultMsg);
    this.timer();
  }

  public notifyTimer() {
    // console.log("Resulting Notified By Timer");
    this.transition();
  }

  private transition() {
    this.game.selectNextTurn();

    if (this.game.isRoundFinished()) {
      console.log("unit Round finished");

      this.game.increaseRound();
      if (this.game.isGameEnd()) {
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
