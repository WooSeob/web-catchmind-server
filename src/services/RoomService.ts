import {
  User,
  DrawData,
  WordPool,
  WelcomeMsgSender,
  RoomNotFoundMsgSender,
} from "../models/data";
import { Socket } from "socket.io";
import { Logger } from "../util";
import { RoomPool } from "../models/RoomPool";
import { JoinData, RestoreMsgSenderCmd } from "../models/data";
import { MessageService } from "./MessageService";
import { RoomModel } from "../models/RoomModel";
import { GameService } from "./GameService";
import { event_game_cmd_types, settingOpt } from "../messages/CommandMessage";
export class RoomService {
  private user: User;
  private roomModel: RoomModel;
  private gameService: GameService;
  private messageService: MessageService;
  private socket: Socket;

  public constructor(socket: Socket) {
    this.socket = socket;
  }

  public onJoin(joinReq: JoinData): void {
    let RoomID = joinReq.roomID;
    let thisUser = new User(joinReq.user.name, this.socket.id, RoomID);

    let room: RoomModel = RoomPool.getInstance().getRoomByID(RoomID);
    if (room) {
      this.socket.join(RoomID);

      this.messageService = new MessageService(RoomModel.io.to(RoomID));

      this.user = thisUser;

      this.roomModel = room;
      this.roomModel.addUser(thisUser);
      this.roomModel.getGameModel().setStates(this.messageService);

      this.gameService = new GameService(
        this.messageService,
        this.roomModel.getGameModel()
      );

      //새로 입장한 유저에게 기존 방에 있는 유저들의 정보 전달
      new WelcomeMsgSender(room, this.socket).excute();

      if (room.isInGame()) {
        // inGame 상태면 최신 게임 상태 정보 전달
        new RestoreMsgSenderCmd(
          this.roomModel.getGameModel(),
          this.socket
        ).excute();
      }

      //새로운 유저 전달
      this.messageService.systemMessage.joinUser(this.user);
    } else {
      // 방을 찾지 못하면 Not Found 메시지 전달
      new RoomNotFoundMsgSender(this.socket).excute();
    }
  }

  public onDisconnect() {
    Logger.log("disconnect", this.user);
    if (this.roomModel && this.user) {
      if (this.roomModel.getUserList().length == 1) {
        //마지막 한명이 나가면 방폭
        RoomPool.getInstance().deleteRoomByID(this.roomModel.getRoomID());
        Logger.log("Delete Room#", this.roomModel.getRoomID());
      } else {
        if (this.roomModel.isInGame()) {
          this.gameService.userDisconnect(this.user);
        }

        this.roomModel.removeUser(this.user);

        if (this.roomModel.getHostName() == this.user.getName()) {
          //호스트 유저가 나간거였으면 다른사람 호스트 지목
          this.roomModel.setHostToZeroIDX();
          this.messageService.systemMessage.changedHost(
            this.roomModel.getHostName()
          );
        }

        this.messageService.systemMessage.leaveUser(this.user);
      }
    } else {
      Logger.log("onDisconnecte Called but no roomModel");
    }
  }
  public onGameCmd(msg) {
    if (this.roomModel) {
      if (msg.type == event_game_cmd_types.START_GAME) {
        console.log("game start.");
        let startInfo: settingOpt = msg.data;

        //roomController2.onStart(User, any)
        if (
          this.user.getName() == this.roomModel.getHostName() &&
          !this.roomModel.isInGame()
        ) {
          //게임 시작
          // Logger.log("onStart,", gameSet);
          this.gameService.setGame(
            this.roomModel.getUserList(),
            startInfo.round,
            startInfo.timeout
          );
          this.gameService.start();
        }
      }
    }
  }
  public onGameMsg(msg) {
    if (this.roomModel) {
      if (this.user.isParticipant) {
        this.gameService.MsgHandler(this.user, msg);
      }
    }
  }
  public onDrawCmd(msg: DrawData) {
    if (this.roomModel) {
      if (this.user.isParticipant) {
        this.gameService.MsgHandler(this.user, msg);
      }
    }
  }
  public onChatMsg(msg) {
    if (this.roomModel) {
      let user = this.user;
      if (msg != "") {
        if (msg.data.from.name != user.getName()) {
          console.log("채팅 메시지 송신인이 조작됨");
          return;
        }

        this.messageService.chatMessage.chat(user, msg.data.body);

        if (msg.data.body.startsWith("/")) {
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
    if (this.roomModel) {
      this.roomModel.setSearchable(opt);
    }
  }
}
