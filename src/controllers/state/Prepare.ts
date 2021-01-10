import { State } from "./State";
import { User } from "../data";
import { WORD_POOL } from "../data";
import { GameMsg, MSG_KEY, StateType } from "../Message";
import { Guessing } from "./Guessing";

// 단어 3개, 턴 유저, 라운드
interface PrepareData {
  words: string[];
  turn: string;
  round: number;
}

export class Prepare extends State {
  public readonly Type: StateType = StateType.prepare;
  private selectedWord;
  private words;

  // 1. 플레이어가 선택을 했을 때.
  // 2. TimeOut 되었을때. -> 랜덤으로 그냥 하나 선택함.
  // 3. 해당 턴 플레이어가 나갔을떄
  onActivated() {
    let randIdx = Math.floor(Math.random() * 6);
    this.words = new Array();
    this.words.push(WORD_POOL[randIdx]);
    this.words.push(WORD_POOL[randIdx + 1]);
    this.words.push(WORD_POOL[randIdx + 2]);

    let prepareData: PrepareData = {
      words: this.words,
      turn: this.game.getTurnName(),
      round: this.game.getCurrentRound(),
    };
    let prepareMsg: GameMsg = {
      key: MSG_KEY.NEW_TURN,
      value: prepareData,
    };
    this.sHandler.sendGameMsg(this.roomID, prepareMsg);
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
