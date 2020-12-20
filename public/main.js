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



function ChatComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r1.data);
} }
function ChatComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_1_div_1_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_1_div_2_Template, 5, 2, "div", 3);
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
    ngOnInit() { }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], inputs: { chatContainer: "chatContainer" }, decls: 2, vars: 1, consts: [[1, "chattingView"], ["style", "padding: 0px", 4, "ngFor", "ngForOf"], [2, "padding", "0px"], ["class", "row msg", 4, "ngIf"], [1, "row", "msg"], [2, "color", "red"], [1, "col-12", "col-md-3", "e"], [1, "col-12", "col-md-9", "e"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatContainer.chats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".chattingView[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 50vh;\n\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n.e[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.msg[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  background-color: snow;\n  padding-left: 7px;\n  border: 1px solid whitesmoke;\n}\n\n.left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.content[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: auto;\n  border: 1px solid DodgerBlue;\n  padding: 5px 10px 5px 10px;\n  display: inline;\n}\n\n.chat-time[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  display: inline;\n}\n\n.send[_ngcontent-%COMP%] {\n  display: inline;\n  width: 200px;\n  height: auto;\n}\n\n.-input[_ngcontent-%COMP%] {\n  height: 38px;\n}\n\n.system[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  border: 1px solid gray;\n  background-color: gray;\n  text-align: center;\n  width: auto;\n  color: white;\n  padding: 5px 10px 5px 10px;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0dGluZ1ZpZXcge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiA1MHZoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uZSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5yb3cge1xuICBtYXJnaW46IDBweDtcbn1cbi5tc2cge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbm93O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuLmxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgRG9kZ2VyQmx1ZTtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmNoYXQtdGltZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc2VuZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uLWlucHV0IHtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4uc3lzdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css'],
            }]
    }], function () { return []; }, { chatContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\byunw\dev\catchmind\client\src\main.ts */"zUnb");


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



