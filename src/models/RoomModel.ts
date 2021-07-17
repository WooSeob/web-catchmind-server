import { Socket, Server } from "socket.io";
import { User, JoinData, DrawData, Score } from "./data";

import { MessageService } from "../services/MessageService";
import { GameModel } from "./GameModel";
export class RoomModel {
  public static io: Server;
  private Searchable = true;
  private roomID: string;
  private hostName: string;
  private userList: User[] = [];

  private gameModel: GameModel;

  private constructor(roomID: string, hostName: string) {
    this.roomID = roomID;
    this.hostName = hostName;
    this.gameModel = new GameModel();
  }

  public static craeteRoomInstance(
    roomID: string,
    hostName: string
  ): RoomModel {
    return new RoomModel(roomID, hostName);
  }

  public isSearchable() {
    return this.Searchable;
  }
  public setSearchable(b: boolean) {
    this.Searchable = b;
  }
  public getGameModel(): GameModel {
    return this.gameModel;
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
    if (this.gameModel) {
      return this.gameModel.inGame();
    } else {
      return false;
    }
  }
  setHostToZeroIDX() {
    this.hostName = this.userList[0].getName();
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
