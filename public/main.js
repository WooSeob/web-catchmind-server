(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function ChatComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r1.data);
} }
function ChatComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r1.from, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r1.data, " ");
} }
function ChatComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_1_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_1_div_2_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r1.isSystem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r1.isSystem);
} }
class ChatComponent {
    constructor() { }
    sendChat() {
        if (this.MsgToSend !== "") {
            this.socket.emit('chat-msg', this.MsgToSend);
            this.inputElement.value = "";
            this.MsgToSend = "";
        }
        else {
            alert("메시지를 입력해 주세요.");
        }
    }
    ngOnInit() {
        this.inputElement = document.getElementById('chat-input');
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], inputs: { chatContainer: "chatContainer", socket: "socket" }, decls: 7, vars: 2, consts: [[1, "chattingView"], ["style", "padding: 0px", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694.", "aria-describedby", "basic-addon2", "id", "chat-input", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [2, "padding", "0px"], ["class", "row msg", 4, "ngIf"], [1, "row", "msg"], [2, "color", "red"], [1, "col-4", "col-md-5", "col-lg-4", 2, "padding-right", "4px", "padding-left", "0px", "border-right", "1px dashed lightgray"], [1, "col-8", "col-md-7", "col-lg-8", 2, "padding-right", "0px", "padding-left", "6px"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_3_listener($event) { return ctx.MsgToSend = $event; })("keydown.enter", function ChatComponent_Template_input_keydown_enter_3_listener() { return ctx.sendChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_5_listener() { return ctx.sendChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \uC804\uC1A1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatContainer.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.MsgToSend);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".chattingView[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 50vh;\n\n  display: flex;\n  flex-direction: column;\n  border: 1px solid lightgray; background-color: whitesmoke\n}\n\n.e[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.msg[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  background-color: snow;\n  padding-left: 7px;\n  border: 1px solid whitesmoke;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: auto;\n  border: 1px solid DodgerBlue;\n  padding: 5px 10px 5px 10px;\n  display: inline;\n}\n\n.chat-time[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  display: inline;\n}\n\n.send[_ngcontent-%COMP%] {\n  display: inline;\n  width: 200px;\n  height: auto;\n}\n\n.-input[_ngcontent-%COMP%] {\n  height: 38px;\n}\n\n.system[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  border: 1px solid gray;\n  background-color: gray;\n  text-align: center;\n  width: auto;\n  color: white;\n  padding: 5px 10px 5px 10px;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFFO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXR0aW5nVmlldyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDUwdmg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXG59XG5cbi5lIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLm1zZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHNub3c7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBEb2RnZXJCbHVlO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY2hhdC10aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zZW5kIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi4taW5wdXQge1xuICBoZWlnaHQ6IDM4cHg7XG59XG5cbi5zeXN0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css'],
            }]
    }], function () { return []; }, { chatContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], socket: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "/171":
/*!*************************************!*\
  !*** ./src/app/model/game-model.ts ***!
  \*************************************/
/*! exports provided: GameModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModel", function() { return GameModel; });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../draw */ "DNdT");
/* harmony import */ var _chat_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-container */ "6mCX");
/* harmony import */ var _user_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-container */ "GxPD");



class GameModel {
    constructor(mySelf) {
        this.isGuess = false;
        this.isPrepare = false;
        this.isResult = false;
        this.isReady = false;
        this.words = []; // 제시된 세가지 단어
        this.word = ''; // 현재 단어
        this.wordSecret = ''; //가려진 현재 단어
        this.isInGame = false;
        this.myTurn = false;
        this.timerRun = false;
        this.remainTime = 0;
        this.init(mySelf);
    }
    init(mySelf) {
        this.mySelf = mySelf;
        this.isGuess = false;
        this.isPrepare = false;
        this.isResult = false;
        this.isReady = false;
        this.words = [];
        this.word = '';
        this.wordSecret = '';
        this.isInGame = false;
        this.myTurn = false;
        this.timerRun = false;
        this.remainTime = 0;
    }
    startGame(participants) {
        // 게임 시작
        this.setParticipants(participants);
        _chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg('<<게임 시작>>'));
    }
    clearGame() {
        // 게임 종료
        this.timerRun = false;
        this.myTurn = false;
        this.word = '';
        this.wordSecret = '';
        _chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg('<<게임이 끝났습니다.>>'));
        _user_container__WEBPACK_IMPORTED_MODULE_2__["UserContainer"].getInstance().PUsersList.forEach((u) => {
            let msg = `${u.getName()} : ${u.score.score} 점`;
            _chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg(msg));
        });
        _user_container__WEBPACK_IMPORTED_MODULE_2__["UserContainer"].getInstance().resetParticipants();
    }
    setTimer(time) {
        this.remainTime = time;
    }
    setWords(words) {
        this.words = words;
    }
    setTurn(turn) {
        if (this.turn != turn) {
            // turn changed
            this.turn = turn;
            //clear turn
            this.words = [];
            this.word = '';
            this.wordSecret = '';
            _user_container__WEBPACK_IMPORTED_MODULE_2__["UserContainer"].getInstance().resetCorrect();
            _user_container__WEBPACK_IMPORTED_MODULE_2__["UserContainer"].getInstance().changeTurn(this.turn);
            this.myTurn = this.turn == this.mySelf.getName();
            this.word = '';
            _draw__WEBPACK_IMPORTED_MODULE_0__["CanvasController"].getInstance().clear();
            _chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg(this.turn + '의 차례입니다.'));
        }
    }
    setRound(round) {
        if (this.round != round) {
            // round changed
            this.round = round;
            _chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg('Round #' + this.round));
        }
    }
    setParticipants(users) {
        // 게임 시작될때만, this.startGame()에서만 호출
        _user_container__WEBPACK_IMPORTED_MODULE_2__["UserContainer"].getInstance().setParticipants(users);
    }
    setWord(word) {
        this.word = word;
        this.wordSecret = ' ';
        for (let i = 0; i < this.word.length; i++) {
            this.wordSecret = this.wordSecret + '_ ';
        }
        // console.log(this.wordSecret);
    }
    clearState() {
        this.isReady = false;
        this.isPrepare = false;
        this.isGuess = false;
        this.isResult = false;
    }
    setReady() {
        this.clearState();
        this.isReady = true;
        this.timerRun = false;
        if (this.isInGame) {
            this.isInGame = false;
        }
    }
    setPrepare() {
        this.clearState();
        this.isPrepare = true;
        //TODO TimerRun이 여기 있는게 과연 맞는가?
        this.timerRun = true;
        if (!this.isInGame) {
            this.isInGame = true;
        }
    }
    setGuess() {
        this.clearState();
        this.isGuess = true;
        if (!this.isInGame) {
            this.isInGame = true;
        }
    }
    setResult() {
        this.clearState();
        this.isResult = true;
        if (!this.isInGame) {
            this.isInGame = true;
        }
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\byunw\dev\catchmind\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0gKg":
/*!*******************************************!*\
  !*** ./src/app/controller/state/Ready.ts ***!
  \*******************************************/
/*! exports provided: Ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ready", function() { return Ready; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "yyMF");

var KEY;
(function (KEY) {
    KEY["GAME_RESULT"] = "game_result";
})(KEY || (KEY = {}));
class Ready extends _State__WEBPACK_IMPORTED_MODULE_0__["State"] {
    // 1. 게임이 끝났을 때
    // 최종 결과
    onMessage(msg) {
        switch (msg.key) {
            case KEY.GAME_RESULT:
                console.log('게임 종료 처리');
                //TODO ~ 게임이 끝났습니다 ~
                let gameResult = msg.value;
                this.controller.gameModel.clearGame();
                // 최종 성적 처리~~~~
                break;
            default:
                break;
        }
    }
}


/***/ }),

