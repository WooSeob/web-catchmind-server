"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const routes_1 = require("./api/routes");
const RoomHandler_1 = require("./handlers/RoomHandler");
const LobbyHandler_1 = require("./handlers/LobbyHandler");
const RoomPool_1 = require("./models/RoomPool");
const http_1 = __importDefault(require("http"));
class App {
    constructor() {
        this.application = express_1.default();
        this.application.engine("pug", require("pug").__express);
        this.application.set("views", path_1.default.join(__dirname, "views"));
        this.application.set("view engine", "pug");
        // app.use(logger("dev"));
        this.application.use(express_1.default.json());
        this.application.use(express_1.default.urlencoded({ extended: false }));
        this.application.use(express_1.default.static(path_1.default.join(__dirname, "public")));
        // app.use(cookieParser());
        // app.use(express.static(path.join(__dirname, "public")));
        this.application.get("*", function (req, res, next) {
            res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
        });
        this.application.use(function (req, res, next) {
            next(http_errors_1.default(404));
        });
        this.application.use("/api", (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-headers", "Origin, X-Requested-with, \
  Content-Type, Accept, Authorization");
            next();
        });
        this.application.use("/api", new routes_1.ApiRouter().getRouter());
        // error handler
        this.application.use(function (err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get("env") === "development" ? err : {};
            // render the error page
            res.status(err.status || 500);
            res.render("error");
        });
        this.http = http_1.default.createServer(this.application);
        var io = new socket_io_1.Server(this.http, {
            cors: {
                origin: "http://localhost:4200",
                methods: ["GET", "POST"],
            },
        });
        // SocketHandler.createInstance(io);
        io.on("connection", (socket) => {
            LobbyHandler_1.LobbyHandler.set(socket);
            RoomHandler_1.RoomHandler.set(socket);
        });
        RoomPool_1.RoomPool.setServer(io);
    }
}
exports.default = App;
