import { Room } from "../models/Room";
import { User } from "./data";

export class PlayerQueue {
  constructor() {}
  private head: Player = null;
  private tail: Player = null;
  private current: Player = null;
  private length: number = 0;

  public getUserByName(name: String): User {
    let found: User = null;
    let node: Player = this.head;
    while (this.head) {
      if (node.user.getName() == name) {
        found = node.user;
        break;
      }
      node = node.next;
      if (node == this.head) {
        break;
      }
    }
    return found;
  }
  public getAllList(): User[] {
    let users: User[] = [];
    let node: Player = this.head;
    while (this.head) {
      users.push(node.user);
      node = node.next;
      if (node == this.head) {
        break;
      }
    }
    return users;
  }
  getLength(): number {
    return this.length;
  }
  nextTurn(): User {
    this.current = this.current.next;
    return this.current.user;
  }
  getCurrent(): User {
    return this.current.user;
  }
  isHead(): boolean {
    return this.current == this.head;
  }

  getHead(): User {
    return this.head.user;
  }
  addHead(user: User): void {
    let node: Player = new Player(user);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.current = node;
      node.next = this.head;
    } else {
      node.next = this.head;
      this.tail.next = node;
      this.head = node;
      this.current = node;
    }
    this.length++;
  }
  removePlayer(user: User): boolean {
    //지금 턴인 유저를 삭제한경우 true리턴
    let node: Player = this.head;
    while (node) {
      if (node.next.user == user) {
        break;
      } else {
        node = node.next;
      }
      if (node == this.head) {
        //끝까지 찾았는데 없으면
        return false;
      }
    }

    let Found: Player = node.next;
    if (this.head == Found) {
      this.head = Found.next;
    }
    if (this.tail == Found) {
      this.tail = node;
    }
    node.next = node.next.next;
    this.length--;
    if (this.current == Found) {
      //지금 턴인 유저가 나간거였으면 다음으로 턴이동
      this.current = node;
      return true;
    } else {
      return false;
    }
  }
}

class Player {
  constructor(user: User) {
    this.user = user;
  }
  user: User;
  next: Player = null;
}

export class Logger {
  static yyyymmdd(d: Date){
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
  
    return [d.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('-');
  };
  static hhmmss(d: Date){
    var hh = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
  
    return [(hh>9 ? '' : '0') + hh,
            (mm>9 ? '' : '0') + mm,
            (ss>9 ? '' : '0') + ss,
           ].join(':');
  };

  static yyyymmddhhmmss(d: Date){
    return [Logger.yyyymmdd(d), Logger.hhmmss(d)].join(' ')
  }
  static log(...optionalParams: any[]) {
    console.log(Logger.yyyymmddhhmmss(new Date()), ...optionalParams);
  }
}