/***/ "0tq+":
/*!********************************************!*\
  !*** ./src/app/controller/state/Result.ts ***!
  \********************************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "yyMF");
/* harmony import */ var _model_chat_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/chat-container */ "6mCX");
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces */ "Bf6M");
/* harmony import */ var src_app_model_user_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/user-container */ "GxPD");




var KEY;
(function (KEY) {
    KEY["TURN_RESULT"] = "turn_result";
    KEY["TURN_USER_LEFT"] = "turn_user_left";
    KEY["ONLY_ONE_PLAYER"] = "only_one_player";
})(KEY || (KEY = {}));
class Result extends _State__WEBPACK_IMPORTED_MODULE_0__["State"] {
    // 1. Guess에서 TimeOut됬을 때.
    // 2. Prepare에서 해당 TurnUser가 탈주 했을 떄.
    // 3. Guess에서 해당 TurnUser가 탈주 했을 때.
    // 4. Prepare | Guess에서 2명 남은 상황에서 한명이 나갈 때.
    // 해당 턴의 결과 (이 상태에서 싱크를 맞춘다.)
    onMessage(msg) {
        switch (msg.key) {
            case KEY.TURN_RESULT:
                let turnResult = msg.value;
                //서버 기준으로 점수 싱크 맞추기
                src_app_model_user_container__WEBPACK_IMPORTED_MODULE_3__["UserContainer"].getInstance().syncScores(turnResult);
                this.controller.gameModel.turnResult = turnResult;
                break;
            case KEY.TURN_USER_LEFT:
                let turnUserLeft = {
                    user: msg.value,
                };
                _model_chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(_model_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg('턴 유저였던 ' +
                    turnUserLeft.user +
                    '가 퇴장해서 다음턴으로 넘어갑니다.'));
                break;
            case KEY.ONLY_ONE_PLAYER:
                _model_chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(_model_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg('플레이어가 한명밖에 남지않았으므로 게임을 종료합니다.'));
                break;
            case src_app_interfaces__WEBPACK_IMPORTED_MODULE_2__["COMMON_KEY"].TIMER:
                this.controller.gameModel.setTimer(msg.value);
                break;
            default:
                break;
        }
    }
}


/***/ }),

/***/ "18Le":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "WUx6");



