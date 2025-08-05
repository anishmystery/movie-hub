import express from "express";
import {
  addTVShowReview,
  getTVShowById,
  removeReview,
} from "../controllers/tvShowController.js";

const tvShowRouter = express.Router();

tvShowRouter.get("/:id", getTVShowById);

tvShowRouter.post("/:id/reviews", addTVShowReview);

tvShowRouter.delete("/:id/reviews", removeReview);

export default tvShowRouter;
