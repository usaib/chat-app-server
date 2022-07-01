import express from "express";

import * as AuthController from "../controllers/Auth/AuthController";
import apiAuth from "../middleware/apiAuth";

const router = express.Router();

//= ===============================
// All routes
//= ===============================

router.post("/google", AuthController.SignInWithGoogle);
router.post("/SignIn", AuthController.SignIn);
router.post("/SignOut", AuthController.SignOut);

module.exports = router;
