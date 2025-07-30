import express from "express";
import {
  addMovieReview,
  getMovieById,
} from "../controllers/movieController.js";

const movieRouter = express.Router();

movieRouter.get("/:id", getMovieById);

movieRouter.post("/:id/reviews", addMovieReview);

export default movieRouter;
