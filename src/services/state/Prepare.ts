import { State } from "./State";
import { User } from "../../models/data";
import { WordPool } from "../../models/data";
import { Guessing } from "./Guessing";
import { Logger } from "../../util";
import { StateTypes } from "../../messages/Message";
import { DataMsg } from "../../messages/GameData";

// 단어 3개, 턴 유저, 라운드
interface PrepareData {
  words: string[];
  turn: string;
  round: number;
}

export class Prepare extends State {
  public readonly Type: StateTypes = StateTypes.prepare;
  private selectedWord;
  private words: string[] = [];

  // 1. 플레이어가 선택을 했을 때.
  // 2. TimeOut 되었을때. -> 랜덤으로 그냥 하나 선택함.
  // 3. 해당 턴 플레이어가 나갔을떄

  onActivated() {
    Logger.log("onActivated");
    this.words = WordPool.getThreeWordsByRandom();

    console.log(this.words);

    this.initMsg = this.event.GAME_DATA.msg.NEW_TURN({
      words: this.words,
      turn: this.game.getTurnName(),
      round: this.game.getCurrentRound(),
    });
    this.room.sendGameMsg(this.initMsg);

    this.timer();
  }

  NotTurnDo(user: User, msg: any): void {
    // JOB IS EMPTY
  }

  TurnDo(user: User, msg: any) {
    // Case 1
    // 단어 확정
    this.selectedWord = this.words[msg];

    // 타이머 리셋 & Guess 스테이트로 변경
    this.game.clearTransitionTimer();

    let Next: Guessing = this.game.getGuessState() as Guessing;
    Next.setWord(this.selectedWord);

    clearInterval(this.RemainTimeTimer);
    this.game.setState(Next);
    this.game.transitionByTimeOut();
  }

  notifyTimer() {
    // console.log("Prepare Notified By Timer");
    // Case 2
    // 단어 랜덤 확정
    let randIdx = Math.floor(Math.random() * 3);
    this.selectedWord = this.words[randIdx];

    // Guess 스테이트로 변경
    let Next: Guessing = this.game.getGuessState() as Guessing;
    Next.setWord(this.selectedWord);

    clearInterval(this.RemainTimeTimer);
    this.game.setState(Next);
    this.game.transitionByTimeOut();
  }

  // Case3. 해당 턴 플레이어가 Prepare 단계에서 퇴장했을때. -> 인터럽트 처리
}
