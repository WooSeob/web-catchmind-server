import express from "express";
import createError from "http-errors";
import socket_io, { Server } from "socket.io";
import path from "path";
import { SocketHandler } from "./controllers/main";
import { ApiRouter } from "./api/routes";
import { Logger } from "./controllers/util";
import mongoose from  "mongoose"

// import path from "path";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
// const app = express();
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.engine("pug", require("pug").__express);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(function (req, res, next) {
  next(createError(404));
});

app.use("/api", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://172.30.1.20:4200");
  res.header(
    "Access-Control-Allow-headers",
    "Origin, X-Requested-with, \
  Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api", new ApiRouter().getRouter());

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

var io: socket_io.Server = new Server(http, {
  cors: {
    origin: "http://172.30.1.20:4200",
    methods: ["GET", "POST"],
  },
});
SocketHandler.createInstance(io);

// var handler = require("./controllers/main").getHandler(io);
// io.sockets.on("connect", handler);
module.exports = {
  app,
  httpServer: http,
};
