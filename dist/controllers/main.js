"use strict";
// const mongoose = require("mongoose");
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketHandler = void 0;
//TODO 잘못된 접근 대응하기
const gameLogic_1 = require("./gameLogic");
const data_1 = require("./data");
// var userListByRoom = new Map();
var RoomPool = new Map();
class Room {
    constructor(roomID, hostUser) {
        this.userList = [];
        this.roomID = roomID;
        this.hostUser = hostUser;
        this.game = new gameLogic_1.Game(roomID);
    }
    getUsersInfo() {
        // let users = this.userList.map((u) => u.getName());
        let userListData = {
            host: this.hostUser.getName(),
            users: this.userList,
            participants: this.game.getParticipants().map((u) => u.getName()),
        };
        return userListData;
    }
    removeUser(user) {
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
    getUserByName(name) {
        let foundUser;
        this.userList.forEach((user) => {
            if (user.getName() == name) {
                foundUser = user;
            }
        });
        return foundUser;
    }
    onDrawCmd(drawData) {
        let io = SocketHandler.getInstance().getIo();
        io.sockets.in(this.roomID).emit("draw cmd", drawData);
        console.log("draw cmd: " + drawData);
    }
    onDisconnect(user) {
        console.log("user disconnected");
        if (this.userList.length == 1) {
            //마지막 한명이 나가면 방폭
            RoomPool.delete(this.roomID);
            console.log("Delete Room#", this.roomID);
        }
        else {
            this.game.userDisconnect(user);
            let io = SocketHandler.getInstance().getIo();
            this.removeUser(user);
            if (this.hostUser == user) {
                //호스트 유저가 나간거였으면 다른사람 호스트 지목
                this.hostUser = this.userList[0];
                let hostChangedMsg = {
                    type: "host-changed",
                    data: this.hostUser.getName(),
                };
                io.sockets.in(this.roomID).emit("sys-msg", hostChangedMsg);
            }
            //나갔으니까 다시 리스트 전달
            // let users = this.userList.map((u) => u.getName());
            // let userListData = {
            //   host: this.hostUser.getName(),
            //   users: users,
            //   participants: this.game.getParticipants().map((u) => u.getName()),
            // };
            let userLeaveData = {
                type: "user-leave",
                data: user.getName(),
            };
            io.sockets.in(this.roomID).emit("sys-msg", userLeaveData);
        }
    }
    onStart(user, gameSet) {
        if (user == this.hostUser && !this.game.inGame()) {
            this.game.setGame(this.userList, gameSet.round, gameSet.timeout);
            //게임 시작하니까 리스트 전달
            let io = SocketHandler.getInstance().getIo();
            let users = this.userList.map((u) => u.getName());
            let userListData = {
                host: this.hostUser.getName(),
                users: users,
                participants: this.game.getParticipants().map((u) => u.getName()),
            };
            io.sockets.in(this.roomID).emit("user-list", userListData);
            this.game.start();
        }
    }
    onGameMsg(user, msg) {
        if (user.isParticipant) {
            this.game.MsgHandler(user, msg);
        }
    }
    onJoin(user) {
        // 전달받은 클라이언트 정보를 저장
        // console.log(socket);
        let io = SocketHandler.getInstance().getIo();
        console.log("user" + user.getName() + " has joined");
        this.userList.push(user);
        // let users = this.userList.map((u) => u.getName());
        // userListData.participants = this.game
        //   .getParticipants()
        //   .map((u) => u.getName());
        //새로운 유저 전달
        let userJoinData = {
            type: "user-join",
            data: user.getName(),
        };
        io.sockets.in(this.roomID).emit("sys-msg", userJoinData);
    }
    onChat(user, msg) {
        console.log("chat broadcast");
        let io = SocketHandler.getInstance().getIo();
        let broadcastMsg = {
            from: user.getName(),
            data: msg,
        };
        io.sockets.in(this.roomID).emit("chat-msg", broadcastMsg);
    }
}
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
    sendGameCMD(roomID, cmd_message) {
        this.io.sockets.in(roomID).emit("game-cmd", cmd_message);
    }
    sendGameMsg(roomID, msg_message) {
        this.io.sockets.in(roomID).emit("game-msg", msg_message);
    }
    sendSysMsg(roomID, sys_Message) {
        this.io.sockets.in(roomID).emit("sys-msg", sys_Message);
    }
    handler(socket) {
        let room;
        let thisUser;
        console.log(socket.id);
        socket.on("join", (joinData) => {
            let RoomID = joinData.roomID;
            thisUser = new data_1.User(joinData.user.name, socket, RoomID);
            let r = RoomPool.get(RoomID);
            if (r) {
                room = r;
            }
            else {
                // 내가 방장
                room = new Room(RoomID, thisUser);
                RoomPool.set(RoomID, room);
            }
            socket.join(RoomID);
            room.onJoin(thisUser);
            let welcomeMsg = {
                type: "user-welcome",
                data: room.getUsersInfo(),
            };
            socket.emit("sys-msg", welcomeMsg);
        });
        socket.on("disconnect", () => {
            room.onDisconnect(thisUser);
        });
        socket.on("game-cmd", (msg) => {
            if (msg.type == "start") {
                console.log("game start.");
                room.onStart(thisUser, msg.data);
            }
        });
        socket.on("game-msg", (msg) => {
            room.onGameMsg(thisUser, msg);
        });
        // 클라이언트로부터의 메시지가 수신되면
        socket.on("draw cmd", (drawData) => {
            room.onGameMsg(thisUser, drawData);
        });
        socket.on("chat-msg", (msg) => {
            room.onChat(thisUser, msg);
        });
    }
}
exports.SocketHandler = SocketHandler;
