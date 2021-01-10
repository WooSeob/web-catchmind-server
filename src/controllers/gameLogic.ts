import {
  User,
  WORD_POOL,
  Score,
  Command,
  NoCommand,
  MsgSenderCommand,
  Hit,
} from "./data";
import { SocketHandler } from "./main";
import socket_io, { Server } from "socket.io";
import { Ready } from "./state/Ready";
import { Prepare } from "./state/Prepare";
import { State } from "./state/State";
import { PlayerQueue } from "./util";
import { Guessing } from "./state/Guessing";
import { Resulting } from "./state/Resulting";
import { GameMsg, MSG_KEY } from "./Message";

export class Game {
  constructor(roomID: string) {
    this.roomID = roomID;
    this.ready = new Ready(this);
    this.prepare = new Prepare(this);
    this.guess = new Guessing(this);
    this.result = new Resulting(this);
    this.state = this.ready;
  }
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

  private log(msg: string, etc: any = "") {
    console.log("Game : ", msg, etc);
  }
  public increaseRound() {
    this.currentRound++;
  }
  public isGameEnd(): boolean {
    console.log(this.EndRound);
    console.log(this.currentRound);
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
    this.log("Transition ", state.Type);
    this.state.clearTimer();
    this.state = state;
    SocketHandler.getInstance().sendGameSync(this.roomID, this.state.Type);

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
        user.isParticipant = true;
        user.score = new Score();
        this.participants.addHead(user);
      }

      this.EndRound = round;
      this.currentRound = 1;

      this.guess.setTimeOut(timePerTurn);
      this.isGameReady = true;
    }
  }
  public getParticipants(): User[] {
    return this.participants.getAllList();
  }

  public clearGame(): void {
    //게임 모두 종료
    this.log("game is over!!!");
    this.isInGame = false;
    this.currentRound = 1;
    this.isGameReady = false;
    //TODO 매번 새로만들지 않고 리셋하는걸로 바꾸기
    this.participants = new PlayerQueue();

    //게임 오버 메시지
    let gameResult: Hit[] = [];
    this.getParticipants().map((user) => {
      let hitData: Hit = {
        user: user.getName(),
        score: user.score.getScore(),
      };
      gameResult.push(hitData);
    });

    let finishMsg: GameMsg = {
      key: MSG_KEY.GAME_RESULT,
      value: gameResult,
    };
    let finishMsgSender = new MsgSenderCommand(this.roomID, finishMsg);

    this.setState(this.getReadyState(), finishMsgSender);
  }

  public start(): void {
    if (!this.isInGame && this.isGameReady) {
      this.isGameReady = false;
      this.isInGame = true;

      this.turn = this.participants.getHead();

      //게임 스타트 메시지
      let startMsg: GameMsg = {
        key: MSG_KEY.START,
        value: this.participants.getAllList().map((u) => u.getName()),
      };
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
    console.log("Message from - " + user.getName() + " : " + msg);

    if (user.getName() === this.turn.getName()) {
      this.state.TurnDo(user, msg);
    } else {
      this.state.NotTurnDo(user, msg);
    }
  }

  public userDisconnect(user: User): void {
    if (this.isInGame) {
      let isTurnPlayerLeft: boolean = this.participants.removePlayer(user);

      if (isTurnPlayerLeft) {
        console.log("Turn 유저가 나감");
        // Result State로 이동
        this.setState(this.result);

        // 턴유저 나간거 브로드캐스트
        let taljuMsg: GameMsg = {
          key: MSG_KEY.TURN_USER_LEFT,
          value: user.getName(),
        };
        SocketHandler.getInstance().sendGameMsg(this.roomID, taljuMsg);
      }
    }
  }
}
