import {
  User,
  JoinData,
  DrawData,
  Score,
  RestoreMsgSenderCmd,
} from "../controllers/data";
import { Game } from "../controllers/gameLogic";
import { SocketHandler } from "../controllers/main";
import { RoomPool } from "../controllers/RoomController";

export class Room {
  private constructor(roomID: string, hostName: string) {
    this.roomID = roomID;
    this.hostName = hostName;
    this.game = new Game(roomID);
  }
  
  public static craeteRoomInstance(roomID: string, hostName: string): Room{
      return new Room(roomID, hostName)
  }
  
  private Searchable = true;
  private roomID: string;
  private hostName: string;
  private userList: User[] = [];

  private game: Game;

  public isSearchable(){
    return this.Searchable;
  }
  public setSearchable(b: boolean){
    this.Searchable = b;
  }
  public getGame(): Game {
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
    return this.game.inGame();
  }
  setHostToZeroIDX() {
    this.hostName = this.userList[0].getName();
    let hostChangedMsg = {
      type: "host-changed",
      data: this.hostName,
    };
    SocketHandler.getInstance()
      .getIo()
      .sockets.in(this.roomID)
      .emit("sys-msg", hostChangedMsg);
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