// import { User } from './user';
// import { AuthResponse } from './authresponse';
// import { Loc8rDataService } from './loc8r-data.service';
class AuthenticationService {
    constructor(storage) {
        this.storage = storage;
    }
    getNoMemberName() {
        return this.storage.getItem('no-member');
    }
    createNoMember(name) {
        let id = Math.floor(Math.random() * 10000).toString();
        this.saveNoMemberName(name + "#" + id);
    }
    setNoMemberName(name) {
        if (this.isMemberExist()) {
            let id = this.getUserID();
            this.saveNoMemberName(name + "#" + id);
        }
        else {
            this.createNoMember(name);
        }
    }
    saveNoMemberName(token) {
        this.storage.setItem('no-member', token);
    }
    isMemberExist() {
        const noMembersNickName = this.getNoMemberName();
        if (noMembersNickName) {
            return true;
        }
        else {
            return false;
        }
    }
    getUserNickName() {
        if (this.isMemberExist()) {
            const nickName = this.getNoMemberName().split("#")[0];
            return nickName;
        }
    }
    getUserID() {
        if (this.isMemberExist()) {
            const id = this.getNoMemberName().split("#")[1];
            return id;
        }
    }
    getUserFullID() {
        if (this.isMemberExist()) {
            const fullid = this.getNoMemberName();
            return fullid;
        }
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage__WEBPACK_IMPORTED_MODULE_1__["BROWSER_STORAGE"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: Storage, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_storage__WEBPACK_IMPORTED_MODULE_1__["BROWSER_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SidebarComponent_div_0_div_4_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDE04");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_4_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u270F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_div_4_div_1_span_4_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_0_div_4_div_1_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.score.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.score.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.score.turn);
} }
function SidebarComponent_div_0_div_4_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDE04");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_4_div_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u270F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_div_4_div_2_span_4_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_0_div_4_div_2_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.score.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.score.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.score.turn);
} }
function SidebarComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_0_div_4_div_1_Template, 6, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_div_0_div_4_div_2_Template, 6, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", user_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r2.mySelf.name);
} }
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uAC8C\uC784\uC911");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_div_4_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users.PUsersList);
} }
function SidebarComponent_div_4_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \uD83D\uDD79");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_4_div_1_span_3_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r12.name == ctx_r13.hostUser);
} }
function SidebarComponent_div_4_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \uD83D\uDD79");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_4_div_2_span_3_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r12.name == ctx_r14.hostUser);
} }
function SidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_div_4_div_1_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_div_4_div_2_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", user_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r1.mySelf.name);
} }
class SidebarComponent {
    constructor() { }
    ngOnInit() { }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { users: "users", hostUser: "hostUser", mySelf: "mySelf" }, decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "list-title"], ["id", "userList"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], ["id", "ingameList"], [3, "ngSwitch"], ["class", "user-element mySlef", 4, "ngSwitchCase"], ["class", "user-element others", 4, "ngSwitchDefault"], [1, "user-element", "mySlef"], [1, "user-element", "others"], ["class", "user-element mySelf", 4, "ngSwitchCase"], [1, "user-element", "mySelf"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uB300\uAE30\uC2E4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.PUsersList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users.NpUsersList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0px;\n}\n.user-element[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  border: 1px solid lightgray;\n}\n.others[_ngcontent-%COMP%]{\n  background-color: whitesmoke;\n}\n.list-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-left: 7px;\n  background-color: rgb(8, 26, 32);\n  color: antiquewhite;\n}\n.mySelf[_ngcontent-%COMP%]{\n  background-color:lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLnVzZXItZWxlbWVudCB7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ub3RoZXJze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmxpc3QtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAyNiwgMzIpO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4ubXlTZWxme1xuICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c2t5Ymx1ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css'],
            }]
    }], function () { return []; }, { users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mySelf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6mCX":
/*!*****************************************!*\
  !*** ./src/app/model/chat-container.ts ***!
  \*****************************************/
/*! exports provided: Chat, ChatContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContainer", function() { return ChatContainer; });
class Chat {
    constructor(isSys, from, data) {
        this.isSystem = isSys;
        this.from = from;
        this.data = data;
    }
    static SysMsg(msg) {
        return new Chat(true, null, msg);
    }
    static UserMsg(user, msg) {
        return new Chat(false, user, msg);
    }
}
class ChatContainer {
    constructor() {
        this.chats = [];
    }
    init() {
        this.chats = [];
    }
    static getInstance() {
        if (ChatContainer.instance) {
            return ChatContainer.instance;
        }
        else {
            this.instance = new ChatContainer();
            return this.instance;
        }
    }
    push(msg) {
        this.chats.push(msg);
        //스크롤 최하단 고정
        setTimeout(function () {
            let chatViewEle = document.querySelector('.chattingView');
            chatViewEle.scrollTop = chatViewEle.scrollHeight;
        }, 10);
    }
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const _c0 = ["nickNameRequiredModal"];
function HomeComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uC548\uB155\uD558\uC138\uC694 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.myName, " \uB2D8!");
} }
function HomeComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \uB2C9\uB124\uC784\uC744 \uBA3C\uC800 \uC124\uC815\uD574 \uC8FC\uC138\uC694 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
} }
function HomeComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
} }
function HomeComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uB2C9\uB124\uC784\uC744 \uC124\uC815\uD574 \uC8FC\uC138\uC694!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uB2C9\uB124\uC784 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_ng_template_22_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setNickName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \uC124\uC815 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.setNickName);
} }
class HomeComponent {
    constructor(authService, router, modalService) {
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.isNameExist = false;
        this.setNickName = "";
        this.matchInProgress = false;
        this.myName = 'unknown';
    }
    ngOnInit() {
        // this.socket = io('ws://172.30.1.20:9999');
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_1__["io"])('ws://catchm1nd.herokuapp.com/');
        this.socket.on('connect', () => {
            console.log('connected');
        });
        this.socket.on('lobby-msg', (msg) => {
            if (msg.type == 'createRoom') {
                console.log('createRoom', msg.data);
                this.socket.disconnect();
                this.matchInProgress = false;
                this.router.navigateByUrl(`room/${msg.data}`);
            }
            else if (msg.type == 'searchRoom') {
                console.log('searchRoom', msg.data);
                this.socket.disconnect();
                this.matchInProgress = false;
                this.router.navigateByUrl(`room/${msg.data}`);
            }
        });
        this.isNameExist = this.authService.isMemberExist();
        this.myName = this.authService.getUserFullID();
    }
    openModal(content) {
        this.nickNameRequiredModalRef = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            backdrop: 'static',
            animation: true,
        });
    }
    closeModal() {
        if (this.setNickName != "" && this.setNickName.length < 7) {
            this.authService.setNoMemberName(this.setNickName);
            this.myName = this.authService.getUserFullID();
            this.isNameExist = this.authService.isMemberExist();
            this.nickNameRequiredModalRef.close();
        }
        else {
            alert("닉네임은 6자 이하로 입력해 주세요.");
        }
    }
    makeRoom() {
        if (this.socket.connected) {
            if (this.authService.isMemberExist()) {
                this.matchInProgress = true;
                let createReqMsg = {
                    type: 'createRoom',
                    data: this.authService.getUserFullID(),
                };
                this.socket.emit('lobby-msg', createReqMsg);
            }
            else {
                this.openModal(this.nickNameRequiredModal);
            }
        }
    }
    searchRoom() {
        if (this.socket.connected) {
            if (this.authService.isMemberExist()) {
                this.matchInProgress = true;
                let searchReqMsg = {
                    type: 'searchRoom',
                    data: this.authService.getUserFullID(),
                };
                this.socket.emit('lobby-msg', searchReqMsg);
            }
            else {
                this.openModal(this.nickNameRequiredModal);
            }
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nickNameRequiredModal = _t.first);
    } }, decls: 24, vars: 6, consts: [[1, "row", 2, "margin-top", "10px"], ["class", "col-8 col-md-10  col-lg-11", 4, "ngIf"], ["class", "col-8 col-md-10 col-lg-11", 4, "ngIf"], [1, "btn", "btn-primary", "btn", "col-4", "col-md-2", "col-lg-1", 3, "click"], [1, "row", "justify-content-around", 2, "margin-top", "40px"], [1, "col-6", "col-md-4", "btn", "btn-outline-primary", "btn-lg", 3, "disabled", "click"], ["class", "spinner-border spinner-border-lg", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "row", 2, "margin-top", "40px", "margin-bottom", "40px"], ["nickNameRequiredModal", ""], [1, "col-8", "col-md-10", "col-lg-11"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-lg"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "mb-3"], ["for", "nick-name", 1, "col-form-label"], ["type", "text", "id", "nick-name", "name", "first", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_h3_1_Template, 4, 1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_h3_2_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.openModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \uB2C9\uB124\uC784 \uC124\uC815 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.makeRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_span_7_Template, 1, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \uBC29 \uB9CC\uB4E4\uAE30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.searchRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_span_10_Template, 1, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \uAC8C\uC784 \uCC3E\uAE30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\uACF5\uC9C0\uC0AC\uD56D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \uD14C\uC2A4\uD2B8 \uBC84\uC804\uC774\uB77C\uC11C \uC544\uC9C1 \uBD88\uC548\uC815\uD55C \uBD80\uBD84\uC774 \uB9CE\uC2B5\uB2C8\uB2E4\uD83D\uDE05 \uBC84\uADF8 \uB9AC\uD3EC\uD2B8\uB294 \uC5D0\uD0C0 \uB313\uAE00\uC774\uB098 \uCABD\uC9C0 \uC774\uC6A9\uD574\uC8FC\uC138\uC694 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \uCC44\uD305\uCC3D\uC5D0\uC11C /add \uC6D0\uD558\uB294\uB2E8\uC5B4 \uC785\uB825\uD558\uBA74 \uB2E8\uC5B4\uAC00 \uC77C\uC2DC\uC801\uC73C\uB85C \uCD94\uAC00\uB429\uB2C8\uB2E4. (\uC601\uAD6C\uC801\uC73C\uB85C \uCD94\uAC00\uB418\uC9C4 \uC54A\uC9C0\uB9CC \uB9CE\uC774 \uCD94\uAC00\uB41C \uB2E8\uC5B4 \uC21C\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8 \uD560 \uC608\uC815\uC785\uB2C8\uB2E4.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \"\uBC29 \uAC80\uC0C9 \uD5C8\uC6A9\"\uC744 \uCCB4\uD06C \uD574\uC81C\uD558\uBA74 \uB85C\uBE44\uC5D0\uC11C \uAC8C\uC784 \uCC3E\uAE30\uB97C \uD560\uB54C \uAC80\uC0C9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. (\uB9C1\uD06C\uB85C\uB294 \uC811\uC18D\uAC00\uB2A5\uD569\uB2C8\uB2E4.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_ng_template_22_Template, 12, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNameExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNameExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.matchInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matchInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.matchInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matchInProgress);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["ul[_ngcontent-%COMP%]{\r\n    padding-left: 30px;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxubGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, { nickNameRequiredModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nickNameRequiredModal']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bf6M":
/*!*******************************!*\
  !*** ./src/app/interfaces.ts ***!
  \*******************************/
/*! exports provided: StateType, COMMON_KEY, User, Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateType", function() { return StateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_KEY", function() { return COMMON_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
var StateType;
(function (StateType) {
    StateType["ready"] = "ready";
    StateType["prepare"] = "prepare";
    StateType["guess"] = "guess";
    StateType["result"] = "result";
})(StateType || (StateType = {}));
var COMMON_KEY;
(function (COMMON_KEY) {
    COMMON_KEY["TIMER"] = "timer";
})(COMMON_KEY || (COMMON_KEY = {}));
class User {
    constructor(name) {
        this.score = null;
        this.name = name;
        this.isParticipant = false;
    }
    getName() {
        return this.name;
    }
    inflate(userLike) {
        this.name = userLike.name;
        this.isParticipant = userLike.isParticipant;
        if (userLike.score) {
            this.score = new Score().inflate(userLike.score);
        }
        return this;
    }
}
class Score {
    constructor() {
        this.turnScore = 0;
        this.score = 0;
        this.correct = false;
        this.turn = false;
    }
    inflate(scoreLike) {
        this.score = scoreLike.score;
        this.correct = scoreLike.correct;
        this.turn = scoreLike.turn;
        //TODO turnScore는?
        return this;
    }
    matched(score) {
        this.correct = true;
        this.score += score;
        this.turnScore = score;
    }
    turnClear() {
        this.turnScore = 0;
        this.correct = false;
    }
}


/***/ }),

