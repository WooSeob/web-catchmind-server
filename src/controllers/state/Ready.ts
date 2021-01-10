import { State } from "./State";
import { User } from "../data";
import { StateType } from "../Message";
export class Ready extends State {
  TurnDo(user: User, msg: any): void {
    //NOTHING
  }
  NotTurnDo(user: User, msg: any): void {
    //NOTHING
  }
  onActivated() {
    // 게임이 끝나고 돌아올 때
  }
  notifyTimer() {
    // NOTHING
  }
  private score: Map<String, number>;
  public readonly Type: StateType = StateType.ready;
}