function SidebarComponent_div_0_li_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDE04");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_li_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u270F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_0_li_4_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_div_0_li_4_span_6_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.score.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.score.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3.score.turn);
} }
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uAC8C\uC784\uC911");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_0_li_4_Template, 7, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users.PUsers);
} }
function SidebarComponent_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \uD83D\uDD79");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_div_4_span_3_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r6.name == ctx_r1.hostUser);
} }
class SidebarComponent {
    constructor() { }
    ngOnInit() { }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { users: "users", hostUser: "hostUser" }, decls: 5, vars: 2, consts: [[4, "ngIf"], [1, "list-title"], ["id", "userList"], ["class", "user-element", 4, "ngFor", "ngForOf"], ["id", "ingameList"], [4, "ngFor", "ngForOf"], [1, "user-element"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uB300\uAE30\uC2E4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_div_4_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.PUsers.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users.NpUsers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0px;\n}\n.user-element[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  border: 1px solid lightgray;\n  background-color: whitesmoke;\n}\n.list-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-left: 7px;\n  background-color: rgb(8, 26, 32);\n  color: antiquewhite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLnVzZXItZWxlbWVudCB7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4ubGlzdC10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDI2LCAzMik7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG4iXX0= */"] });
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
        }] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [["routerLink", "room/1234"], ["routerLink", "room/7777"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wellcom to Catch M!nd!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Room#1234");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Room#7777");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "DNdT":
/*!*************************!*\
  !*** ./src/app/draw.ts ***!
  \*************************/
/*! exports provided: Draw, User, Score, CanvasController, ChatContainer, Chat, Phase, UserContainer, game_cmd_Handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasController", function() { return CanvasController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContainer", function() { return ChatContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase", function() { return Phase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContainer", function() { return UserContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game_cmd_Handler", function() { return game_cmd_Handler; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "oqF8");

class Draw {
}
class User {
    constructor(name) {
        this.isParticipant = false;
        this.score = null;
        this.name = name;
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
        this.score = 0;
        this.correct = false;
        this.turn = false;
    }
    inflate(scoreLike) {
        this.score = scoreLike.score;
        this.correct = scoreLike.correct;
        this.turn = scoreLike.turn;
        return this;
    }
    matched(score) {
        this.correct = true;
        this.score += score;
    }
    turnClear() {
        this.correct = false;
    }
}
class CanvasController {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.init();
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
    draw(x, y) {
        this.ctx.fillStyle = 'green';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    init() {
        if (window.devicePixelRatio) {
            const { width: hidefCanvasWidth, height: hidefCanvasHeight, } = this.canvas.getBoundingClientRect();
            const hidefCanvasCssWidth = hidefCanvasWidth;
            const hidefCanvasCssHeight = hidefCanvasHeight;
            this.canvas.setAttribute('width', hidefCanvasWidth * window.devicePixelRatio);
            this.canvas.setAttribute('height', hidefCanvasHeight * window.devicePixelRatio);
            this.canvas.style.width = `${hidefCanvasCssWidth}px`;
            this.canvas.style.height = `${hidefCanvasCssHeight}px`;
            this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
    }
}
class ChatContainer {
    constructor() {
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
    }
}
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
var Phase;
(function (Phase) {
    Phase["ready"] = "ready";
    Phase["prepare"] = "prepare";
    Phase["guess"] = "guess";
    Phase["result"] = "result";
})(Phase || (Phase = {}));
class UserContainer {
    constructor() {
        this.users = [];
        this.NpUsers = [];
        this.PUsers = [];
    }
    static getInstance() {
        if (!UserContainer.instance) {
            this.instance = new UserContainer();
        }
        return this.instance;
    }
    changeTurn(username) {
        for (let user of this.PUsers) {
            user.score.turn = user.getName() == username;
            //턴 유저만 true 할당
        }
    }
    setUsers(users) {
        for (let user of users) {
            this.users.push(new User(user.name).inflate(user));
        }
        console.log(this.users);
    }
    add(user) {
        this.users.push(user);
        this.NpUsers.push(user);
    }
    sortParticipants() { }
    setCorrect(username, score) {
        // 맞췄을때
        for (let user of this.getParticipants()) {
            if (user.getName() == username) {
                user.score.matched(score);
            }
            console.log("score : ", user.score.score);
        }
    }
    resetCorrect() {
        // 턴이 변경될때
        for (let user of this.getParticipants()) {
            user.score.turnClear();
        }
    }
    resetParticipants() {
        //게임 끝나고 리셋
        for (let user of this.users) {
            user.isParticipant = false;
            user.score = null;
        }
        this.NpUsers = this.users;
        this.PUsers = [];
    }
    setParticipants(participants) {
        //게임 시작하거나 새로들어왔을때 세팅
        this.PUsers = [];
        this.NpUsers = [];
        for (let user of this.users) {
            let pFlag = false;
            for (let pUser of participants) {
                if (user.getName() == pUser) {
                    pFlag = true;
                    user.isParticipant = true;
                    user.score = new Score();
                }
            }
            if (pFlag) {
                this.PUsers.push(user);
            }
            else {
                this.NpUsers.push(user);
            }
        }
        console.log('setParticipants : ', this.NpUsers, this.PUsers);
        console.log(participants);
    }
    leaveUser(username) {
        //유저 나갈때
        let idx = 0;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].getName() == username) {
                idx = i;
                break;
            }
        }
        this.users.splice(idx, 1);
        this.PUsers = [];
        this.NpUsers = [];
        for (let user of this.users) {
            if (user.isParticipant) {
                this.PUsers.push(user);
            }
            else {
                this.NpUsers.push(user);
            }
        }
    }
    getParticipants() {
        let participants = [];
        for (let user of this.users) {
            if (user.isParticipant) {
                participants.push(user);
            }
        }
        return participants;
    }
    getNotParticipants() {
        let participants = [];
        for (let user of this.users) {
            if (!user.isParticipant) {
                participants.push(user);
            }
        }
        return participants;
    }
}
class game_cmd_Handler {
    constructor(mySelf) {
        this.timerRun = false;
        this.remainTime = 0;
        this.isGuess = false;
        this.isPrepare = false;
        this.isResult = false;
        this.isReady = false;
        this.words = []; // 제시된 세가지 단어
        this.word = ''; // 현재 단어
        this.wordSecret = ''; //가려진 현재 단어
        this.isInGame = false; //현재 게임중인지
        this.myTurn = false; // 내 차례인지
        this.participants = []; //현재 참여자
        console.log(mySelf);
        this.mySelf = mySelf;
    }
    setParticipants(participants) {
        //participants : string[]
        for (let name of participants) {
            //받은 리스트에서
            for (let i = 0; i < this.participants.length; i++) { }
        }
    }
    static createInstance(mySelf) {
        this.instance = new game_cmd_Handler(mySelf);
    }
    static getInstance() {
        if (game_cmd_Handler.instance) {
            return game_cmd_Handler.instance;
        }
        else {
            console.log('game instance not found');
            return null;
        }
    }
    changePhase(cmd) {
        // console.log(cmd)
        this.timerRun = true;
        this.phase = cmd.state;
        this.isGuess = false;
        this.isReady = false;
        this.isPrepare = false;
        this.isResult = false;
        switch (cmd.state) {
            case _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].ready:
                this.isReady = true;
                break;
            case _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].prepare:
                this.isPrepare = true;
                break;
            case _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].guess:
                this.isGuess = true;
                break;
            case _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].result:
                this.isResult = true;
                break;
            default:
                break;
        }
        if (this.phase == _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].guess) {
            if (this.myTurn) {
                this.word = cmd.data;
            }
            else {
                this.wordSecret = ' ';
                for (let i = 0; i < this.word.length; i++) {
                    this.wordSecret = this.wordSecret + '_ ';
                }
                console.log(this.wordSecret);
            }
        }
        else if (this.phase == _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].result) {
        }
        // ChatContainer.getInstance().push(Chat.SysMsg(cmd.state + '시작'));
    }
    changeTurn(cmd) {
        this.clearTurn();
        UserContainer.getInstance().changeTurn(cmd.data);
        this.myTurn = cmd.data == this.mySelf.getName();
        this.word = '';
        CanvasController.getInstance().clear();
        ChatContainer.getInstance().push(Chat.SysMsg(cmd.data + '의 차례입니다.'));
    }
    changeRound(cmd) {
        ChatContainer.getInstance().push(Chat.SysMsg('Round #' + cmd.data));
    }
    sortScore(score) {
        // 나중에 변경
        // participants : string[]
        //1. 빠진사람 제거
        //2. 점수별 정렬
        //TODO Participants를 Map으로 쓰는게 좋겠다.
    }
    startGame(cmd_msg) {
        let participants = cmd_msg.data;
        this.isInGame = true;
        UserContainer.getInstance().setParticipants(participants);
        ChatContainer.getInstance().push(Chat.SysMsg('<<게임 시작>>'));
    }
    clearGame() {
        this.timerRun = false;
        this.myTurn = false;
        this.isInGame = false;
        this.word = '';
        this.wordSecret = '';
        ChatContainer.getInstance().push(Chat.SysMsg('<<게임이 끝났습니다.>>'));
        UserContainer.getInstance().PUsers.forEach((u) => {
            let msg = `${u.getName()} : ${u.score.score} 점`;
            ChatContainer.getInstance().push(Chat.SysMsg(msg));
        });
        UserContainer.getInstance().resetParticipants();
    }
    clearTurn() {
        this.words = [];
        this.word = '';
        this.wordSecret = '';
        UserContainer.getInstance().resetCorrect();
    }
    cmd_Handler(cmd) {
        console.log("cmd received", cmd);
        if (cmd.type == _message__WEBPACK_IMPORTED_MODULE_0__["Cmd_Type"].TRANSITION) {
            // Phase가 바뀜
            // let cmd_msg:Cmd_Transition = Cmd_Transition.getInstance().inflate(cmd)
            this.changePhase(cmd);
        }
        else if (cmd.type == _message__WEBPACK_IMPORTED_MODULE_0__["Cmd_Type"].TURN) {
            // ~의 차례로 차례가 바뀜
            // let cmd_msg:Cmd_Turn = Cmd_Turn.getInstance().inflate(cmd)
            this.changeTurn(cmd);
        }
        else if (cmd.type == _message__WEBPACK_IMPORTED_MODULE_0__["Cmd_Type"].TURN_LEFT) {
            // 턴 유저가 나감
            ChatContainer.getInstance().push(Chat.SysMsg('턴 유저였던 ' + cmd.data + '가 퇴장해서 다음턴으로 넘어갑니다.'));
            // let cmd_msg:Cmd_Turn = Cmd_Turn.getInstance().inflate(cmd)
            this.changeTurn(cmd);
        }
        else if (cmd.type == _message__WEBPACK_IMPORTED_MODULE_0__["Cmd_Type"].ROUND) {
            // 라운드가 바뀜
            // let cmd_msg:Cmd_Round = Cmd_Round.getInstance().inflate(cmd)
            this.changeRound(cmd);
        }
        else if (cmd.type == _message__WEBPACK_IMPORTED_MODULE_0__["Cmd_Type"].GAME_OVER) {
            // 게임이 끝
            //TODO 최종 결과 받은거 처리하게 만들기
            // let cmd_msg:Cmd_GameOver = Cmd_GameOver.getInstance().inflate(cmd)
            this.clearGame();
        }
        else if (cmd.type == _message__WEBPACK_IMPORTED_MODULE_0__["Cmd_Type"].GAME_START) {
            // let cmd_msg:Cmd_GameStart = Cmd_GameStart.getInstance().inflate(cmd)
            this.startGame(cmd);
        }
    }
    msg_Handler(msg) {
        if (msg.type == 'words') {
            console.log("msg received", msg);
            if (this.myTurn) {
                // 세 가지 단어중에서 선택
                msg.data.forEach(function (w) {
                    console.log(this);
                    this.words.push(w);
                }.bind(this));
            }
        }
        else if (msg.type == 'system') {
            console.log("msg received", msg);
            if (this.phase == _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].prepare) {
            }
            else if (this.phase == _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].guess) {
                // ~가 맞췄습니다
                //
                UserContainer.getInstance().setCorrect(msg.data.user, msg.data.score);
                ChatContainer.getInstance().push(Chat.SysMsg(msg.data.user + '가 맞췄습니다.'));
            }
            else if (this.phase == _message__WEBPACK_IMPORTED_MODULE_0__["PhaseType"].result) {
                // 턴 스코어
                // msg.data = {name:string, score:number}
                console.log(msg.data);
                let scoreData = msg.data;
                for (let user of scoreData) {
                    UserContainer.getInstance().setCorrect(user.name, user.score);
                }
                // this.sortScore(scoreData);
            }
        }
        else if (msg.type == 'timer') {
            this.remainTime = msg.data;
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'catchmind';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "container"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [1, "container", 2, "background-color", "snow"], [1, "row"], [1, "col-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A9 Developed By WooSeob Byun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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



// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';










// const config: SocketIoConfig = { url: 'http://localhost:9999', options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
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


class CanvasComponent {
    constructor() { }
    ngOnInit() { }
}
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(); };
CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasComponent, selectors: [["app-canvas"]], decls: 2, vars: 0, consts: [["id", "canvas", 2, "width", "630px", "border", "2px solid blue"]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-canvas',
                templateUrl: './canvas.component.html',
                styleUrls: ['./canvas.component.css'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "oqF8");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas/canvas.component */ "bTD/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chat/chat.component */ "+XlM");











function RoomComponent_h4_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u23F3 ", ctx_r0.gameHandler.remainTime, "");
} }
function RoomComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.gameStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Game Start! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomComponent_div_6_button_1_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.gameHandler.isInGame);
} }
function RoomComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uC544\uB798 \uB2E8\uC5B4\uC911\uC5D0\uC11C \uACE8\uB77C\uC8FC\uC138\uC694");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectWord0(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_13_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectWord1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_div_13_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.selectWord2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.gameHandler.words[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.gameHandler.words[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.gameHandler.words[2], " ");
} }
function RoomComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.gameHandler.word, " ");
} }
function RoomComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uB2E8\uC5B4\uB97C \uCD94\uCE21\uD574\uC8FC\uC138\uC694");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.gameHandler.wordSecret);
} }
class RoomComponent {
    constructor(route) {
        this.route = route;
        this.mousedown = false;
        this.isHost = false;
        this.ROOM_ID = "7777";
        this.ROOM_ID = route.snapshot.params['roomID'];
        this.mySelf = new _draw__WEBPACK_IMPORTED_MODULE_1__["User"]('user' + Math.floor(Math.random() * 1000));
        this.myName = this.mySelf.getName();
    }
    sendChat() {
        this.socket.emit('chat-msg', this.MsgToSend);
    }
    checkGuess() {
        console.log(this.guess + ' guess 전송');
        this.socket.emit('game-msg', this.guess);
    }
    selectWord0() {
        if (this.gameHandler.myTurn) {
            this.socket.emit('game-msg', 0); //0, 1, 2 사이 인덱스
        }
    }
    selectWord1() {
        if (this.gameHandler.myTurn) {
            this.socket.emit('game-msg', 1); //0, 1, 2 사이 인덱스
        }
    }
    selectWord2() {
        if (this.gameHandler.myTurn) {
            this.socket.emit('game-msg', 2); //0, 1, 2 사이 인덱스
        }
    }
    gameStart() {
        let gameSetting = {
            type: 'start',
            data: {
                round: 2,
                timeout: 10,
            },
        };
        this.socket.emit('game-cmd', gameSetting);
    }
    toggleMouseDown(b) {
        this.mousedown = b;
    }
    touchStart(x, y) {
        this.touchStartX = x;
        this.touchStartY = y;
    }
    handleMouseEnter(e) {
        if (this.mousedown &&
            this.gameHandler.myTurn &&
            this.gameHandler.phase == _message__WEBPACK_IMPORTED_MODULE_2__["PhaseType"].guess) {
            //e : TouchEvent
            //e.touches : TouchList
            //e.touches[0] : Touch
            //e.touches[0].pageX 
            let isMoblie = false;
            var drawData = { X: 0, Y: 0 };
            if (e instanceof MouseEvent) {
                drawData = { X: e.offsetX, Y: e.offsetY };
            }
            else if (e instanceof TouchEvent) {
                isMoblie = true;
            }
            if (isMoblie) {
                console.log(e);
                drawData = {
                    X: e.touches[0].pageX - e.target.offsetLeft,
                    Y: e.touches[0].pageY - e.target.offsetTop
                };
            }
            // console.log(e)
            // console.log('X: ' + e.pageX + ', Y: ' + e.pageY); //-> "mouseenter"
            _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().draw(drawData.X, drawData.Y);
            this.socket.emit('draw cmd', drawData);
            // this.dataService.sendMessage(data);
        }
    }
    initInstances(reason) {
        if (reason) {
            console.log("disconnected");
            console.log(reason);
        }
        var canvas = document.getElementById('canvas');
        _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].createInstance(canvas);
        _draw__WEBPACK_IMPORTED_MODULE_1__["game_cmd_Handler"].createInstance(this.mySelf);
        this.chatList = _draw__WEBPACK_IMPORTED_MODULE_1__["ChatContainer"].getInstance();
        this.gameHandler = _draw__WEBPACK_IMPORTED_MODULE_1__["game_cmd_Handler"].getInstance();
        this.users = _draw__WEBPACK_IMPORTED_MODULE_1__["UserContainer"].getInstance();
    }
    ngOnInit() {
        // this.socket = io('ws://localhost:9999');
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_3__["io"])('ws://catchm1nd.herokuapp.com/');
        console.log(this.socket);
        this.initInstances(null);
        this.socket.on('connect', () => {
            let joinData = {
                roomID: this.ROOM_ID,
                user: this.mySelf,
            };
            console.log(joinData);
            this.socket.emit('join', joinData);
            this.socket.on('draw cmd', (data) => {
                console.log(data);
                _draw__WEBPACK_IMPORTED_MODULE_1__["CanvasController"].getInstance().draw(data.X, data.Y);
            });
            this.socket.on('disconnect', this.initInstances);
            this.socket.on('sys-msg', (msg) => {
                // 1. 호스트 변경
                if (msg.type == 'host-changed') {
                    this.hostUser = msg.data;
                    this.isHost = this.hostUser == this.myName;
                    this.chatList.push(_draw__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg('방의 호스트가 ' + msg.data + '로 변경되었습니다.'));
                }
                else if (msg.type == 'user-welcome') {
                    // 새로온 유저에게 기존 리스트 전달
                    // msg.data {
                    //   host: string,
                    //   users: user[],
                    //   participants: user[]
                    // }
                    console.log('sys-msg : user-welcome received!!');
                    console.log(msg.data);
                    this.hostUser = msg.data.host;
                    this.isHost = this.hostUser == this.myName;
                    this.users.setUsers(msg.data.users);
                    this.users.setParticipants(msg.data.participants);
                }
                else if (msg.type == 'user-join') {
                    // 유저 접속
                    console.log('userjoin' + msg.data);
                    if (msg.data != this.mySelf.getName()) {
                        this.users.add(new _draw__WEBPACK_IMPORTED_MODULE_1__["User"](msg.data));
                    }
                    this.chatList.push(_draw__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg(msg.data + '가 입장했습니다.'));
                }
                else if (msg.type == 'user-leave') {
                    // 유저 msg.data가 나감
                    // 삭제
                    console.log('userleave ' + msg.data);
                    this.users.leaveUser(msg.data);
                    this.chatList.push(_draw__WEBPACK_IMPORTED_MODULE_1__["Chat"].SysMsg(msg.data + '가 게임을 떠났습니다.'));
                }
            });
            this.socket.on('chat-msg', (msg) => {
                this.chatList.push(_draw__WEBPACK_IMPORTED_MODULE_1__["Chat"].UserMsg(msg.from, msg.data));
                //스크롤 최하단 고정
                let ele = document.querySelector('.chattingView');
                ele.scrollTop = ele.scrollHeight;
            });
            this.socket.on('game-msg', function (msg) {
                _draw__WEBPACK_IMPORTED_MODULE_1__["game_cmd_Handler"].getInstance().msg_Handler(msg);
            }.bind(this));
            this.socket.on('game-cmd', function (cmd) {
                _draw__WEBPACK_IMPORTED_MODULE_1__["game_cmd_Handler"].getInstance().cmd_Handler(cmd);
            }.bind(this));
        });
        var canvas = document.getElementById('canvas');
        console.log(canvas);
        canvas.addEventListener('mousemove', function (e) {
            this.handleMouseEnter(e);
        }.bind(this), false);
        canvas.addEventListener('mousedown', function (e) {
            this.mousedown = true;
        }.bind(this), false);
        canvas.addEventListener('mouseup', function (e) {
            this.mousedown = false;
        }.bind(this), false);
        canvas.addEventListener('touchstart', function (e) {
            e.preventDefault();
            console.log(e);
            this.touchStart(e.touches[0].pageX, e.touches[0].pageY);
            this.mousedown = true;
        }.bind(this), false);
        canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            this.handleMouseEnter(e);
        }.bind(this), false);
        canvas.addEventListener('touchend', function (e) {
            e.preventDefault();
            this.mousedown = false;
        }.bind(this), false);
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["ng-component"]], decls: 32, vars: 12, consts: [[1, "row"], [1, "col-md-10"], [1, "col-md-2"], [4, "ngIf"], ["id", "host-section", "style", "\n    border: 1px solid lightgray;\n    margin-bottom: 7px;\n    background-color: whitesmoke;\n  ", 4, "ngIf"], [1, "col-12", "col-md-2", 2, "padding", "0px", "padding-left", "10px"], [2, "padding", "0px", "background-color", "whitesmoke", 3, "users", "hostUser"], [1, "col-12", "col-md-7", 2, "margin", "0px", "padding-left", "5px", "padding-right", "5px"], [2, "border", "1px solid lightgray"], ["id", "word-section"], ["id", "word-select", 4, "ngIf"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Endter Guess!", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "col-md-3", 2, "margin", "0px", "padding-left", "5px", "padding-right", "10px"], [2, "border", "1px solid lightgray", "background-color", "whitesmoke"], [3, "chatContainer"], ["type", "text", "placeholder", "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694.", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "host-section", 2, "border", "1px solid lightgray", "margin-bottom", "7px", "background-color", "whitesmoke"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "word-select"]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomComponent_h4_5_Template, 2, 1, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-sidebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RoomComponent_div_13_Template, 9, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RoomComponent_h4_14_Template, 2, 1, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoomComponent_div_15_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_Template_input_ngModelChange_18_listener($event) { return ctx.guess = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_20_listener() { return ctx.checkGuess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Guess ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-chat", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomComponent_Template_input_ngModelChange_26_listener($event) { return ctx.MsgToSend = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomComponent_Template_button_click_28_listener() { return ctx.sendChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \uC804\uC1A1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "test version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Room #", ctx.ROOM_ID, " - ", ctx.myName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameHandler.timerRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx.users)("hostUser", ctx.hostUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameHandler.myTurn && ctx.gameHandler.isPrepare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameHandler.myTurn && ctx.gameHandler.isGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameHandler.myTurn && ctx.gameHandler.isGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.guess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatContainer", ctx.chatList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.MsgToSend);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vcm9vbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "oqF8":
/*!****************************!*\
  !*** ./src/app/message.ts ***!
  \****************************/
/*! exports provided: PhaseType, Cmd_Type, Cmd_Message, Cmd_Transition, Cmd_Turn, Cmd_TurnLeft, Cmd_Round, Cmd_GameOver, Cmd_GameStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhaseType", function() { return PhaseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_Type", function() { return Cmd_Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_Message", function() { return Cmd_Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_Transition", function() { return Cmd_Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_Turn", function() { return Cmd_Turn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_TurnLeft", function() { return Cmd_TurnLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_Round", function() { return Cmd_Round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_GameOver", function() { return Cmd_GameOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmd_GameStart", function() { return Cmd_GameStart; });
var Sys_Type;
(function (Sys_Type) {
    Sys_Type[Sys_Type["HOST_CHANGED"] = 0] = "HOST_CHANGED";
    Sys_Type[Sys_Type["USER_WELCOME"] = 1] = "USER_WELCOME";
    Sys_Type[Sys_Type["USER_JOIN"] = 2] = "USER_JOIN";
    Sys_Type[Sys_Type["USER_LEAVE"] = 3] = "USER_LEAVE";
})(Sys_Type || (Sys_Type = {}));
var Msg_Type;
(function (Msg_Type) {
    Msg_Type[Msg_Type["WORDS"] = 0] = "WORDS";
    Msg_Type[Msg_Type["SYSTEM"] = 1] = "SYSTEM";
    Msg_Type[Msg_Type["TIMER"] = 2] = "TIMER";
})(Msg_Type || (Msg_Type = {}));
// export interface Cmd_Message{
//     type: Cmd_Type;
//     data: any; 
// }
var PhaseType;
(function (PhaseType) {
    PhaseType["ready"] = "ready";
    PhaseType["prepare"] = "prepare";
    PhaseType["guess"] = "guess";
    PhaseType["result"] = "result";
})(PhaseType || (PhaseType = {}));
var Cmd_Type;
(function (Cmd_Type) {
    Cmd_Type[Cmd_Type["TRANSITION"] = 0] = "TRANSITION";
    Cmd_Type[Cmd_Type["TURN"] = 1] = "TURN";
    Cmd_Type[Cmd_Type["TURN_LEFT"] = 2] = "TURN_LEFT";
    Cmd_Type[Cmd_Type["ROUND"] = 3] = "ROUND";
    Cmd_Type[Cmd_Type["GAME_OVER"] = 4] = "GAME_OVER";
    Cmd_Type[Cmd_Type["GAME_START"] = 5] = "GAME_START";
})(Cmd_Type || (Cmd_Type = {}));
class Cmd_Message {
    inflate(CmdLike) {
        this.type = CmdLike.type;
        this.data = CmdLike.data;
        return this;
    }
}
class Cmd_Transition extends Cmd_Message {
    constructor(state, data) {
        super();
        this.type = Cmd_Type.TRANSITION;
        this.state = state;
        this.data = data;
    }
    static getInstance() {
        return new Cmd_Transition(null, null);
    }
    inflate(CmdLike) {
        super.inflate(CmdLike);
        this.data = CmdLike.data;
        this.state = CmdLike.state;
        return this;
    }
}
class Cmd_Turn extends Cmd_Message {
    constructor(data) {
        super();
        this.type = Cmd_Type.TURN;
        this.data = data;
    }
    static getInstance() {
        return new Cmd_Turn(null);
    }
}
class Cmd_TurnLeft extends Cmd_Message {
    constructor(data) {
        super();
        this.type = Cmd_Type.TURN_LEFT;
        this.data = data;
    }
    static getInstance() {
        return new Cmd_TurnLeft(null);
    }
}
class Cmd_Round extends Cmd_Message {
    constructor(data) {
        super();
        this.type = Cmd_Type.ROUND;
        this.data = data;
    }
    static getInstance() {
        return new Cmd_Round(null);
    }
}
class Cmd_GameOver extends Cmd_Message {
    constructor(data) {
        super();
        this.type = Cmd_Type.GAME_OVER;
        this.data = data;
    }
    static getInstance() {
        return new Cmd_GameOver(null);
    }
}
class Cmd_GameStart extends Cmd_Message {
    constructor(data) {
        super();
        this.type = Cmd_Type.GAME_OVER;
        this.data = data;
    }
    static getInstance() {
        return new Cmd_GameStart(null);
    }
}


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