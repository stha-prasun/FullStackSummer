import express from "express";
import { addUser, getAllProfessionals, test } from "../controller/userController.js";

const router = express.Router();

router.route("/test").get(test);

router.route("/add").post(addUser);

router.route("/get/all").get(getAllProfessionals);

export default router;