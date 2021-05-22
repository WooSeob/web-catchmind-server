import express from "express";
import createError from "http-errors";
import { Server, Socket } from "socket.io";
import path from "path";
import { ApiRouter } from "./api/routes";
import { Logger } from "./util";
import mongoose from "mongoose";
import { RoomHandler } from "./handlers/RoomHandler";
import { LobbyHandler } from "./handlers/LobbyHandler";
import { RoomPool } from "./models/RoomPool";
import http from "http";

export default class App {
  public application: express.Application;
  public http: http.Server;
  public io: Server;

  constructor() {
    this.application = express();

    this.application.engine("pug", require("pug").__express);
    this.application.set("views", path.join(__dirname, "views"));
    this.application.set("view engine", "pug");
    // app.use(logger("dev"));
    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: false }));
    this.application.use(express.static(path.join(__dirname, "public")));
    // app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, "public")));

    this.application.get("*", function (req, res, next) {
      res.sendFile(path.join(__dirname, "public", "index.html"));
    });

    this.application.use(function (req, res, next) {
      next(createError(404));
    });

    this.application.use("/api", (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
      res.header(
        "Access-Control-Allow-headers",
        "Origin, X-Requested-with, \
  Content-Type, Accept, Authorization"
      );
      next();
    });

    this.application.use("/api", new ApiRouter().getRouter());

    // error handler
    this.application.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render("error");
    });

    this.http = http.createServer(this.application);
    var io: Server = new Server(this.http, {
      cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
      },
    });
    // SocketHandler.createInstance(io);

    io.on("connection", (socket: Socket) => {
      LobbyHandler.set(socket);
      RoomHandler.set(socket);
    });

    RoomPool.setServer(io);
  }
}
