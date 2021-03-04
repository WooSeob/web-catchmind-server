import express, { Router } from "express";
import { Lobby } from "../controllers/lobby";

export class ApiRouter {
  router = express.Router();
  constructor() {
    this.router.route("/new-room").get(Lobby.makeNewRoom);

    this.router.route("/search-room").get(Lobby.matchMaking);
  }
  public getRouter(): Router{
      return this.router
  }
}