/***/ "DNdT":
/*!*************************!*\
  !*** ./src/app/draw.ts ***!
  \*************************/
/*! exports provided: Draw, ModeType, CanvasController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeType", function() { return ModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasController", function() { return CanvasController; });
class Draw {
}
var ModeType;
(function (ModeType) {
    ModeType["PEN"] = "pen";
    ModeType["ERASE"] = "erase";
})(ModeType || (ModeType = {}));
class DrawMode {
    constructor(controller) {
        this.controller = controller;
        this.ctx = controller.getCtx();
    }
}
class Pen extends DrawMode {
    constructor() {
        super(...arguments);
        this.Type = ModeType.PEN;
    }
    draw(x, y) {
        this.ctx.beginPath();
        this.ctx.lineWidth = this.controller.getStrokeWidth();
        this.ctx.strokeStyle = this.controller.getStrokeColor();
        this.ctx.lineCap = 'round';
        if (this.controller.getPrevX() > -1 && this.controller.getPrevY() > -1) {
            this.ctx.moveTo(this.controller.getPrevX(), this.controller.getPrevY());
        }
        else {
            this.ctx.moveTo(x, y);
        }
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.controller.setPrevPos(x, y);
    }
}
class Erase extends DrawMode {
    constructor() {
        super(...arguments);
        this.Type = ModeType.ERASE;
    }
    draw(x, y) {
        this.ctx.beginPath();
        this.ctx.lineWidth = this.controller.getStrokeWidth();
        this.ctx.strokeStyle = 'white';
        this.ctx.lineCap = 'round';
        if (this.controller.getPrevX() > -1 && this.controller.getPrevY() > -1) {
            this.ctx.moveTo(this.controller.getPrevX(), this.controller.getPrevY());
        }
        else {
            this.ctx.moveTo(x, y);
        }
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.controller.setPrevPos(x, y);
    }
}
class CanvasController {
    constructor(canvas) {
        this.prevX = -1;
        this.prevY = -1;
        this.strokeWidth = 1;
        this.strokeColor = 'black';
        this.restoreWidthRatio = 1;
        this.devicePixelRatio = 1;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.init();
        window.addEventListener('resize', this.resizeThrottler.bind(this), false);
        this.pen = new Pen(this);
        this.erase = new Erase(this);
        this.mode = this.pen;
    }
    initDrawingOptions() {
        this.setStrokeColor('black');
        this.setStrokeWidth(3);
        this.setDrawMode(ModeType.PEN);
    }
    getStrokeWidth() {
        return this.strokeWidth;
    }
    getStrokeColor() {
        return this.strokeColor;
    }
    setStrokeWidth(width) {
        this.strokeWidth = width * this.devicePixelRatio;
    }
    setStrokeColor(color) {
        this.strokeColor = color;
    }
    msgHandler(msg) {
        // Turn 유저로부터 브로드 캐스팅 된 Draw Msg 를 기반으로 캔버스를 재현함
        if (msg.type == 'draw') {
            console.log(msg.data);
            this.draw(msg.data.NormX, msg.data.NormY);
        }
        else if (msg.type == 'pen_up') {
            this.penUp();
        }
        else if (msg.type == 'mode change') {
            this.setDrawMode(msg.data);
        }
        else if (msg.type == 'width change') {
            this.setStrokeWidth(msg.data);
        }
        else if (msg.type == 'color change') {
            this.setStrokeColor(msg.data);
        }
        else if (msg.type == 'canvas clear') {
            this.clear();
        }
    }
    setDrawMode(mode) {
        switch (mode) {
            case ModeType.PEN:
                this.mode = this.pen;
                break;
            case ModeType.ERASE:
                this.mode = this.erase;
                break;
            default:
                break;
        }
    }
    getPrevX() {
        return this.prevX;
    }
    getPrevY() {
        return this.prevY;
    }
    getCtx() {
        return this.ctx;
    }
    setPrevPos(X, Y) {
        this.prevX = X;
        this.prevY = Y;
    }
    static createInstance(ctx) {
        this.instance = new CanvasController(ctx);
    }
    static getInstance() {
        if (CanvasController.instance) {
            return CanvasController.instance;
        }
        else {
            console.log('CanvasController not found');
            return null;
        }
    }
    draw(normalizedX, normalizedY) {
        this.mode.draw(normalizedX * this.canvas.width, normalizedY * this.canvas.height);
    }
    penUp() {
        this.prevY = -1;
        this.prevX = -1;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.prevY = -1;
        this.prevX = -1;
    }
    setCanvasSize() {
        const RATIO_16_10 = 0.625;
        const { width: hidefCanvasWidth, height: hidefCanvasHeight, } = this.canvas.getBoundingClientRect();
        const hidefCanvasCssWidth = hidefCanvasWidth;
        const hidefCanvasCssHeight = hidefCanvasWidth * RATIO_16_10;
        // const hidefCanvasCssHeight = hidefCanvasHeight;
        this.canvas.setAttribute('width', `${hidefCanvasWidth * this.devicePixelRatio}`);
        this.canvas.setAttribute('height', `${hidefCanvasWidth * this.devicePixelRatio * RATIO_16_10}`
        // `${hidefCanvasHeight * this.devicePixelRatio * 0.625}`
        );
        this.canvas.style.width = `${hidefCanvasCssWidth}px`;
        this.canvas.style.height = `${hidefCanvasCssHeight}px`;
    }
    init() {
        if (window.devicePixelRatio) {
            this.devicePixelRatio = window.devicePixelRatio;
        }
        this.setCanvasSize();
        this.prevWidth = this.canvas.width;
    }
    resizeThrottler() {
        if (!this.resizeTimeout) {
            this.resizeTimeout = setTimeout(function () {
                this.resizeTimeout = null;
                this.actualResizeHandler();
            }.bind(this), 66);
        }
    }
    actualResizeHandler() {
        //리사이즈 될 때 기존 캔버스 그림 저장후 변화된 스케일에 맞춰 복구함
        this.canvas.style.width = '100%';
        let saved = new Image();
        saved.src = this.canvas.toDataURL();
        this.setCanvasSize();
        if (this.prevWidth != this.canvas.width) {
            //실제 캔버스의 width가 변할때만 복구
            this.restoreWidthRatio = this.canvas.width / this.prevWidth;
            this.prevWidth = this.canvas.width;
        }
        saved.onload = function () {
            //모두지우고
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //기존의 그림을 바뀐 브라우저 사이즈의 스케일로 그려줌
            this.ctx.scale(this.restoreWidthRatio, this.restoreWidthRatio);
            this.restoreWidthRatio = 1;
            this.ctx.drawImage(saved, 0, 0);
            //스케일 다시 1로 복구
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }.bind(this);
    }
}


/***/ }),

/***/ "GCPp":
/*!*******************************************!*\
  !*** ./src/app/controller/state/Guess.ts ***!
  \*******************************************/
/*! exports provided: Guess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guess", function() { return Guess; });
/* harmony import */ var src_app_model_user_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/user-container */ "GxPD");
/* harmony import */ var src_app_model_chat_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/chat-container */ "6mCX");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State */ "yyMF");
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces */ "Bf6M");




