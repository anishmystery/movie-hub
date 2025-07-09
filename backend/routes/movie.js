import express from "express";
import { getMovieById } from "../controllers/movieController.js";

const movieRouter = express.Router();

movieRouter.get("/:id", getMovieById);

export default movieRouter;
