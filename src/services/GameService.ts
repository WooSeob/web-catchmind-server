import { User } from "../models/data";
import { Logger } from "../util";
import { PlayerQueue } from "../models/PlayerQueue";
import { StateTypes } from "../messages/Message";
import { GameModel } from "../models/GameModel";
import { MessageService } from "./MessageService";

export class GameService {
  private gameModel: GameModel;
  private messageService: MessageService;

  constructor(messageService: MessageService, gameModel: GameModel) {
    this.messageService = messageService;
    this.gameModel = gameModel;
  }

  public setGame(users: User[], round: number, timePerTurn: number): void {
    if (!this.gameModel.inGame()) {
      let newParticipants: PlayerQueue = new PlayerQueue();

      for (let user of users) {
        user.setParticipant();
        newParticipants.addHead(user);
      }

      this.gameModel.setParticipants(newParticipants);

      this.gameModel.setRound(round, 1);

      this.gameModel.getStateByType(StateTypes.guess).setTimeOut(timePerTurn);

      Logger.log("GameController.setGame()", timePerTurn);
      this.gameModel.setIsGameReady(true);
    }
  }

  public start(): void {
    if (this.gameModel.canStart()) {
      this.gameModel.setGameStart();
      this.gameModel.setTurnUser(this.gameModel.getPlayerQueue().getHead());

      // 스테이트 전환
      this.gameModel.setState(StateTypes.prepare);

      //게임 스타트 메시지
      let users: User[] = this.gameModel.getParticipants();
      this.messageService.dataMessage.start(users);

      // 트랜지션 타이머 시작
      this.gameModel.getState().transitionByTimeOut();
    }
  }

  public MsgHandler(user: User, msg: any): void {
    // Logger.log("Message received", user, msg);

    if (user.getName() === this.gameModel.getTurnName()) {
      this.gameModel.getState().TurnDo(user, msg);
    } else {
      this.gameModel.getState().NotTurnDo(user, msg);
    }
  }

  public userDisconnect(user: User): void {
    if (this.gameModel.inGame()) {
      let playerQueue: PlayerQueue = this.gameModel.getPlayerQueue();

      let isTurnPlayerLeft: boolean = playerQueue.removePlayer(user);

      if (playerQueue.getLength() < 2) {
        Logger.log("총 플레이어가 1명이므로 게임을 종료합니다.");
        this.gameModel.setState(StateTypes.result);
        // this.transitionByTimeOut();
        // 게임종료 브로드캐스트
        this.messageService.dataMessage.onlyOnePlayer();
      }

      if (isTurnPlayerLeft) {
        Logger.log("Turn 유저가 나감");
        // Result State로 이동
        this.gameModel.setState(StateTypes.result);
        // this.transitionByTimeOut();

        // 턴유저 나간거 브로드캐스트
        this.messageService.dataMessage.turnUserLeft();
      }
    }
  }
}
