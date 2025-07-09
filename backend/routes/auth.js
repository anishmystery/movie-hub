import express from "express";
import { login, signup } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.get("/login", login);

authRouter.get("/signup", signup);

export default authRouter;