var KEY;
(function (KEY) {
    KEY["COMMITTED_WORD"] = "committed_word";
    KEY["USER_HIT"] = "user_hit";
})(KEY || (KEY = {}));
class Guess extends _State__WEBPACK_IMPORTED_MODULE_2__["State"] {
    // 1. Prepare에서 TimeOut될 때
    // 2. Turn User가 단어를 선택했을 때.
    onMessage(msg) {
        switch (msg.key) {
            case KEY.COMMITTED_WORD:
                let committedWord = {
                    word: msg.value,
                };
                this.controller.gameModel.setWord(committedWord.word);
                break;
            case KEY.USER_HIT:
                let hit = msg.value;
                src_app_model_user_container__WEBPACK_IMPORTED_MODULE_0__["UserContainer"].getInstance().setCorrect(hit.user, hit.score);
                src_app_model_chat_container__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance().push(src_app_model_chat_container__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg(hit.user + '가 맞췄습니다.'));
                break;
            case src_app_interfaces__WEBPACK_IMPORTED_MODULE_3__["COMMON_KEY"].TIMER:
                this.controller.gameModel.setTimer(msg.value);
                break;
            default:
                break;
        }
    }
}


/***/ }),

/***/ "GxPD":
/*!*****************************************!*\
  !*** ./src/app/model/user-container.ts ***!
  \*****************************************/
/*! exports provided: UserContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContainer", function() { return UserContainer; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "Bf6M");

class UserContainer {
    constructor() {
        this.init();
    }
    init() {
        this.NpUsersList = new Array();
        this.PUsersList = new Array();
        this.NpUsers = new Map();
        this.PUsers = new Map();
    }
    static getInstance() {
        if (!UserContainer.instance) {
            this.instance = new UserContainer();
        }
        return this.instance;
    }
    changeTurn(username) {
        //TODO 이게 정말 필요한지?
        this.PUsers.forEach((user) => {
            user.score.turn = user.getName() == username;
            //턴 유저만 true 할당
        });
    }
    // 새롭게 방에 참가할때 받는 유저정보
    restoreUsers(users) {
        for (let user of users) {
            if (user.isParticipant) {
                this.PUsers.set(user.name, new _interfaces__WEBPACK_IMPORTED_MODULE_0__["User"](user.name).inflate(user));
            }
            else {
                this.NpUsers.set(user.name, new _interfaces__WEBPACK_IMPORTED_MODULE_0__["User"](user.name).inflate(user));
            }
        }
        this.updateList();
        console.log('restore ', 'setUsers : ', this.NpUsers);
    }
    //새로운 유저가 들어올 때
    add(user) {
        this.NpUsers.set(user.getName(), new _interfaces__WEBPACK_IMPORTED_MODULE_0__["User"](user.name));
        this.updateList();
    }
    sortParticipants() { }
    setCorrect(username, score) {
        // 맞췄을때
        this.PUsers.forEach((user) => {
            if (user.getName() === username && !user.score.correct) {
                user.score.matched(score);
                console.log('score : ', user.score.score);
            }
        });
    }
    resetCorrect() {
        // 턴이 변경될때
        for (let user of this.getParticipants()) {
            user.score.turnClear();
        }
    }
    updateList() {
        this.PUsersList = new Array();
        this.NpUsersList = new Array();
        this.PUsers.forEach((user) => {
            this.PUsersList.push(user);
        });
        this.NpUsers.forEach((user) => {
            this.NpUsersList.push(user);
        });
    }
    resetParticipants() {
        //게임 끝나고 리셋
        for (let userName of this.PUsers.keys()) {
            let user = this.PUsers.get(userName);
            user.isParticipant = false;
            user.score = null;
            this.NpUsers.set(userName, user);
            this.PUsers.delete(userName);
        }
        this.updateList();
    }
    setParticipants(participants) {
        // 1. 게임 시작될 때 GameModel.startGame()에서 호출
        // 2. 게임 진행중인 방에 새로 유저가 들어왔을때 romm component에서 호출
        for (let userName of participants) {
            let target = this.NpUsers.get(userName);
            target.isParticipant = true;
            target.score = new _interfaces__WEBPACK_IMPORTED_MODULE_0__["Score"]();
            this.PUsers.set(userName, target);
            this.NpUsers.delete(userName);
        }
        this.updateList();
    }
    leaveUser(username) {
        //유저 나갈때
        //NpUsers에서 검색
        for (let userName of this.NpUsers.keys()) {
            let user = this.NpUsers.get(userName);
            if (user && user.getName() === username) {
                this.NpUsers.delete(username);
            }
        }
        //PUsers에서 검색
        for (let userName of this.PUsers.keys()) {
            let user = this.PUsers.get(userName);
            if (user && user.getName() === username) {
                this.PUsers.delete(username);
            }
        }
        this.updateList();
    }
    syncScores(hits) {
        hits.forEach(hit => {
            let target = this.PUsers.get(hit.user);
            if (target.score.score != hit.score) {
                console.log("점수 싱크가 맞지 않습니다.");
                target.score.score = hit.score;
            }
        });
    }
    getParticipants() {
        return this.PUsersList;
    }
    getNotParticipants() {
        return this.NpUsersList;
    }
}


/***/ }),

/***/ "IKkj":
/*!*********************************************!*\
  !*** ./src/app/controller/state/Prepare.ts ***!
  \*********************************************/
/*! exports provided: Prepare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prepare", function() { return Prepare; });
/* harmony import */ var src_app_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/draw */ "DNdT");
/* harmony import */ var src_app_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces */ "Bf6M");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State */ "yyMF");



var KEY;
(function (KEY) {
    KEY["START"] = "start";
    KEY["NEW_TURN"] = "new_turn";
})(KEY || (KEY = {}));
class Prepare extends _State__WEBPACK_IMPORTED_MODULE_2__["State"] {
    // 1. Host가 게임을 시작시켰을 때.
    // 2. 새로운 Turn, Round가 시작될 때
    onMessage(msg) {
        switch (msg.key) {
            case KEY.START:
                //TODO 한 게임당 최초 한번만 호출됨을 보장할 것
                let startData = {
                    participants: msg.value,
                };
                this.controller.gameModel.startGame(startData.participants);
                break;
            case KEY.NEW_TURN:
                let newTurnData = msg.value;
                this.controller.gameModel.setRound(newTurnData.round);
                this.controller.gameModel.setTurn(newTurnData.turn);
                this.controller.gameModel.setWords(newTurnData.words);
                src_app_draw__WEBPACK_IMPORTED_MODULE_0__["CanvasController"].getInstance().initDrawingOptions();
                break;
            case src_app_interfaces__WEBPACK_IMPORTED_MODULE_1__["COMMON_KEY"].TIMER:
                this.controller.gameModel.setTimer(msg.value);
                break;
            default:
                break;
        }
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'catchmind';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "container"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [1, "container", 2, "background-color", "snow"], [2, "margin-left", "10px", "margin-right", "10px", "padding-top", "10px"], [1, "row"], [1, "col-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Catch M!nd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Test Ver 1.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WUx6":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/*! exports provided: BROWSER_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_STORAGE", function() { return BROWSER_STORAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage,
});


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room/room.component */ "oJ+z");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvas/canvas.component */ "bTD/");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");



// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';












// const config: SocketIoConfig = { url: 'http://localhost:9999', options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                },
                {
                    path: 'room/:roomID',
                    component: _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"],
                },
            ]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        {
                            path: '',
                            component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        },
                        {
                            path: 'room/:roomID',
                            component: _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"],
                        },
                    ]),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bTD/":
