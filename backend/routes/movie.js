import express from "express";
import {
  addMovieReview,
  getMovieById,
  removeReview,
} from "../controllers/movieController.js";

const movieRouter = express.Router();

movieRouter.get("/:id", getMovieById);

movieRouter.post("/:id/reviews", addMovieReview);

movieRouter.delete("/:id/reviews", removeReview);

export default movieRouter;
