import express from "express";
import { addUser, test } from "../controller/userController.js";

const router = express.Router();

router.route("/test").get(test);

router.route("/add").post(addUser);

export default router;