/*!********************************************!*\
  !*** ./src/app/canvas/canvas.component.ts ***!
  \********************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../draw */ "DNdT");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function CanvasComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hit_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", hit_r6.user, " : +", hit_r6.score, "");
} }
function CanvasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CanvasComponent_div_2_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@overlayTrigger", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\uC81C\uC2DC\uC5B4\uB294 ", ctx_r0.gameModel.word, " \uC774\uC5C8\uC2B5\uB2C8\uB2E4!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gameModel.turnResult);
} }
function CanvasComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uC138\uAC00\uC9C0 \uC81C\uC2DC\uC5B4\uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@overlayTrigger", undefined);
} }
function CanvasComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@overlayTrigger", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.gameModel.turn, "\uC758 \uCC28\uB840\uC785\uB2C8\uB2E4.");
} }
function CanvasComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.selectPen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD39C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectErase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uC9C0\uC6B0\uAC1C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectStrokeSize("3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uC587\uAC8C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.selectStrokeSize("5"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\uBCF4\uD1B5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.selectStrokeSize("7"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\uAD75\uAC8C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectColor("black"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.selectColor("red"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectColor("green"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Green");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_input_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.selectColor("blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.clearCanvas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\uBAA8\uB450 \uC9C0\uC6B0\uAE30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CanvasComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CanvasComponent_div_6_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.guess = $event; })("keydown.enter", function CanvasComponent_div_6_Template_input_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.checkGuess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.checkGuess(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Guess ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.guess);
} }
class Handler {
    constructor(component) {
        this.component = component;
    }
    isTimeToHandle() {
        return (this.component.mousedown &&
            this.component.gameModel.myTurn &&
            this.component.gameModel.isGuess);
    }
}
class MouseHandler extends Handler {
    handle(e) {
        var drawData = { NormX: 0, NormY: 0 };
        var viewportOffset = this.component.canvas.getBoundingClientRect();
        //(this.component.canvas.width / window.devicePixelRatio)
        drawData = {
            NormX: e.offsetX / viewportOffset.width,
            NormY: e.offsetY / viewportOffset.height,
        };
        return drawData;
    }
}
class TouchHandler extends Handler {
    handle(e) {
        var drawData = { NormX: 0, NormY: 0 };
        var viewportOffset = this.component.canvas.getBoundingClientRect();
        drawData = {
            NormX: (e.touches[0].clientX - viewportOffset.left) / viewportOffset.width,
            NormY: (e.touches[0].clientY - viewportOffset.top) / viewportOffset.height,
        };
        return drawData;
    }
}
class DefaultHandler extends Handler {
    handle(e) {
        if (e instanceof MouseEvent) {
            this.component.setHandler(this.component.mouseHandler);
        }
        else if (e instanceof TouchEvent) {
            this.component.setHandler(this.component.touchHandler);
        }
        return this.component.handler.handle(e);
    }
}
class CanvasComponent {
    constructor() {
        this.mousedown = false;
        this.defaultHandler = new DefaultHandler(this);
        this.touchHandler = new TouchHandler(this);
        this.mouseHandler = new MouseHandler(this);
        this.handler = this.defaultHandler;
    }
    setHandler(handler) {
        this.handler = handler;
    }
    checkGuess() {
        if (this.guess !== '') {
            this.socket.emit('game-msg', this.guess);
            this.inputElement = (document.getElementById('guess-input'));
            this.inputElement.value = '';
            this.guess = '';
        }
        else {
            alert('단어를 입력해 주세요.');
        }
    }
    clearCanvas() {
        _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().clear();
        let msg = {
            type: 'canvas clear',
            data: null,
        };
        this.socket.emit('draw cmd', msg);
    }
    selectPen() {
        console.log('selectPen');
        this.selectMode(_draw__WEBPACK_IMPORTED_MODULE_1__["ModeType"].PEN);
    }
    selectErase() {
        console.log('selectErase');
        this.selectMode(_draw__WEBPACK_IMPORTED_MODULE_1__["ModeType"].ERASE);
    }
    selectMode(mode) {
        _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().setDrawMode(mode);
        let msg = {
            type: 'mode change',
            data: mode,
        };
        this.socket.emit('draw cmd', msg);
    }
    selectStrokeSize(width) {
        _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().setStrokeWidth(parseInt(width));
        let msg = {
            type: 'width change',
            data: width,
        };
        this.socket.emit('draw cmd', msg);
    }
    selectColor(color) {
        _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().setStrokeColor(color);
        let msg = {
            type: 'color change',
            data: color,
        };
        this.socket.emit('draw cmd', msg);
    }
    penUp() {
        if (this.mousedown && this.gameModel.myTurn && this.gameModel.isGuess) {
            this.socket.emit('draw cmd', { type: 'pen_up' });
        }
    }
    handleMouseEnter(e) {
        if (this.handler.isTimeToHandle()) {
            let drawData = this.handler.handle(e);
            _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().draw(drawData.NormX, drawData.NormY);
            let msg = {
                type: 'draw',
                data: drawData,
            };
            this.socket.emit('draw cmd', msg);
        }
    }
    ngOnInit() {
        this.canvas = document.getElementById('canvas');
        _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].createInstance(this.canvas);
        this.canvas.addEventListener('mousemove', function (e) {
            this.handleMouseEnter(e);
        }.bind(this), false);
        this.canvas.addEventListener('mousedown', function (e) {
            this.mousedown = true;
        }.bind(this), false);
        this.canvas.addEventListener('mouseup', function (e) {
            this.penUp();
            this.mousedown = false;
            _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().penUp();
        }.bind(this), false);
        this.canvas.addEventListener('touchstart', function (e) {
            e.preventDefault();
            console.log(e);
            this.mousedown = true;
        }.bind(this), false);
        this.canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            this.handleMouseEnter(e);
        }.bind(this), false);
        this.canvas.addEventListener('touchend', function (e) {
            e.preventDefault();
            this.penUp();
            this.mousedown = false;
            if (this)
                _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().penUp();
        }.bind(this), false);
    }
}
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(); };
CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasComponent, selectors: [["app-canvas"]], inputs: { gameModel: "gameModel", socket: "socket" }, decls: 7, vars: 5, consts: [["id", "canvas-wrapper"], ["id", "canvas", 2, "width", "100%", "border", "1px solid lightgray"], ["class", "overlay", 4, "ngIf"], [4, "ngIf"], ["class", "input-group", 4, "ngIf"], [1, "overlay"], [1, "text"], [4, "ngFor", "ngForOf"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["type", "radio", "name", "btnradio", "id", "btnradio1", "autocomplete", "off", "checked", "", 1, "btn-check", 3, "click"], ["for", "btnradio1", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "btnradio", "id", "btnradio2", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "btnradio2", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "stroke", "id", "stroke1", "autocomplete", "off", "checked", "", 1, "btn-check", 3, "click"], ["for", "stroke1", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "stroke", "id", "stroke2", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "stroke2", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "stroke", "id", "stroke3", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "stroke3", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "color", "id", "color1", "autocomplete", "off", "checked", "", 1, "btn-check", 3, "click"], ["for", "color1", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "color", "id", "color2", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "color2", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "color", "id", "color3", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "color3", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "color", "id", "color4", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "color4", 1, "btn", "btn-outline-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "input-group"], ["type", "text", "placeholder", "Endter Guess!", "aria-describedby", "basic-addon2", "id", "guess-input", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CanvasComponent_div_2_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CanvasComponent_div_3_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CanvasComponent_div_4_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CanvasComponent_div_5_Template, 33, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CanvasComponent_div_6_Template, 5, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameModel.isResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameModel.myTurn && ctx.gameModel.isPrepare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameModel.myTurn && ctx.gameModel.isPrepare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameModel.myTurn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameModel.myTurn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["#canvas-wrapper[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n.overlay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  color: white;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  z-index: 2;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FudmFzLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm92ZXJsYXkgLnRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-canvas',
                templateUrl: './canvas.component.html',
                styleUrls: ['./canvas.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayTrigger', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))]),
                    ]),
                ],
            }]
    }], function () { return []; }, { gameModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], socket: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cLFY":
