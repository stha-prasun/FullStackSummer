import express from "express";
import { test, testPost } from "../controller/userController.js";

const router = express.Router();

router.route("/test").get(test);

router.route("/test").post(testPost);

export default router;