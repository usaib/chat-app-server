import express from "express";

import * as RoomController from "../controllers/Room/RoomController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getAllRooms", RoomController.allRooms);
router.post("/create", RoomController.create);
router.post("/createRoomChat", RoomController.createRoomChat);
router.post("/getRoomChat", RoomController.getRoomChat);

module.exports = router;