/*!***********************************************!*\
  !*** ./src/app/controller/game-controller.ts ***!
  \***********************************************/
/*! exports provided: GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameController", function() { return GameController; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "Bf6M");
/* harmony import */ var _model_game_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game-model */ "/171");
/* harmony import */ var _state_Ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/Ready */ "0gKg");
/* harmony import */ var _state_Prepare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/Prepare */ "IKkj");
/* harmony import */ var _state_Guess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/Guess */ "GCPp");
/* harmony import */ var _state_Result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/Result */ "0tq+");






const log = (msg) => {
    console.log('game-controller', msg);
};
class GameController {
    constructor(mySelf) {
        this.gameModel = new _model_game_model__WEBPACK_IMPORTED_MODULE_1__["GameModel"](mySelf);
        this.ready = new _state_Ready__WEBPACK_IMPORTED_MODULE_2__["Ready"](this);
        this.prepare = new _state_Prepare__WEBPACK_IMPORTED_MODULE_3__["Prepare"](this);
        this.guess = new _state_Guess__WEBPACK_IMPORTED_MODULE_4__["Guess"](this);
        this.result = new _state_Result__WEBPACK_IMPORTED_MODULE_5__["Result"](this);
        //최초 State는 Ready
        this.state = this.ready;
    }
    init() {
        this.state = this.ready;
    }
    getModel() {
        return this.gameModel;
    }
    static createInstance(mySelf) {
        if (!this.instance) {
            this.instance = new GameController(mySelf);
        }
        return this.instance;
    }
    static getInstance() {
        if (GameController.instance) {
            return GameController.instance;
        }
        else {
            console.log('game instance not found');
            return null;
        }
    }
    transition(dest) {
        log('Transition : ' + dest);
        if (dest == _interfaces__WEBPACK_IMPORTED_MODULE_0__["StateType"].ready) {
            this.gameModel.setReady();
            this.state = this.ready;
        }
        else if (dest == _interfaces__WEBPACK_IMPORTED_MODULE_0__["StateType"].prepare) {
            this.gameModel.setPrepare();
            this.state = this.prepare;
        }
        else if (dest == _interfaces__WEBPACK_IMPORTED_MODULE_0__["StateType"].guess) {
            this.gameModel.setGuess();
            this.state = this.guess;
        }
        else if (dest == _interfaces__WEBPACK_IMPORTED_MODULE_0__["StateType"].result) {
            this.gameModel.setResult();
            this.state = this.result;
        }
        else {
            log('잘못된 StateType 입니다.');
        }
    }
    msgHandler(msg) {
        this.state.onMessage(msg);
    }
}


/***/ }),

/***/ "oJ+z":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../draw */ "DNdT");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller_game_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/game-controller */ "cLFY");
/* harmony import */ var _model_user_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user-container */ "GxPD");
/* harmony import */ var _model_chat_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/chat-container */ "6mCX");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces */ "Bf6M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../authentication.service */ "18Le");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../canvas/canvas.component */ "bTD/");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../chat/chat.component */ "+XlM");
















