"use strict";
// const mongoose = require("mongoose");
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketHandler = void 0;
const data_1 = require("./data");
const Message_1 = require("./Message");
// var userListByRoom = new Map();
const RoomController_1 = require("./RoomController");
const util_1 = require("./util");
class SocketHandler {
    constructor(io) {
        this.io = io;
        this.io.on("connection", this.handler);
    }
    getIo() {
        return this.io;
    }
    static createInstance(io) {
        this.instance = new SocketHandler(io);
    }
    static getInstance() {
        if (SocketHandler.instance) {
            return SocketHandler.instance;
        }
        else {
            console.log("<< SocketHandler 인스턴스가 없습니다 >>");
            return null;
        }
    }
    sendGameSync(roomID, State) {
        this.io.sockets.in(roomID).emit("game-sync", State);
        util_1.Logger.log("game-sync >", roomID, State);
    }
    sendGameMsg(roomID, gameMsg) {
        this.io.sockets.in(roomID).emit("game-msg", gameMsg);
        if (gameMsg.key != Message_1.MSG_KEY.TIMER) {
            util_1.Logger.log("game-msg >", roomID, gameMsg);
        }
    }
    sendSysMsg(roomID, sys_Message) {
        this.io.sockets.in(roomID).emit("sys-msg", sys_Message);
        util_1.Logger.log("sys-msg >", roomID, sys_Message);
    }
    handler(socket) {
        let roomController;
        let thisUser;
        var handshake = socket.handshake;
        util_1.Logger.log("New Connection from ", handshake.address);
        socket.on("lobby-msg", (msg) => {
            if (msg.type == "createRoom") {
                let createdRoom = RoomController_1.RoomPool.getInstance().createRoom(msg.data);
                let roomCreated = {
                    type: "createRoom",
                    data: createdRoom.getRoomID(),
                };
                socket.emit("lobby-msg", roomCreated);
            }
            else if (msg.type == "searchRoom") {
                let matchedRoom = RoomController_1.RoomPool.getInstance().matchMaking(msg.data);
                let roomMatched = {
                    type: "searchRoom",
                    data: matchedRoom.getRoomID(),
                };
                socket.emit("lobby-msg", roomMatched);
            }
        });
        socket.on("join", (joinData) => {
            // 방 찾기 -> 기존 방의 아이디를 받음
            // 방 만들기 -> 새로 만들어도 좋은 아이디를 받음
            util_1.Logger.log("join", joinData, "from", socket.handshake.address);
            let RoomID = joinData.roomID;
            thisUser = new data_1.User(joinData.user.name, socket.id, RoomID);
            let room = RoomController_1.RoomPool.getInstance().getRoomByID(RoomID);
            if (!room) {
                let roomNotFound = {
                    type: "room-not-found",
                    data: null,
                };
                socket.emit("sys-msg", roomNotFound);
                return;
            }
            socket.join(RoomID);
            roomController = new RoomController_1.RoomController(room);
            roomController.onJoin(thisUser);
            let welcomeMsg = {
                type: "user-welcome",
                data: room.getUsersInfo(),
            };
            socket.emit("sys-msg", welcomeMsg);
            if (room.isInGame()) {
                new data_1.RestoreMsgSenderCmd(room.getGame(), socket).excute();
            }
        });
        socket.on("disconnect", () => {
            if (roomController) {
                util_1.Logger.log("disconnect <", thisUser.getName(), socket.handshake.address);
                roomController.onDisconnect(thisUser);
            }
        });
        socket.on("game-cmd", (msg) => {
            if (roomController) {
                util_1.Logger.log("chat-cmd <", thisUser.getName(), msg, socket.handshake.address);
                if (msg.type == "start") {
                    console.log("game start.");
                    roomController.onStart(thisUser, msg.data);
                }
            }
        });
        socket.on("game-msg", (msg) => {
            if (roomController) {
                util_1.Logger.log("game-msg <", thisUser.getName(), msg, socket.handshake.address);
                roomController.onGameMsg(thisUser, msg);
            }
        });
        // 클라이언트로부터의 메시지가 수신되면
        socket.on("draw cmd", (drawData) => {
            if (roomController) {
                roomController.onGameMsg(thisUser, drawData);
            }
        });
        socket.on("chat-msg", (msg) => {
            if (roomController) {
                util_1.Logger.log("chat-msg <", thisUser.getName(), msg, socket.handshake.address);
                roomController.onChat(thisUser, msg);
            }
        });
        socket.on("searchOpt", (opt) => {
            if (roomController) {
                util_1.Logger.log("searchOpt <", thisUser.getName(), opt, socket.handshake.address);
                roomController.setRoomSearchOpt(opt);
            }
        });
    }
}
exports.SocketHandler = SocketHandler;
