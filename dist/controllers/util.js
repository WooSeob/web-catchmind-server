"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerQueue = void 0;
class PlayerQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.length = 0;
    }
    getUserByName(name) {
        let found = null;
        let node = this.head;
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
    getAllList() {
        let users = [];
        let node = this.head;
        while (this.head) {
            users.push(node.user);
            node = node.next;
            if (node == this.head) {
                break;
            }
        }
        return users;
    }
    getLength() {
        return length;
    }
    nextTurn() {
        this.current = this.current.next;
        return this.current.user;
    }
    isHead() {
        return this.current == this.head;
    }
    getHead() {
        return this.head.user;
    }
    addHead(user) {
        let node = new Player(user);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.current = node;
            node.next = this.head;
        }
        else {
            node.next = this.head;
            this.tail.next = node;
            this.head = node;
            this.current = node;
        }
        this.length++;
    }
    removePlayer(user) {
        //지금 턴인 유저를 삭제한경우 true리턴
        let node = this.head;
        while (node) {
            if (node.next.user == user) {
                break;
            }
            else {
                node = node.next;
            }
            if (node == this.head) {
                //끝까지 찾았는데 없으면
                return false;
            }
        }
        let Found = node.next;
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
        }
        else {
            return false;
        }
    }
}
exports.PlayerQueue = PlayerQueue;
class Player {
    constructor(user) {
        this.next = null;
        this.user = user;
    }
}
