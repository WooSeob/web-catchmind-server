import { User, WORD_POOL, Score } from "./data";
import { SocketHandler } from "./main";
import socket_io, { Server } from "socket.io";
import { Prepare } from "./stage/Prepare";
import { Phase } from "./stage/Phase";
import { PlayerQueue } from "./util";
import { Guessing } from "./stage/Guessing";
import { Resulting } from "./stage/Resulting";
import { Cmd_Transition, Cmd_GameOver, Cmd_GameStart, Cmd_Round, Cmd_Turn, PhaseType, Cmd_TurnLeft, } from "./Message"

class Turn {
  constructor(turn: User, roomID: string, remainTIme: number) {
    this.turn = turn;
    this.roomID = roomID;
    this.remainTime = remainTIme;
  }
  private roomID: string;
  private remainTime: number;
  private turn: User;
  private currentPhase: Phase;

  public whosTurn(): User {
    return this.turn;
  }
  public MsgHandler(user: User, msg: any): void {
    if (this.turn == user) {
      this.currentPhase.TurnDo(user, msg);
    } else {
      this.currentPhase.NotTurnDo(user, msg);
    }
  }

  public startPhase(): Promise<any> {
    this.currentPhase = new Prepare(this.roomID);
    console.log(this.turn.getName() + "의 턴입니다");

    let TurnFinished = new Promise((resolve, reject) => {
      try {
        this.transitionPhase(resolve);
      } catch (error) {
        reject(Error(error));
      }
    });
    return TurnFinished;
  }

  private transitionPhase(resolve): void {
    this.currentPhase.Do().then((nextPhase: Phase) => {
      if (nextPhase instanceof Guessing || nextPhase instanceof Resulting) {
        this.currentPhase = nextPhase;
        this.transitionPhase(resolve);
      } else {
        //한 턴 종료
        let result = nextPhase;
        resolve(result);
      }
    });
  }

  public stopPhase() {
    this.currentPhase.stopPhase();
  }
}

export class Game {
  constructor(roomID: string) {
    this.roomID = roomID;
  }
  private roomID: string;
  private timePerTurn: number;
  private EndRound: number;
  private currentRound: number = 1;
  private participants: PlayerQueue = new PlayerQueue();
  private turn: Turn;
  private isInGame: boolean = false;

  private isGameReady: boolean = false;

  public inGame(): boolean {
    return this.isInGame;
  }
  public setGame(users: User[], round: number, timePerTurn: number): void {
    if (!this.isInGame) {
      this.participants = new PlayerQueue();
      users.forEach((user) => {
        user.isParticipant = true;
        user.score = new Score();
        this.participants.addHead(user);
      });
      this.EndRound = round;
      this.timePerTurn = timePerTurn;
      this.currentRound = 1;

      this.isGameReady = true;
    }
  }
  public getParticipants(): User[] {
    return this.participants.getAllList();
  }
  public start(): void {
    if (!this.isInGame && this.isGameReady) {

      //게임 스타트 메시지
      SocketHandler.getInstance().sendGameCMD(this.roomID, new Cmd_GameStart(this.participants.getAllList().map((u) => u.getName())))
    
      this.isGameReady = false;
      this.isInGame = true;
      let first: User = this.participants.getHead();

      //첫 라운드 시작 브로드캐스팅
      SocketHandler.getInstance().sendGameCMD(this.roomID, new Cmd_Round(this.currentRound))

      this.turn = new Turn(first, this.roomID, this.timePerTurn);
      this.transitionTrun();
    }
  }

  private transitionTrun(): void {
    // 턴 변경 브로드캐스팅
    SocketHandler.getInstance().sendGameCMD(
      this.roomID, 
      new Cmd_Turn(this.turn.whosTurn().getName()))

    //prepare 시작 브로드캐스팅
    SocketHandler.getInstance().sendGameCMD(
      this.roomID, 
      new Cmd_Transition(PhaseType.prepare, null))

    this.turn.startPhase().then((result: Map<String, number>) => {
      //한턴 끝나면
      console.log("턴 종료.");
      result.forEach(
        function (score, name) {
          this.participants.getUserByName(name).score.turnClear();
        }.bind(this)
      );

      let nextPlayer: User = this.nextTurn();
      if (nextPlayer) {
        this.turn = new Turn(nextPlayer, this.roomID, this.timePerTurn);
        this.transitionTrun();
      } else {
        //게임 모두 종료
        console.log("game is over!!!");
        this.isInGame = false;
      }
    });
  }

  private nextTurn(): User {
    let next: User = this.participants.nextTurn();

    if (this.participants.isHead()) {
      //한칸 옮겼더니 다시 헤드로
      //한 라운드가 끝나면
      this.currentRound++;
      if (this.currentRound > this.EndRound) {
        //게임 오버 메시지 브로드캐스팅
        SocketHandler.getInstance().sendGameCMD(
          this.roomID, 
          new Cmd_GameOver(1))

        return null; // 모든 라운드 끝
      } else {
        // 다음 라운드로
        SocketHandler.getInstance().sendGameCMD(
          this.roomID, 
          new Cmd_Round(this.currentRound))
        console.log("round#" + this.currentRound);
        return next;
      }
    } else {
      //라운드 안끝나면 턴 이동
      return next;
    }
  }

  public MsgHandler(user: User, msg: any): void {
    console.log("Message from - " + user.getName() + " : " + msg);
    this.turn.MsgHandler(user, msg);
  }

  public userDisconnect(user: User): void {
    if (this.isInGame) {
      let isTurnPlayerLeft: boolean = this.participants.removePlayer(user);

      if (isTurnPlayerLeft) {
        console.log("턴유저가 나감");
        // 턴유저 나간거 브로드캐스트
        SocketHandler.getInstance().sendGameCMD(
          this.roomID, 
          new Cmd_TurnLeft(user.getName()))
        this.turn.stopPhase();
      }
    }
  }
}
