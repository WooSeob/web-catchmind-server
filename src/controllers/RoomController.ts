import {
  User,
  DrawData,
  WordPool,
  WelcomeMsgSender,
  RoomNotFoundMsgSender,
} from "../models/data";
import { Room } from "../models/Room";
import { Socket } from "socket.io";
import { Logger } from "../util";
import { RoomPool } from "../models/RoomPool";
import { JoinData, Score, RestoreMsgSenderCmd } from "../models/data";
import { Event } from "../messages/Message";
import { hostChanged, SysMsg } from "../messages/SysMsg";
import { settingOpt } from "../messages/GameCmd";
import { chat, ChatMsg } from "../messages/ChatMsg";

export class RoomController {
  private user: User;
  private room: Room;
  private socket: Socket;

  public constructor(socket: Socket) {
    this.socket = socket;
  }

  public onJoin(joinReq: JoinData): void {
    // Logger.log("join", joinReqMsg, "from", this.socket.handshake.address);
    let RoomID = joinReq.roomID;
    let thisUser = new User(joinReq.user.name, this.socket.id, RoomID);

    let room = RoomPool.getInstance().getRoomByID(RoomID);
    if (room) {
      this.socket.join(RoomID);

      this.user = thisUser;
      this.room = room;
      this.room.addUser(thisUser);

      //새로 입장한 유저에게 기존 방에 있는 유저들의 정보 전달
      new WelcomeMsgSender(room, this.socket).excute();
      if (room.isInGame()) {
        // inGame 상태면 최신 게임 상태 정보 전달
        new RestoreMsgSenderCmd(room.getGame(), this.socket).excute();
      }

      //새로운 유저 전달
      this.room.sendSysMsg(
        Event.getInstance().SYS.msg.USER_JOIN({
          name: this.user.getName(),
        })
      );
    } else {
      // 방을 찾지 못하면 Not Found 메시지 전달
      new RoomNotFoundMsgSender(this.socket).excute();
    }
  }

  public onDisconnect() {
    Logger.log("disconnect", this.user);
    if (this.room && this.user) {
      // Logger.log(
      //   "disconnect <",
      //   this.user.getName(),
      //   this.socket.handshake.address
      // );
      if (this.room.getUserList().length == 1) {
        //마지막 한명이 나가면 방폭
        RoomPool.getInstance().deleteRoomByID(this.room.getRoomID());
        Logger.log("Delete Room#", this.room.getRoomID());
      } else {
        if (this.room.isInGame()) {
          this.room.getGame().userDisconnect(this.user);
        }

        this.room.removeUser(this.user);

        if (this.room.getHostName() == this.user.getName()) {
          //호스트 유저가 나간거였으면 다른사람 호스트 지목
          this.room.setHostToZeroIDX();
        }

        this.room.sendSysMsg(
          Event.getInstance().SYS.msg.USER_LEAVE({
            name: this.user.getName(),
          })
        );
      }
    } else {
      Logger.log("onDisconnecte Called but no room");
    }
  }
  public onGameCmd(msg) {
    if (this.room) {
      // Logger.log(
      //   "chat-cmd <",
      //   this.user.getName(),
      //   msg,
      //   this.socket.handshake.address
      // );
      let event = Event.getInstance();
      if (msg.type == event.GAME_CMD.types.START_GAME) {
        console.log("game start.");
        let startInfo: settingOpt = msg.data;

        //roomController2.onStart(User, any)
        if (
          this.user.getName() == this.room.getHostName() &&
          !this.room.isInGame()
        ) {
          //게임 시작
          // Logger.log("onStart,", gameSet);
          this.room.setGame(startInfo);
          this.room.getGame().start();
        }
      }
    }
  }
  public onGameMsg(msg) {
    if (this.room) {
      // Logger.log(
      //   "game-msg <",
      //   this.user.getName(),
      //   msg,
      //   this.socket.handshake.address
      // );

      if (this.user.isParticipant) {
        this.room.getGame().MsgHandler(this.user, msg);
      }
    }
  }
  public onDrawCmd(msg: DrawData) {
    if (this.room) {
      if (this.user.isParticipant) {
        this.room.getGame().MsgHandler(this.user, msg);
      }
    }
  }
  public onChatMsg(msg) {
    if (this.room) {
      // Logger.log(
      //   "chat-msg <",
      //   this.user.getName(),
      //   msg,
      //   this.socket.handshake.address
      // );
      let user = this.user;
      if (msg != "") {
        let data: chat = msg.data;
        if (data.from.name != user.getName()) {
          console.log("채팅 메시지 송신인이 조작됨");
          return;
        }

        this.room.sendChatMsg(
          Event.getInstance().CHAT.msg.CHAT({
            from: user,
            body: data.body,
          })
        );

        if (data.body.startsWith("/")) {
          let command = msg.split(" ")[0];
          let target = msg.split(" ")[1];
          if (command == "/add") {
            // console.log("command detect");
            WordPool.addWord(target);
          }
        }
      }
    }
  }
  public onSearchOpt(opt: boolean) {
    if (this.room) {
      // Logger.log(
      //   "searchOpt <",
      //   this.user.getName(),
      //   opt,
      //   this.socket.handshake.address
      // );
      this.room.setSearchable(opt);
    }
  }
}
