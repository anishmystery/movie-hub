import express from "express";
import {
  getPersonById,
  getPopularPeople,
} from "../controllers/peopleController.js";

const peopleRouter = express.Router();

peopleRouter.get("/popular", getPopularPeople);

peopleRouter.get("/:id", getPersonById);

export default peopleRouter;
