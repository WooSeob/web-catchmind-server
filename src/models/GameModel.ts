import { StateTypes } from "../messages/Message";
import { User, Command, NoCommand } from "../models/data";

import { PlayerQueue } from "../models/PlayerQueue";
import { MessageService } from "../services/MessageService";
import { Guessing } from "../services/state/Guessing";
import { Prepare } from "../services/state/Prepare";
import { Ready } from "../services/state/Ready";
import { Resulting } from "../services/state/Resulting";
import { State } from "../services/state/State";

export class GameModel {
  private EndRound: number;
  private currentRound: number = 1;
  private participants: PlayerQueue = new PlayerQueue();
  private turn: User;
  private isInGame: boolean = false;
  private isGameReady: boolean = false;
  private TransitionTimer: NodeJS.Timeout;

  private states: Map<string, State> = new Map();
  private state: State;

  constructor() {}

  public setStates(messageService: MessageService) {
    this.states.set(StateTypes.ready, new Ready(this, messageService));
    this.states.set(StateTypes.prepare, new Prepare(this, messageService));
    this.states.set(StateTypes.guess, new Guessing(this, messageService));
    this.states.set(StateTypes.result, new Resulting(this, messageService));

    this.state = this.states.get(StateTypes.ready);
  }
  public increaseRound() {
    this.currentRound++;
  }
  public isGameEnd(): boolean {
    return this.EndRound < this.currentRound;
  }

  public getTurnName(): string {
    return this.turn.getName();
  }
  public setTurnUser(user: User) {
    this.turn = user;
  }
  public getCurrentRound(): number {
    return this.currentRound;
  }
  public clearTransitionTimer() {
    clearTimeout(this.TransitionTimer);
  }
  public inGame(): boolean {
    return this.isInGame;
  }
  public getParticipants(): User[] {
    return this.participants.getAllList();
  }
  public getPlayerQueue(): PlayerQueue {
    return this.participants;
  }
  public setParticipants(pq: PlayerQueue) {
    this.participants = pq;
  }
  public setRound(end: number, current: number) {
    this.EndRound = end;
    this.currentRound = current;
  }
  public setTurn(user: User) {
    this.turn = user;
  }
  public setGameEnd() {
    this.isInGame = false;
    this.currentRound = 1;
    this.isGameReady = false;
  }
  public setGameStart() {
    this.isGameReady = false;
    this.isInGame = true;
  }
  public setIsGameReady(b: boolean) {
    this.isGameReady = b;
  }
  public canStart(): boolean {
    return !this.isInGame && this.isGameReady;
  }
  public setTransitionByTimeOut(timerHandler: NodeJS.Timeout) {
    this.TransitionTimer = timerHandler;
  }
  public isRoundFinished(): boolean {
    return this.participants.isHead();
  }
  public setState(stateType: StateTypes, hook: Command = new NoCommand()) {
    this.state.clearTimer();
    this.state = this.states.get(stateType);
    hook.excute();
    this.state.onActivated();
  }
  public getState(): State {
    return this.state;
  }
  public getStateByType(type: StateTypes): State {
    return this.states.get(type);
  }
}
