import { User, Command, NoCommand, MsgSenderCommand } from "../models/data";
import { Ready } from "./state/Ready";
import { Prepare } from "./state/Prepare";
import { State } from "./state/State";
import { Logger } from "../util";
import { PlayerQueue } from "../models/PlayerQueue";
import { Guessing } from "./state/Guessing";
import { Resulting } from "./state/Resulting";
import { Room } from "../models/Room";
import { Event } from "../messages/Message";
import { DataMsg, userHit } from "../messages/GameData";

export class Game {
  constructor(room: Room) {
    this.room = room;
    this.roomID = room.getRoomID();
    this.ready = new Ready(this);
    this.prepare = new Prepare(this);
    this.guess = new Guessing(this);
    this.result = new Resulting(this);
    this.state = this.ready;

    this.event = Event.getInstance();
  }
  private event: Event;
  private room: Room;
  private roomID: string;
  private EndRound: number;
  private currentRound: number = 1;
  private participants: PlayerQueue = new PlayerQueue();
  private turn: User;
  private isInGame: boolean = false;

  private isGameReady: boolean = false;

  private TransitionTimer: NodeJS.Timeout;

  private state: State;
  private ready: State;
  private prepare: State;
  private guess: State;
  private result: State;

  public getRoom(): Room {
    return this.room;
  }
  public increaseRound() {
    this.currentRound++;
  }
  public isGameEnd(): boolean {
    return this.EndRound < this.currentRound;
  }
  public getState(): State {
    return this.state;
  }
  public getReadyState(): State {
    return this.ready;
  }
  public getPrepareState(): State {
    return this.prepare;
  }
  public getGuessState(): State {
    return this.guess;
  }
  public getResultState(): State {
    return this.result;
  }
  public getTurnName(): string {
    return this.turn.getName();
  }
  public getCurrentRound(): number {
    return this.currentRound;
  }
  public clearTransitionTimer() {
    clearTimeout(this.TransitionTimer);
  }
  public setState(state: State, hook: Command = new NoCommand()) {
    Logger.log("Transition ", state.Type);
    this.state.clearTimer();
    this.state = state;

    this.room.sendGameSync(
      this.event.GAME_CMD.msg.STATE_CHANGED({
        newState: this.state.Type,
      })
    );

    hook.excute();
    this.state.onActivated();
  }
  public getRoomID() {
    return this.roomID;
  }
  public inGame(): boolean {
    return this.isInGame;
  }
  public setGame(users: User[], round: number, timePerTurn: number): void {
    if (!this.isInGame) {
      this.participants = new PlayerQueue();
      for (let user of users) {
        user.setParticipant();
        this.participants.addHead(user);
      }

      this.EndRound = round;
      this.currentRound = 1;

      this.guess.setTimeOut(timePerTurn);
      Logger.log("GameController.setGame()", timePerTurn);
      this.isGameReady = true;
    }
  }
  public getParticipants(): User[] {
    return this.participants.getAllList();
  }

  public clearGame(): void {
    //게임 모두 종료
    Logger.log("game is over!!!");
    this.isInGame = false;
    this.currentRound = 1;
    this.isGameReady = false;

    let p: User[] = this.participants.getAllList();
    p.forEach((user) => {
      user.exitFromGame();
    });

    //TODO 매번 새로만들지 않고 리셋하는걸로 바꾸기
    this.participants = new PlayerQueue();

    //게임 오버 메시지
    let gameResult: userHit[] = [];
    this.getParticipants().map((user) => {
      let hitData: userHit = {
        user: user.getName(),
        score: user.score.getScore(),
      };
      gameResult.push(hitData);
    });

    let finishMsgSender = new MsgSenderCommand(
      this.roomID,
      this.event.GAME_DATA.msg.GAME_RESULT({
        result: gameResult,
      })
    );

    this.setState(this.getReadyState(), finishMsgSender);
  }

  public start(): void {
    if (!this.isInGame && this.isGameReady) {
      this.isGameReady = false;
      this.isInGame = true;

      this.turn = this.participants.getHead();

      //게임 스타트 메시지
      let startMsg: DataMsg = this.event.GAME_DATA.msg.START({
        users: this.participants.getAllList().map((u) => u.getName()),
      });
      let startMsgSender = new MsgSenderCommand(this.roomID, startMsg);

      // 스테이트 전환
      this.setState(this.prepare, startMsgSender);

      // 트랜지션 타이머 시작
      this.transitionByTimeOut();
    }
  }

  public transitionByTimeOut(): void {
    this.TransitionTimer = setTimeout(() => {
      this.state.notifyTimer();
    }, this.state.Timeout * 1000);
  }

  public selectNextTurn(): void {
    this.turn = this.participants.nextTurn();
  }
  public isRoundFinished(): boolean {
    return this.participants.isHead();
  }

  public MsgHandler(user: User, msg: any): void {
    // Logger.log("Message received", user, msg);

    if (user.getName() === this.turn.getName()) {
      this.state.TurnDo(user, msg);
    } else {
      this.state.NotTurnDo(user, msg);
    }
  }

  public userDisconnect(user: User): void {
    if (this.isInGame) {
      let isTurnPlayerLeft: boolean = this.participants.removePlayer(user);

      if (this.participants.getLength() < 2) {
        Logger.log("총 플레이어가 1명이므로 게임을 종료합니다.");
        this.setState(this.result);
        // this.transitionByTimeOut();
        // 게임종료 브로드캐스트

        let taljuMsg: DataMsg = this.event.GAME_DATA.msg.ONLY_ONE_PLAYER({});
        this.room.sendGameMsg(taljuMsg);
      }

      if (isTurnPlayerLeft) {
        Logger.log("Turn 유저가 나감");
        // Result State로 이동
        this.setState(this.result);
        // this.transitionByTimeOut();

        let taljuMsg: DataMsg = this.event.GAME_DATA.msg.TURN_USER_LEFT({
          user: user.getName(),
        });
        // 턴유저 나간거 브로드캐스트
        this.room.sendGameMsg(taljuMsg);
      }
    }
  }
}
