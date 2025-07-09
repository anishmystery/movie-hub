import express from "express";
import { getTVShowById } from "../controllers/tvShowController.js";

const tvShowRouter = express.Router();

tvShowRouter.get("/:id", getTVShowById);

export default tvShowRouter;
