import mongoose, { Schema, model, Model, Document } from "mongoose"
import { Logger } from "../controllers/util";
require("dotenv").config()

//const dbURI = "mongodb://localhost:27017/Loc8r";

const PASSWORD = process.env.DB_PASSWORD
Logger.log(PASSWORD)
const dbURI = `mongodb+srv://my_atlas_user:${PASSWORD}@cluster0.zxqpu.mongodb.net/Loc8r`;

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + dbURI);
});
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});

const gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected through " + msg);
    callback();
  });
};

// For nodemon restarts
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});

// For app termination
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});

// For Heroku app terination
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});

interface IWord{
  word: string;
  count: number;
}
interface IWordDoc extends IWord, Document{

}
const wordSchema:Schema = new Schema({
    word: {
      type: String,
      unique: true,
      required: true,
    },
    count: {
      type: Number,
      default: 1,
    },
  });

const Word = model<IWordDoc>("Word", wordSchema);

export {IWord, Word, IWordDoc}
