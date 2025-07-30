import express from "express";
import {
  addToFavourites,
  addToWatchlist,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/watchlist", addToWatchlist);

userRouter.post("/favourite", addToFavourites);

export default userRouter;
