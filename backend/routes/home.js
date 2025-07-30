import express from "express";
import {
  getPopularTitles,
  getTopRatedTitles,
} from "../controllers/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/popular", getPopularTitles);

homeRouter.get("/top-rated", getTopRatedTitles);

export default homeRouter;
