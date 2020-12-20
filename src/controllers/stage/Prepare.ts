import { State } from "./Phase";
import { User } from "../data";
import { Guessing } from "./Guessing";
import { WORD_POOL } from "../data";
import { Resulting } from "./Resulting";
import { Cmd_Transition, PhaseType } from "../Message"

export class Prepare extends State {
  timeoutForGuess: number;
  constructor(roomID: string, timeout: number) {
    super();
    this.roomID = roomID;
    this.Timeout = 5;

    this.timeoutForGuess = timeout;
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

      //확정된 제시어 전송
      this.sHandler.sendGameCMD(
        this.roomID, 
        new Cmd_Transition(PhaseType.guess, this.selectedWord))

      this.suspendAllTask(new Guessing(this.roomID, this.selectedWord, this.timeoutForGuess));
    }, this.Timeout * 1000);
  }
  TurnDo(user: User, msg: any) {
    //1
    //에러트래핑
    super.stopPhase();
    console.log(msg);
    this.selectedWord = this.words[msg];
    console.log("selected is " + this.selectedWord);
    
    //확정된 제시어 에코 전송
    this.sHandler.sendGameCMD(
      this.roomID, 
      new Cmd_Transition(PhaseType.guess, this.selectedWord))

    this.suspendAllTask(new Guessing(this.roomID, this.selectedWord, this.timeoutForGuess));
  }

  public stopPhase(): void {
    // 3. 해당 턴 플레이어가 Prepare 단계에서 퇴장했을때.
    super.stopPhase();

    let nullScore: Map<string, number> = new Map();

    // 턴종료. null score 전송
    this.sHandler.sendGameCMD(
      this.roomID, 
      new Cmd_Transition(PhaseType.result, nullScore))

    this.suspendAllTask(new Resulting(this.roomID, nullScore));
  }

  private selectedWord;
  private words;
}
