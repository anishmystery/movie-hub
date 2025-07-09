import express from "express";
import { getPersonById } from "../controllers/peopleController.js";

const peopleRouter = express.Router();

peopleRouter.get("/:id", getPersonById);

export default peopleRouter;
