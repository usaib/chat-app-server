import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./src/routes/user";
import Auth from "./src/routes/auth";
import Room from "./src/routes/room";

dotenv.config();
require("./src/config/sequelize");
const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(cors());
app.use(bodyParser.json());
app.use("/user", User);
app.use("/auth", Auth);
app.use("/room", Room);

module.exports = app;
