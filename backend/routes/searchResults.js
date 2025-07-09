import express from "express";
import { getSearchResults } from "../controllers/searchResultsController.js";

const searchResultsRouter = express.Router();

searchResultsRouter.get("/", getSearchResults);

export default searchResultsRouter;
