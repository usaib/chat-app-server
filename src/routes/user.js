import express from "express";

import * as UserController from "../controllers/User/UserController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/getAllUsers", apiAuth, UserController.allUsers);
router.post("/me", UserController.getProfile);
router.post("/create", UserController.create);
router.post("/deleteUser", apiAuth, UserController.remove);
router.post("/updateUser", apiAuth, UserController.update);

module.exports = router;