const _c0 = ["nickNameRequiredModal"];
function RoomComponent_h4_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u23F3 ", ctx_r0.gameModel.remainTime, "");
} }
function RoomComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_9_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setRoomSearchable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \uBC29 \uAC80\uC0C9 \uD5C8\uC6A9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uB77C\uC6B4\uB4DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_9_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setRound = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uC81C\uD55C\uC2DC\uAC04");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_div_9_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setTimeout = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_9_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.gameStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \uAC8C\uC784 \uC2DC\uC791 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.checkboxGroupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.setRound);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.setTimeout);
} }
function RoomComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.selectWord("0"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.selectWord("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_15_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectWord("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.gameModel.words[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.gameModel.words[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.gameModel.words[2], " ");
} }
function RoomComponent_h3_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.gameModel.word, " ");
} }
function RoomComponent_h2_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.gameModel.wordSecret, " ");
} }
function RoomComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uB2C9\uB124\uC784\uC744 \uC124\uC815\uD574 \uC8FC\uC138\uC694!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uB2C9\uB124\uC784 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_ng_template_21_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.setNickName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_ng_template_21_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \uC124\uC815 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.setNickName);
} }
class RoomComponent {
    constructor(route, router, authService, modalService, formBuilder) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.setNickName = "";
        this.myName = 'unknown';
        this.isHost = false;
        // private mySelf: User;
        this.ROOM_ID = '7777';
        this.ROOM_ID = route.snapshot.params['roomID'];
        this.mySelf = new _interfaces__WEBPACK_IMPORTED_MODULE_6__["User"]('unknown-user');
        this.gameController = _controller_game_controller__WEBPACK_IMPORTED_MODULE_3__["GameController"].createInstance(this.mySelf);
        this.gameModel = this.gameController.getModel();
        this.chatList = _model_chat_container__WEBPACK_IMPORTED_MODULE_5__["ChatContainer"].getInstance();
        this.users = _model_user_container__WEBPACK_IMPORTED_MODULE_4__["UserContainer"].getInstance();
    }
    setMySelf(user) {
        this.mySelf = user;
        this.myName = this.mySelf.getName();
        this.connect();
    }
    ngAfterViewInit() {
        if (this.authService.isMemberExist()) {
            this.setMySelf(new _interfaces__WEBPACK_IMPORTED_MODULE_6__["User"](this.authService.getUserFullID()));
        }
        else {
            this.openModal(this.nickNameRequiredModal);
        }
    }
    ngOnDestroy() {
        if (this.socket.connected) {
            this.socket.disconnect();
        }
    }
    join() {
        // Room에 접속시도
        if (this.gameModel.mySelf.getName() !== 'unknown-user') {
            let joinData = {
                roomID: this.ROOM_ID,
                user: this.gameModel.mySelf,
            };
            this.socket.emit('join', joinData);
        }
        else {
            alert('유저 이름을 설정해주세요.');
        }
    }
    openModal(content) {
        this.nickNameRequiredModalRef = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            backdrop: 'static',
            animation: true,
        });
    }
    closeModal() {
        if (this.setNickName != '' && this.setNickName.length < 7) {
            this.authService.setNoMemberName(this.setNickName);
            this.setMySelf(new _interfaces__WEBPACK_IMPORTED_MODULE_6__["User"](this.authService.getUserFullID()));
            this.nickNameRequiredModalRef.close();
        }
        else {
            alert('닉네임은 6자 이하로 입력해 주세요.');
        }
    }
    selectWord(idx) {
        if (this.gameModel.myTurn && parseInt(idx) >= 0 && parseInt(idx) < 3) {
            this.socket.emit('game-msg', idx); //0, 1, 2 사이 인덱스
        }
    }
    gameStart() {
        if (this.setRound > 0 &&
            this.setRound < 5 &&
            this.setTimeout > 5 &&
            this.setTimeout < 180) {
            let gameSetting = {
                type: 'start',
                data: {
                    round: this.setRound,
                    timeout: this.setTimeout,
                },
            };
            if (!this.gameModel.isInGame) {
                this.socket.emit('game-cmd', gameSetting);
            }
        }
        else {
            alert('라운드는 1~4, 제한시간은 6~179초 이내로 입력해주세요');
        }
    }
    initInstances(reason) {
        if (reason) {
            //console.log('disconnected');
            //console.log(reason);
        }
        this.gameController.init();
        this.gameModel.init(this.mySelf);
        this.chatList.init();
        this.users.init();
    }
    connect() {
        if (this.socket && this.socket.connected) {
            this.socket.disconnect();
        }
        // this.socket = io('ws://172.30.1.20:9999');
        // this.socket = io('ws://localhost:9999');
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])('ws://catchm1nd.herokuapp.com/');
        this.initInstances(null);
        //console.log(this.socket);
        this.socket.on('connect', () => {
            //console.log('connect');
            this.join();
            this.socket.on('draw cmd', function (msg) {
                if (!this.gameModel.myTurn) {
                    _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().msgHandler(msg);
                }
            }.bind(this));
            // this.socket.on('disconnect', this.initInstances);
            this.socket.on('sys-msg', (msg) => {
                // 1. 호스트 변경
                if (msg.type == 'host-changed') {
                    this.hostUser = msg.data;
                    this.isHost = this.hostUser == this.myName;
                    this.chatList.push(_model_chat_container__WEBPACK_IMPORTED_MODULE_5__["Chat"].SysMsg('방의 호스트가 ' + msg.data + '로 변경되었습니다.'));
                }
                else if (msg.type == 'user-welcome') {
                    // 새로온 유저 - 기존 게임 State 복원
                    //TODO 그림이미지도 복원받기
                    // msg.data { host: string, entireUsers: user[]}
                    //console.log('restore', 'sys-msg : user-welcome received!!');
                    //console.log('restore', msg.data);
                    this.hostUser = msg.data.host;
                    this.isHost = this.hostUser == this.myName;
                    this.users.restoreUsers(msg.data.users);
                }
                else if (msg.type == 'user-join') {
                    // 유저 접속
                    //console.log('userjoin' + msg.data);
                    if (msg.data != this.gameModel.mySelf.getName()) {
                        this.users.add(new _interfaces__WEBPACK_IMPORTED_MODULE_6__["User"](msg.data));
                    }
                    this.chatList.push(_model_chat_container__WEBPACK_IMPORTED_MODULE_5__["Chat"].SysMsg(msg.data + '가 입장했습니다.'));
                }
                else if (msg.type == 'user-leave') {
                    // 유저 msg.data가 나감
                    // 삭제
                    //console.log('userleave ' + msg.data);
                    this.users.leaveUser(msg.data);
                    this.chatList.push(_model_chat_container__WEBPACK_IMPORTED_MODULE_5__["Chat"].SysMsg(msg.data + '가 게임을 떠났습니다.'));
                }
                else if (msg.type == 'room-not-found') {
                    //존재하지 않는 방에 입장한 경우
                    alert('존재하지 않는 방입니다.');
                    this.router.navigateByUrl(`/`);
                }
                else if (msg.type == 'kick') {
                    alert('추방 당했습니다.');
                    this.router.navigateByUrl(`/`);
                }
            });
            this.socket.on('chat-msg', (msg) => {
                this.chatList.push(_model_chat_container__WEBPACK_IMPORTED_MODULE_5__["Chat"].UserMsg(msg.from, msg.data));
            });
            this.socket.on('game-msg', function (msg) {
                // //console.log(msg);
                this.gameController.msgHandler(msg);
            }.bind(this));
            this.socket.on('game-sync', function (msg) {
                this.gameController.transition(msg);
            }.bind(this));
        });
    }
    ngOnInit() {
        this.initInstances(null);
        this.checkboxGroupForm = this.formBuilder.group({
            publicRoom: true,
        });
    }
    setRoomSearchable() {
        ////console.log(this.checkboxGroupForm.value.publicRoom);
        this.socket.emit('searchOpt', !this.checkboxGroupForm.value.publicRoom);
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["ng-component"]], viewQuery: function RoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nickNameRequiredModal = _t.first);
    } }, inputs: { nickName: "nickName" }, decls: 25, vars: 14, consts: [[1, "row", "justify-content-between"], [1, "col-9", "pad"], [1, "badge", "bg-dark"], [1, "badge", "bg-secondary", 2, "margin-left", "10px"], [1, "col-auto"], [4, "ngIf"], ["id", "host-section", "class", "pad", "style", "margin-bottom: 7px; margin-top: 7px", 4, "ngIf"], [1, "row"], [1, "col-12", "col-md-12", "col-lg-2", "pad", 2, "margin-top", "7px"], [2, "padding", "0px", "background-color", "whitesmoke", 3, "users", "hostUser", "mySelf"], [1, "col-12", "col-md-8", "col-lg-7", "pad", 2, "height", "100%", "margin-top", "7px"], ["id", "word-section", 1, "row", "justify-content-center"], ["id", "word-select", "class", "col-auto", "style", "padding-top: 7px", 4, "ngIf"], ["class", "col-auto", "style", "padding-top: 7px", 4, "ngIf"], [3, "gameModel", "socket"], [1, "col-12", "col-md-4", "col-lg-3", "pad", 2, "margin-top", "7px"], [3, "chatContainer", "socket"], ["nickNameRequiredModal", ""], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["id", "host-section", 1, "pad", 2, "margin-bottom", "7px", "margin-top", "7px"], [1, "row", "g-2", "justify-content-end", "align-items-center", 2, "border", "1px solid lightgray", "background-color", "whitesmoke", "padding", "5px"], ["ngbButtonLabel", "", 1, "form-check-label", "col-auto", 2, "margin", "0px", 3, "formGroup"], ["type", "checkbox", "formControlName", "publicRoom", "ngbButton", "", 1, "form-check-input", 3, "click"], ["for", "game-round", 1, "col-auto"], ["name", "game-round", "type", "text", "id", "game-round", "value", "2", 1, "form-control", "btn-sm", "col-4", "col-md-1", 3, "ngModel", "ngModelChange"], ["for", "game-timeout", 1, "col-auto"], ["name", "game-timeout", "type", "text", "id", "game-timeout", "value", "20", "placeholder", "\uCD08 \uB2E8\uC704\uB85C \uC785\uB825", 1, "form-control", "btn-sm", "col-4", "col-md-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "col-auto", 2, "margin-left", "10px", 3, "click"], ["id", "word-select", 1, "col-auto", 2, "padding-top", "7px"], ["role", "group", "aria-label", "Basic outlined example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "col-auto", 2, "padding-top", "7px"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "mb-3"], ["for", "nick-name", 1, "col-form-label"], ["type", "text", "id", "nick-name", "name", "first", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomComponent_h4_8_Template, 2, 1, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomComponent_div_9_Template, 13, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-sidebar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoomComponent_div_15_Template, 8, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoomComponent_h3_16_Template, 2, 1, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RoomComponent_h2_17_Template, 2, 1, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-chat", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoomComponent_ng_template_21_Template, 12, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx.openModal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \uB2C9\uB124\uC784 \uC124\uC815\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Room", ctx.ROOM_ID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameModel.timerRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHost && !ctx.gameModel.isInGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx.users)("hostUser", ctx.hostUser)("mySelf", ctx.mySelf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameModel.myTurn && ctx.gameModel.isPrepare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameModel.myTurn && ctx.gameModel.isGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameModel.myTurn && ctx.gameModel.isGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gameModel", ctx.gameModel)("socket", ctx.socket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatContainer", ctx.chatList)("socket", ctx.socket);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_13__["CanvasComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCheckBox"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"]], styles: [".pad[_ngcontent-%COMP%] {\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] }]; }, { nickNameRequiredModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nickNameRequiredModal']
        }], nickName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yyMF":
/*!*******************************************!*\
  !*** ./src/app/controller/state/State.ts ***!
  \*******************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
class State {
    constructor(c) {
        this.controller = c;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map