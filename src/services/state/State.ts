import { Command, User } from "../../models/data";
import socket_io from "socket.io";
import { Event, StateTypes } from "../../messages/Message";
import { RoomModel } from "../../models/RoomModel";
import { GameModel } from "../../models/GameModel";
import { MessageService } from "../MessageService";
import { PlayerQueue } from "../../models/PlayerQueue";
import { userHit } from "../../messages/DataMessage";

export abstract class State {
  protected gameModel: GameModel;
  protected messageService: MessageService;
  public Timeout: number = 5;
  protected RemainTime: number;
  protected RemainTimeTimer: NodeJS.Timeout = null;
  protected roomModel: RoomModel;
  protected io: socket_io.Server;
  protected event: Event;
  public readonly Type: string;

  constructor(gameModel: GameModel, messageService: MessageService) {
    this.gameModel = gameModel;
    this.messageService = messageService;
    this.event = Event.getInstance();
  }

  abstract onActivated(): void;
  abstract TurnDo(user: User, msg: any): void;
  abstract NotTurnDo(user: User, msg: any): void;
  abstract notifyTimer(): void;

  public setTimeOut(time: number) {
    this.Timeout = time;
  }

  protected timer(): void {
    //TODO 넘어갈때 타이머 꺼야된다!!!
    this.RemainTime = this.Timeout;
    this.RemainTimeTimer = setInterval(() => {
      //--this.RemainTime;
      this.messageService.dataMessage.timer();
    }, 1000);
  }

  public clearTimer() {
    if (this.RemainTimeTimer) {
      clearInterval(this.RemainTimeTimer);
    }
  }

  protected onInterupt(action: Command): void {
    action.excute();
  }

  protected selectNextTurn(): void {
    this.gameModel.setTurn(this.gameModel.getPlayerQueue().nextTurn());
  }

  protected clearGame(): void {
    //게임 모두 종료

    this.gameModel.setGameEnd();

    let p: User[] = this.gameModel.getParticipants();
    p.forEach((user) => {
      user.exitFromGame();
    });

    //TODO 매번 새로만들지 않고 리셋하는걸로 바꾸기
    this.gameModel.setParticipants(new PlayerQueue());

    //게임 오버 메시지
    let gameResult: userHit[] = [];
    this.gameModel.getParticipants().map((user) => {
      let hitData: userHit = {
        user: user.getName(),
        score: user.score.getScore(),
      };
      gameResult.push(hitData);
    });

    this.messageService.dataMessage.gameResult();
    this.setState(StateTypes.ready);
  }

  public transitionByTimeOut(): void {
    this.gameModel.setTransitionByTimeOut(
      setTimeout(() => {
        this.gameModel.getState().notifyTimer();
      }, this.gameModel.getState().Timeout * 1000)
    );
  }

  protected setState(type: StateTypes) {
    this.gameModel.setState(type);
    this.messageService.commandMessage.changeState(type);
  }
}
