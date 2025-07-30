import express from "express";
import {
  addTVShowReview,
  getTVShowById,
} from "../controllers/tvShowController.js";

const tvShowRouter = express.Router();

tvShowRouter.get("/:id", getTVShowById);

tvShowRouter.post("/:id/reviews", addTVShowReview);

export default tvShowRouter;
