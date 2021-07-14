import { Socket, Server } from "socket.io";
import { User, JoinData, DrawData, Score } from "./data";
import { GameService } from "../services/GameService";

import { Logger } from "../util";
import { Event } from "../messages/Message";
import { DataMsg } from "../messages/GameData";
import { CmdMsg, settingOpt } from "../messages/GameCmd";
import { SysMsg } from "../messages/SysMsg";
import { ChatMsg } from "../messages/ChatMsg";
import { DrawMsg } from "../messages/DrawCmd";
export class Room {
  private constructor(roomID: string, hostName: string) {
    this.roomID = roomID;
    this.hostName = hostName;
  }

  public static craeteRoomInstance(roomID: string, hostName: string): Room {
    return new Room(roomID, hostName);
  }

  public sendGameSync(State: CmdMsg) {
    //TODO GAME CMD
    let EventTypes = Event.getInstance().types;
    this.getRoomServer().emit(EventTypes.GAME_CMD, State);
  }

  public sendGameMsg(gameMsg: DataMsg) {
    let event = Event.getInstance();
    let EventTypes = event.types;
    this.getRoomServer().emit(EventTypes.GAME_MSG, gameMsg);
    if (gameMsg.type != event.GAME_DATA.types.TIMER) {
      Logger.log(EventTypes.GAME_MSG, ">", this.roomID, gameMsg);
    }
  }

  public sendSysMsg(sys_Message: SysMsg) {
    let EventTypes = Event.getInstance().types;
    this.getRoomServer().emit(EventTypes.SYS_MSG, sys_Message);
    Logger.log(EventTypes.SYS_MSG, ">", this.roomID, sys_Message);
  }

  public sendChatMsg(msg: ChatMsg) {
    let EventTypes = Event.getInstance().types;
    this.getRoomServer().emit(EventTypes.CHAT_MSG, msg);
  }

  public sendDrawCmd(cmd: DrawMsg) {
    let EventTypes = Event.getInstance().types;
    this.getRoomServer().emit(EventTypes.DRAW_CMD, cmd);
  }

  public static io: Server;
  private Searchable = true;
  private roomID: string;
  private hostName: string;
  private userList: User[] = [];

  private game: GameService;

  private getRoomServer(): Server {
    return Room.io.to(this.roomID);
  }
  public setGame(info: settingOpt) {
    Logger.log("Room.setGame()", info);
    this.game = new GameService(this);
    this.game.setGame(this.getUserList(), info.round, info.timeout);
  }
  public isSearchable() {
    return this.Searchable;
  }
  public setSearchable(b: boolean) {
    this.Searchable = b;
  }
  public getGame(): GameService {
    return this.game;
  }
  public getRoom() {}
  public getRoomID(): string {
    return this.roomID;
  }
  public getHostName(): string {
    return this.hostName;
  }
  public getUserList(): User[] {
    return this.userList;
  }
  public isInGame(): boolean {
    if (this.game) {
      return this.game.inGame();
    } else {
      return false;
    }
  }
  setHostToZeroIDX() {
    this.hostName = this.userList[0].getName();

    let hostChangedMsg: DataMsg = Event.getInstance().SYS.msg.HOST_CHANGED({
      newHostName: this.hostName,
    });
    this.sendSysMsg(hostChangedMsg);
  }
  getUsersInfo() {
    // let users = this.userList.map((u) => u.getName());
    let userListData = {
      host: this.hostName,
      users: this.userList,
    };
    return userListData;
  }
  removeUser(user: User): void {
    //TODO foreach 동기적인걸로 바꿀것
    let tempList = new Array();
    this.userList.forEach((u) => {
      tempList.push(u);
    });

    let idx = 0;
    for (let i = 0; i < this.userList.length; i++) {
      if (tempList[i] == user) {
        idx = i;
        break;
      }
    }
    tempList.splice(idx, 1);

    this.userList = [];
    tempList.forEach((u) => {
      this.userList.push(u);
    });
  }
  addUser(user: User) {
    this.userList.push(user);
  }
  getUserByName(name: String): User {
    let foundUser: User;
    this.userList.forEach((user) => {
      if (user.getName() == name) {
        foundUser = user;
      }
    });
    return foundUser;
  }
}
