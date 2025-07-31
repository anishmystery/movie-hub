import express from "express";
import {
  addToFavourites,
  addToWatchlist,
  getUserById,
  removeFromWatchlist,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/:id", getUserById);

userRouter.post("/watchlist", addToWatchlist);

userRouter.post("/favourite", addToFavourites);

userRouter.delete("/watchlist/:id", removeFromWatchlist);

export default userRouter;
