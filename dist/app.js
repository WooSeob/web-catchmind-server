"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const main_1 = require("./controllers/main");
// import path from "path";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
// const app = express();
class App {
    constructor() {
        this.application = express_1.default();
    }
}
const app = new App().application;
app.engine("pug", require("pug").__express);
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "pug");
// app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
var http = require("http").createServer(app);
// const serverOptions: socket_io.ServerOptions = {
//   origins: "http://localhost:4200",
// };
// socket_io;
// var io: SocketIO.Server = socket_io(http, serverOptions);
var io = new socket_io_1.Server(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
    },
});
main_1.SocketHandler.createInstance(io);
// var handler = require("./controllers/main").getHandler(io);
// io.sockets.on("connect", handler);
module.exports = {
    app,
    httpServer: http,
};
